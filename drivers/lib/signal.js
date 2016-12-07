'use strict';

const EventEmitter = require('events').EventEmitter;
const SignalManager = Homey.wireless('433').Signal;

const signals = new Map();
const registerLock = new Map();
const registerPromises = new Map();

module.exports = class Signal extends EventEmitter {
	constructor(signalKey, parser, debounceTime) {
		super();
		this.payloadParser = parser || (payload => ({ payload: SignalManager.bitArrayToString(payload) }));
		this.debounceTimeout = Number(debounceTime) || 500;
		this.signalKey = signalKey;

		if (!signals.has(signalKey)) {
			const signal = new SignalManager(signalKey);

			signal.setMaxListeners(100);

			signal.debouncers = new Map();

			signals.set(signalKey, signal);
			registerLock.set(signalKey, new Set());
		}
		this.signal = signals.get(signalKey);

		// Add debounce event for timeout if there is none
		if (!this.signal.debouncers.has(this.debounceTimeout)) {
			this.signal.debouncers.set(this.debounceTimeout, new Map());
			this.debounceBuffer = this.signal.debouncers.get(this.debounceTimeout);
			this.signal.on('payload', payload => {
				if (this.debounce(payload)) {
					Homey.log(`[Signal ${signalKey} ~${this.debounceTimeout}] payload:`, payload.join(''));
					this.signal.emit(`debounce_payload_${this.debounceTimeout}`, payload);
				}
			});
		} else {
			this.debounceBuffer = this.signal.debouncers.get(this.debounceTimeout);
		}

		this.signal.on(`debounce_payload_${this.debounceTimeout}`, payloadData => { // Start listening to payload event
			if (!this.manualDebounceFlag && !this.signal.manualDebounceFlag) {
				if (true || registerLock.get(this.signalKey).has(this)) {
					// Copy array to prevent mutability issues with multiple drivers
					const payload = Array.from(payloadData).map(Number);
					this.emit('payload', payload);
					// Only continue if the received data is valid
					const data = this.payloadParser(payload);
					if (!data || data.constructor !== Object || !data.id) return;
					this.emit('data', data);
				}
			} else {
				Homey.log(`[Signal ${this.signalKey}] Manually debounced payload:`, payloadData.join(''));
			}
		});
		this.signal.on('payload_send', this.emit.bind(this, 'payload_send'));
	}

	register(callback) {
		callback = typeof callback === 'function' ? callback : (() => null);
		if (registerLock.get(this.signalKey).size === 0) {
			Homey.log(`[Signal ${this.signalKey}] registered signal`);

			registerPromises.set(this.signalKey, new Promise((resolve, reject) => {
				this.signal.register(err => { // Register signal
					if (err) {
						Homey.log(`[Signal ${this.signalKey}] signal register error`, err);
						this.emit('error', err);
						reject(err);
					} else {
						resolve();
					}
				});
			}));
		}
		registerLock.get(this.signalKey).add(this);
		return registerPromises.get(this.signalKey)
			.then(() => callback(null, true))
			.catch(err => {
				callback(err);
				throw err;
			});
	}

	unregister() {
		registerLock.get(this.signalKey).delete(this);
		if (registerLock.get(this.signalKey).size === 0) {
			Homey.log(`[Signal ${this.signalKey}] unregistered signal`);

			this.signal.unregister(err => {
				if (err) this.emit('error', err);
			});
		}
	}

	manualDebounce(timeout, allListeners) {
		if (allListeners) {
			this.signal.manualDebounceFlag = true;
			clearTimeout(this.signal.manualDebounceTimeout);
			this.signal.manualDebounceTimeout = setTimeout(() => this.signal.manualDebounceFlag = false, timeout);
		} else {
			this.manualDebounceFlag = true;
			clearTimeout(this.manualDebounceTimeout);
			this.manualDebounceTimeout = setTimeout(() => this.manualDebounceFlag = false, timeout);
		}
	}

	send(payload) {
		return new Promise((resolve, reject) => {

			const frameBuffer = new Buffer(payload);
			this.signal.tx(frameBuffer, (err, result) => { // Send the buffer to device
				if (err) { // Print error if there is one
					Homey.log(`[Signal ${this.signalKey}] sending payload failed:`, err);
					reject(err);
				} else {
					Homey.log(`[Signal ${this.signalKey}] send payload:`, payload.join(''));
					this.signal.emit('payload_send', payload);
					resolve(result);
				}
			});
		}).catch(err => {
			Homey.error(`[Signal ${this.signalKey}] tx error:`, err);
			this.emit('error', err);
			throw err;
		});
	}

	pauseDebouncers() {
		this.signal.debouncers.forEach(debounceBuffer => {
			debounceBuffer.forEach(debouncer => {
				debouncer.pause();
			});
		});
	}

	resumeDebouncers() {
		this.signal.debouncers.forEach(debounceBuffer => {
			debounceBuffer.forEach(debouncer => {
				debouncer.resume();
			});
		});
	}

	tx(payload, callback) {
		callback = callback || (() => null);
		const frameBuffer = new Buffer(payload);
		this.signal.tx(frameBuffer, callback);
	}

	debounce(payload) {
		if (this.debounceTimeout <= 0) return payload;

		const payloadString = payload.join('');
		if (!this.debounceBuffer.has(payloadString)) {
			this.debounceBuffer.set(
				payloadString,
				new Debouncer(this.debounceTimeout, () => this.debounceBuffer.delete(payloadString))
			);
			return payload;
		}
		const debouncer = this.debounceBuffer.get(payloadString);
		if (debouncer.state === Debouncer.FINISHED) {
			debouncer.reset();
			return payload;
		}

		debouncer.reset();
		return null;
	}
};

class Debouncer {
	constructor(time, idleFn, idleTime) {
		this.origTime = time;
		this.idle = false;
		this.idleFn = idleFn || (() => null);
		this.idleTime = isNaN(idleTime) ? 10000 : Number(idleTime);

		this._init();
		this.start();
	}

	_init() {
		this.time = this.origTime;
		this.state = Debouncer.INITED;
	}

	_setTimeout() {
		this.timeout = setTimeout(() => {
			if (Date.now() - this.startTime < this.time - 10) {
				this.state = Debouncer.REFRESH;
				this.time -= Date.now() - this.startTime;
				this.start();
			} else {
				this.state = Debouncer.FINISHED;
			}
		}, this.time >= 0 ? this.time : 0);
	}

	set state(state) {
		this._state = state;
		if (this._state === Debouncer.FINISHED) {
			if (!this.idle) {
				this.idle = true;
				this.idleTimeout = setTimeout(this.idleFn, this.idleTime);
			}
		} else if (this.idle) {
			clearTimeout(this.idleTimeout);
			this.idle = false;
		}
	}

	get state() {
		return this._state;
	}

	start() {
		if (this.state === Debouncer.INITED || this.state === Debouncer.PAUSED || this.state === Debouncer.REFRESH) {
			this.startTime = Date.now();
			this.state = Debouncer.STARTED;
			this._setTimeout();
		}
	}

	stop() {
		if (this.state === Debouncer.INITED || this.state === Debouncer.PAUSED) {
			clearTimeout(this.timeout);
			this.state = Debouncer.FINISHED;
		}
	}

	pause() {
		if (this.state === Debouncer.STARTED) {
			clearTimeout(this.timeout);
			this.state = Debouncer.PAUSED;
			this.time -= Date.now() - this.startTime;
		}
	}

	resume() {
		if (this.state === Debouncer.PAUSED) {
			this.start();
		}
	}

	reset() {
		if (this.state === Debouncer.FINISHED) {
			this._init();
			this.start();
		} else if (this.state === Debouncer.STARTED) {
			this.time = this.origTime;
			this.startTime = Date.now();
		} else if (this.state === Debouncer.PAUSED) {
			this.time = this.origTime;
		}
	}
}

Debouncer.INITED = -1;
Debouncer.STARTED = 0;
Debouncer.PAUSED = 1;
Debouncer.FINISHED = 2;
Debouncer.REFRESH = 3;

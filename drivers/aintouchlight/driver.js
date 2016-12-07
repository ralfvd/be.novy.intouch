'use strict';
/* eslint-disable */
const config = {
	capabilities: ['onoff'],
	pair: {
		viewOrder: ['generic_imitate', 'generic_test_button_2', 'generic_done'],
		views: [{
			template: '../../drivers/lib/pair/imitate.html',
			options: {
				svg: '../../433_generator/assets/aintouchlight/icon.svg',
				body: 'Press the light button; repeat until you get a green mark',
				prepend: [],
				append: [],
				title: 'views.generic_imitate.title',
				svgWidth: '80vw',
				svgHeight: '70vh',
				initWithDeviceData: false,
				previous: true,
				next: false
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_imitate'
		}, {
			template: '../../drivers/lib/pair/test_button.html',
			options: {
				next: 'generic_done',
				initWithDeviceData: true,
				sendToggleOnInit: false,
				prepend: [],
				append: [],
				svg: '../../433_generator/assets/aintouchlight/icon.svg',
				title: 'Test the lights',
				body: 'Press the test button ; the lights should toggle on/off',
				svgWidth: '80vw',
				svgHeight: '70vh',
				previous: true,
				buttonLabel: 'test'
			},
			prepend: ['../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js',
				'../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js',
				'../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js'
			],
			append: [],
			id: 'generic_test_button_2'
		}, {
			template: '../../drivers/lib/pair/done.html',
			options: {
				title: 'views.generic_done.title',
				prepend: '',
				append: ''
			},
			prepend: [],
			append: [],
			id: 'generic_done'
		}]
	},
	images: {
		small: '../../433_generator/assets/aintouchlight/images/small.jpg',
		large: '../../433_generator/assets/aintouchlight/images/large.jpg'
	},
	id: 'aintouchlight',
	driver: '../../433_generator/drivers/intouchlight.js',
	signal: 'intouchlight',
	debounceTimeout: 1000,
	class: 'light',
	triggers: [{
		id: 'aintouchlight:received',
		title: 'Signal received from remote',
		args: [{
			name: 'device',
			type: 'device',
			filter: 'driver_id=aintouchlight'
		}]
	}],
	actions: [{
		id: 'aintouchlight:send',
		title: 'Send light command to the damper',
		args: [{
			name: 'device',
			type: 'device',
			filter: 'driver_id=aintouchlight'
		}]
	}],
	name: 'Novy Intouch'
};
const Driver = require(config.driver);
const driver = new Driver(config);
module.exports = Object.assign(
  {},
	driver.getExports(),
	{ init: (devices, callback) => driver.init(module.exports, devices, callback) }
);

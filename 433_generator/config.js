module.exports = {
	deviceClasses: {
		intouchlight: {
			extends: 'generic_toggle',
			driver: './drivers/intouchlight.js',
			signal: {
				id: 'intouchlight',
				sof: [336], // Start of frame
				eof: [], // End of frame
				words: [
					[401, 711], // 0
					[755, 357], // 1
				],
				interval: 10000, // Time between two subsequent signals. You can get this by trial and error. (most of the time the rule is: if it works it works)
				sensitivity: 0.7, // between 0.0 and 2.0. This value indicates how far off the timings of the words can be and still be parsed (e.g. `1000, 300` is still parsable to word `1100, 390`)
				repetitions: 20, // choose something that you like, more repetitions means sending takes longer but is more likely to arrive to the receiver
				minimalLength: 18, // (37 - sof.length) / word[x].length
				maximalLength: 18, // all signals should be of this length
			},
			debounceTimeout: 1000,
			class: 'light',
			capabilities: ['onoff'],
			pair: {
				viewOrder: [
					'generic_imitate',
					'generic_test_button_2',
					'generic_done',
				],
				viewOptions: {
					generic_imitate: {
						svg: './assets/aintouchlight/icon.svg',
						body: 'Press the light button; repeat until you get a green mark',
					},
					generic_test_button_2: {
						svg: './assets/aintouchlight/icon.svg',
						title: 'Test the lights',
						body: 'Press the test button ; your lights should toggle on/off',
					},
				},
			},
			triggers: [
				{
					id: 'received',
					title: 'Signal received from remote',
				},
			],
			actions: [
				{
					id: 'send',
					title: 'Send light command to the damper',
				},
			],
		},
	},
	devices: {
		aintouchlight: {
			extends: 'intouchlight',
			name: 'Novy Intouch',
			images: {
				small: './assets/aintouchlight/images/small.jpg',
				large: './assets/aintouchlight/images/large.jpg',
			},
		},
	},
};

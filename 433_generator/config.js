module.exports = {
	deviceClasses: {
		doorbell: {
			extends: 'generic_toggle',
			driver: './drivers/doorbell.js',
			signal: {
				id: 'aDoorbell',
				sof: [364], // Start of frame
				eof: [], // End of frame
				words: [
					[385, 1085], // 0
					[1113, 358], // 1
				],
				interval: 10000, // Time between two subsequent signals. You can get this by trial and error. (most of the time the rule is: if it works it works)
				sensitivity: 0.9, // between 0.0 and 2.0. This value indicates how far off the timings of the words can be and still be parsed (e.g. `1000, 300` is still parsable to word `1100, 390`)
				repetitions: 20, // choose something that you like, more repetitions means sending takes longer but is more likely to arrive to the receiver
				minimalLength: 17, // (35 - sof.length) / word[x].length
				maximalLength: 17, // all signals should be of this length
			},
			debounceTimeout: 1000,
			class: 'doorbell',
			capabilities: ['alarm_generic'],
			pair: {
				viewOrder: [
					'generic_imitate',
					'generic_test_button_2',
					'generic_done',
				],
				viewOptions: {
					generic_imitate: {
						svg: './assets/adoorbell/icon.svg',
						body: 'deviceClasses.doorbell.views.generic_imitate.body',
					},
					generic_test_button_2: {
						svg: './assets/adoorbell/bell.svg',
						title: 'deviceClasses.doorbell.views.generic_test_button.title',
						body: 'deviceClasses.doorbell.views.generic_test_button_2.body',
					},
				},
			},
			triggers: [
				{
					id: 'received',
					title: 'deviceClasses.doorbell.triggers.received.title',
				},
			],
			actions: [
				{
					id: 'send',
					title: 'deviceClasses.doorbell.triggers.send.title',
				},
			],
		},
	},
	devices: {
		adoorbell: {
			extends: 'doorbell',
			images: {
				small: './assets/adoorbell/images/small.jpg',
				large: './assets/adoorbell/images/large.jpg',
			},
		},
	},
};

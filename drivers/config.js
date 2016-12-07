'use strict';
/* eslint-disable */
module.exports = {
	devices: {
		adoorbell: {
			capabilities: ['alarm_generic'],
			pair: {
				viewOrder: ['generic_imitate', 'generic_test_button_2', 'generic_done'],
				views: [{
					template: './lib/pair/imitate.html',
					options: {
						svg: '../433_generator/assets/adoorbell/icon.svg',
						body: 'deviceClasses.doorbell.views.generic_imitate.body',
						prepend: [],
						append: [],
						title: 'views.generic_imitate.title',
						svgWidth: '80vw',
						svgHeight: '70vh',
						initWithDeviceData: false,
						previous: true,
						next: false
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_imitate'
				}, {
					template: './lib/pair/test_button.html',
					options: {
						next: 'generic_done',
						initWithDeviceData: true,
						sendToggleOnInit: false,
						prepend: [],
						append: [],
						svg: '../433_generator/assets/adoorbell/bell.svg',
						title: 'deviceClasses.doorbell.views.generic_test_button.title',
						body: 'deviceClasses.doorbell.views.generic_test_button_2.body',
						svgWidth: '80vw',
						svgHeight: '70vh',
						previous: true,
						buttonLabel: 'test'
					},
					prepend: ['./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js',
						'./../assets/433_generator/css/styles.css',
						'./../assets/433_generator/css/svg.css',
						'./../assets/433_generator/js/svghighlighter.js'
					],
					append: [],
					id: 'generic_test_button_2'
				}, {
					template: './lib/pair/done.html',
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
				small: '../433_generator/assets/adoorbell/images/small.jpg',
				large: '../433_generator/assets/adoorbell/images/large.jpg'
			},
			id: 'adoorbell',
			driver: '../433_generator/drivers/doorbell.js',
			signal: 'aDoorbell',
			debounceTimeout: 1000,
			class: 'doorbell',
			triggers: [{
				id: 'adoorbell:received',
				title: 'deviceClasses.doorbell.triggers.received.title',
				args: [{
					name: 'device',
					type: 'device',
					filter: 'driver_id=adoorbell'
				}]
			}],
			actions: [{
				id: 'adoorbell:send',
				title: 'deviceClasses.doorbell.triggers.send.title',
				args: [{
					name: 'device',
					type: 'device',
					filter: 'driver_id=adoorbell'
				}]
			}]
		}
	}
};

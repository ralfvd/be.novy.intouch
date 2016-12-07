'use strict';

module.exports = {
	driver: './driver',
	views: {
		list_devices: {
			template: './pair/default/list_devices.html',
			options: {
				loading_title: {
					required: false,
				},
				loading_footer: {
					required: false,
				},
				title: {
					required: false,
				},
				footer: {
					required: false,
				},
				next: true,
				previous: true,
			},
			append: [
				'../../assets/433_generator/js/default/list_devices.js',
				'../../assets/433_generator/css/default/list_devices.css',
			],
		},
		list_devices_singular: {
			template: './pair/default/list_devices_singular.html',
			options: {
				loading_title: {
					required: false,
				},
				loading_footer: {
					required: false,
				},
				title: {
					required: false,
				},
				footer: {
					required: false,
				},
				next: true,
				previous: true,
			},
			append: [
				'../../assets/433_generator/js/default/list_devices.js',
				'../../assets/433_generator/css/default/list_devices.css',
			],
		},
		add_devices: {
			template: './pair/default/add_devices.html',
			options: {
				next: false,
				previous: false,
			},
		},
		choose_slave: {
			template: './pair/default/choose_slave.html',
			options: {
				next: true,
				previous: true,
			},
		},
		done: {
			template: './pair/default/done.html',
			options: {
				next: false,
				previous: false,
			},
		},
		generic_info: {
			template: './pair/info.html',
			options: {
				title: {
					default: 'views.generic_info.title',
				},
				svg: {
					required: false,
				},
				body: {
					default: 'views.generic_info.body',
				},
				svgWidth: {
					default: '80vw',
				},
				svgHeight: {
					default: '70vh',
				},
				next: true,
				previous: true,
			},
			prepend: [
				'../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js',
			],
		},
		generic_imitate: {
			extends: 'generic_test_remote',
			template: './pair/imitate.html',
			options: {
				title: {
					default: 'views.generic_imitate.title',
				},
				body: {
					default: 'views.generic_imitate.body',
				},
				next: false,
			},
		},
		generic_codewheel: {
			template: './pair/codewheel.html',
			options: {
				title: {
					default: 'views.generic_codewheel.title',
				},
				body: {
					default: 'views.generic_codewheel.body',
				},
				codewheelList: {
					default: [
						{
							series: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
							mapOddToDot: true,
						},
					],
				},
				previous: true,
				next: true,
			},
			prepend: [
				'../../assets/433_generator/css/codewheel.css',
				'../../assets/433_generator/js/codewheel.js',
			],
		},
		generic_dipswitch: {
			template: './pair/dipswitch.html',
			options: {
				title: {
					default: 'views.generic_dipswitch.title',
				},
				body: {
					default: 'views.generic_dipswitch.body',
				},
				dipswitchList: {
					default: ['1', '2', '3', '4', '5', ['A', 'B', 'C', 'D', 'E']],
				},
				svgWidth: {
					default: '80vw',
				},
				svgHeight: {
					default: '24vh',
				},
				previous: true,
				next: true,
			},
			prepend: [
				'../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/dipswitch.css',
			],
		},
		generic_test_remote: {
			template: './pair/test_remote.html',
			options: {
				title: {
					default: 'views.generic_test_remote.title',
				},
				body: {
					default: 'views.generic_test_remote.body',
				},
				svg: {
					required: true,
				},
				svgWidth: {
					default: '80vw',
				},
				svgHeight: {
					default: '70vh',
				},
				initWithDeviceData: {
					default: false,
				},
				previous: true,
				next: true,
			},
			prepend: [
				'../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js',
			],
		},
		generic_program: {
			extends: 'generic_test_remote',
			template: './pair/program.html',
			options: {
				title: {
					default: 'views.generic_program.title',
				},
				body: {
					default: 'views.generic_program.body',
				},
			},
			prepend: [
				'../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js',
			],
		},
		generic_test_switch: {
			extends: 'generic_test_remote',
			template: './pair/test_switch.html',
			options: {
				title: {
					default: 'views.generic_test_switch.title',
				},
				svg: {
					default: '../../assets/433_generator/images/light.svg',
				},
				body: {
					default: 'views.generic_test_switch.body',
				},
				sendToggleOnInit: {
					default: false,
				},
				initWithDeviceData: {
					default: true,
				},
			},
			prepend: [
				'../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js',
			],
		},
		generic_test_button: {
			extends: 'generic_test_switch',
			template: './pair/test_button.html',
			options: {
				title: {
					default: 'views.generic_test_button.title',
				},
				body: {
					default: 'views.generic_test_button.body',
				},
				buttonLabel: {
					default: 'test',
				},
			},
			prepend: [
				'../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js',
			],
		},
		generic_test_button_2: {
			extends: 'generic_test_button',
			options: {
				body: {
					default: 'views.generic_test_button_2.body',
				},
			},
		},
		generic_test_switch_2: {
			extends: 'generic_test_switch',
			options: {
				body: {
					default: 'views.generic_test_switch_2.body',
				},
			},
		},
		generic_done: {
			template: './pair/done.html',
			options: {
				title: {
					default: 'views.generic_done.title',
				},
			},
		},
		generic_choice: {
			template: './pair/choice.html',
			options: {
				title: {
					default: 'views.generic_choice.title',
				},
				buttons: {
					default: [{ name: 'views.generic_choice.buttons.1', view: 'myView', svg: '<svg><path></path></svg>' }],
				},
				body: {
					default: 'views.generic_choice.body',
				},
				svgWidth: {
					default: '80vw',
				},
				svgHeight: {
					default: '65vh',
				},
			},
			prepend: [
				'../../assets/433_generator/css/styles.css',
				'../../assets/433_generator/css/svg.css',
				'../../assets/433_generator/js/svghighlighter.js',
			],
		},
		generic_choose_slave: {
			template: 'choose_slave',
			options: {
				previous: true,
				next: true,
			},
		},
		generic_choose_slave_2: {
			extends: 'generic_choose_slave',
		},
	},
	deviceClasses: {
		generic_remote: {
			class: 'other',
			pair: {
				viewOrder: [
					'generic_imitate',
					'generic_test_remote',
					'generic_done',
				],
				viewOptions: {
					generic_imitate: {
						title: 'deviceClasses.generic_remote.views.generic_imitate.title',
						body: 'deviceClasses.generic_remote.views.generic_imitate.body',
					},
				},
			},
		},
		generic_wall_switch: {
			extends: 'generic_remote',
			pair: {
				viewOptions: {
					generic_imitate: {
						title: 'deviceClasses.generic_wall_switch.views.generic_imitate.title',
						body: 'deviceClasses.generic_wall_switch.views.generic_imitate.body',
					},
					generic_test_remote: {
						title: 'deviceClasses.generic_wall_switch.views.generic_test_remote.title',
						body: 'deviceClasses.generic_wall_switch.views.generic_test_remote.body',
					},
				},
			},
		},
		generic_switch: {
			capabilities: ['onoff'],
			pair: {
				viewOrder: [
					'generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_program',
					'generic_test_switch',
					'generic_done',
				],
				viewOptions: {
					generic_choice: {
						title: 'deviceClasses.generic_switch.views.generic_choice.title',
						body: 'deviceClasses.generic_switch.views.generic_choice.body',
						buttons: [
							{
								name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_imitate',
								view: 'generic_imitate',
							},
							{
								name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_program',
								view: 'generic_program',
							},
						],
					},
					generic_test_switch_2: {
						next: 'generic_done',
						initWithDeviceData: true,
						sendToggleOnInit: false,
					},
					generic_program: {
						previous: 'generic_choice',
					},
				},
			},
		},
		generic_toggle: {
			extends: 'generic_switch',
			capabilities: [],
			pair: {
				viewOrder: [
					'generic_choice',
					'generic_imitate',
					'generic_test_button_2',
					'generic_program',
					'generic_test_button',
					'generic_done',
				],
				viewOptions: {
					generic_test_button_2: {
						next: 'generic_done',
						initWithDeviceData: true,
						sendToggleOnInit: false,
					},
				},
			},
		},
		generic_socket: {
			extends: 'generic_switch',
			class: 'socket',
			pair: {
				viewOrder: [
					'generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_program',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done',
				],
				viewOptions: {
					generic_program: {
						title: 'deviceClasses.generic_socket.views.generic_program.title',
						body: 'deviceClasses.generic_socket.views.generic_program.body',
					},
					generic_imitate: {
						title: 'deviceClasses.generic_socket.views.generic_imitate.title',
						body: 'deviceClasses.generic_socket.views.generic_imitate.body',
					},
					generic_test_switch: {
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch.body',
					},
					generic_test_switch_2: {
						next: true,
						title: 'deviceClasses.generic_socket.views.generic_test_switch.title',
						body: 'deviceClasses.generic_socket.views.generic_test_switch_2.body',
					},
					generic_choose_slave_2: {
						next: 'generic_done',
					},
				},
			},
		},
		generic_dipswitch_switch: {
			extends: 'generic_switch',
			class: 'socket',
			pair: {
				viewOrder: [
					'generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_info',
					'generic_dipswitch',
					'generic_test_switch',
					'generic_done',
				],
				viewOptions: {
					generic_choice: {
						title: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.title',
						body: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.body',
						buttons: [
							{
								name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_imitate',
								view: 'generic_imitate',
							},
							{
								name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_dipswitch',
								view: 'generic_info',
							},
						],
					},
					generic_info: {
						title: 'deviceClasses.generic_dipswitch_socket.views.generic_info.title',
						body: 'deviceClasses.generic_dipswitch_socket.views.generic_info.body',
						previous: 'generic_choice',
					},
				},
			},
		},
		generic_dipswitch_socket: {
			extends: 'generic_socket',
			class: 'socket',
			pair: {
				viewOrder: [
					'generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_info',
					'generic_dipswitch',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done',
				],
				viewOptions: {
					generic_choice: {
						title: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.title',
						body: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.body',
						buttons: [
							{
								name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_imitate',
								view: 'generic_imitate',
							},
							{
								name: 'deviceClasses.generic_dipswitch_socket.views.generic_choice.buttons.generic_dipswitch',
								view: 'generic_info',
							},
						],
					},
					generic_info: {
						title: 'deviceClasses.generic_dipswitch_socket.views.generic_info.title',
						body: 'deviceClasses.generic_dipswitch_socket.views.generic_info.body',
						previous: 'generic_choice',
					},
				},
			},
		},
		generic_codewheel_switch: {
			extends: 'generic_switch',
			pair: {
				viewOrder: [
					'generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_codewheel',
					'generic_test_switch',
					'generic_done',
				],
				viewOptions: {
					generic_choice: {
						body: 'deviceClasses.generic_codewheel_switch.views.generic_choice.body',
						buttons: [
							{
								name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_imitate',
								view: 'generic_imitate',
							},
							{
								name: 'deviceClasses.generic_codewheel_switch.views.generic_choice.buttons.generic_codewheel',
								view: 'generic_codewheel',
							},
						],
					},
					generic_codewheel: {
						previous: 'generic_choice',
					},
				},
			},
		},
		generic_codewheel_socket: {
			extends: 'generic_socket',
			class: 'socket',
			pair: {
				viewOrder: [
					'generic_choice',
					'generic_imitate',
					'generic_test_switch_2',
					'generic_choose_slave_2',
					'generic_codewheel',
					'generic_test_switch',
					'generic_choose_slave',
					'generic_done',
				],
				viewOptions: {
					generic_choice: {
						body: 'deviceClasses.generic_codewheel_switch.views.generic_choice.body',
						buttons: [
							{
								name: 'deviceClasses.generic_switch.views.generic_choice.buttons.generic_imitate',
								view: 'generic_imitate',
							},
							{
								name: 'deviceClasses.generic_codewheel_switch.views.generic_choice.buttons.generic_codewheel',
								view: 'generic_codewheel',
							},
						],
					},
					generic_codewheel: {
						previous: 'generic_choice',
					},
				},
			},
		},
		generic_sensor: {
			class: 'sensor',
			pair: {
				viewOrder: [
					'generic_imitate',
					'generic_test_remote',
					'generic_done',
				],
			},
		},
	},
};

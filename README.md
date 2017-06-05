### Novy intouch

With this app you can manage your Novy Intouch damper system via Homey.

Notice: currently, only toggling lights connected to your Novy Intouch damper is supported

### Settings
After installing the app on your Homey, add your Novy Intouch system by pairing the device.

### Flow support

*Triggers*

- When light command is received

*Conditions*

No conditions defined at this moment

*Actions*

- Send light command

Please note: there is no specific on or off setting; The Novy Intouch light will just toggle the current mode. Unfortunately, there is no way for Homey to know the state of the light (on or off)

### Speech

No speech support at this moment

### Acknowledgement

Testing done by 'Wingleader'

### Donate

If you like the app, consider a donation to support development  
[![Paypal donate][pp-donate-image]][pp-donate-link]

### Limitations

- You cannot turn off or turn on the light, only toggle it
- Turning on/off the actual damper system is not supported yet, this is under development and will come in a future version.

### ToDo

- Support of damper system ( increase / decrease damper speed , delayed turn off, etc )
- Translation to NL

### Known bugs

None

### Unknown bugs

Yes ;-)

### Changelog

- V0.0.3 2017-06-05 : Update sensitivity_level to new Homey requirements
- V0.0.2 2016-12-08 : First release to app store

[pp-donate-link]: https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ralf%40iae%2enl&lc=GB&item_name=homey%2dnovy&item_number=homey%2devohome&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted
[pp-donate-image]: https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif

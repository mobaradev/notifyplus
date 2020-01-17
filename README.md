# NotifyPlus
![alt text](https://github.com/mobaradev/notifyplus/raw/master/docs/logo.png)

Notification plugin for websites with pure JavaScript (no JQuery required)

**Live example:** https://mobaradev.github.io/notifyplus/

![alt_text](https://i.imgur.com/kCQdyvw.png)

![alt_text](https://i.imgur.com/hVR42eA.gif)

## Usage:
***NotifyPlus.addNotify(text, type, duration)***

*text is required*

*type is optional, default is 'success'; other types: 'info', 'warn', 'error'*

*duration is optional, default is 10s*

## Configuration:
***NotifyPlus.launch(settings)***
```
notifyPlus.launch({
    position: 'right',
    style: 'Default',
    updateInterval: 250
})
```

or you can use function:
***NotifyPlus.setSetting(setting, value)***

*position: 'right', 'left'*

*style: 'Default' or your own in css file*

This plugin is disabled by default.

You can launch it with
```
NotifyPlus.launch(setting); // or NotifyPlus.launch() for default settings
```

or simply use ***NotifyPlus.addNotify(text, type, duration)*** and plugin will start with default settings

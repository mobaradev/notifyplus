# NotifyPlus
![alt text](https://github.com/mobaradev/notifyplus/raw/master/logo.png)

Notification plugin for websites with pure JavaScript (no JQuery required)

**Live example:** https://mobaradev.github.io/notifyplus/

![alt_text](https://i.imgur.com/kCQdyvw.png)

![alt_text](https://i.imgur.com/hVR42eA.gif)

## Usage:
***notifyPlus.addNotify(text, type, duration)***

*text is required*

*type is optional, default is 'success'; other types: 'info', 'warn', 'error'*

*duration is optional, default in plugin is 10s*

## Configuration:
```
notifyPlus__settings = {
    position: 'right',
    style: 'Default',
    updateInterval: 250,
    autoLaunch: true
}
```

or you can use function:
***notifyPlus.setSetting(setting, value)***

*setting: position, style*
*value: for position: 'right', 'left'; for style: 'Default' or {your_style_name} on css file

if autoLaunch is false, you need to use
```
notifyPlus.launch();
```
to use this plugin

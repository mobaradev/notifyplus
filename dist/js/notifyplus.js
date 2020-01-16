window.addEventListener('DOMContentLoaded', () => {
    NotifyPlus.launch({
        position: 'right',
        style: 'Default',
        updateInterval: 250
    });
});


class Notification {
    constructor(id, text, type, duration) {
        this.id = id;
        this.text = text;
        this.type = type;
        this.duration = duration;
    }

    createHTML() {
        this.fullID = 'notifyplus__element__id=' + this.id;        
        document.getElementById('notifyplus-container').innerHTML = `
            <div class="element ${this.type}" style="bottom: ${20}" id="${this.fullID}">${this.text}</div>
        ` + document.getElementById('notifyplus-container').innerHTML;
        setTimeout(() => {
            document.getElementById(this.fullID).classList.add('visible'); // it's an animation
            console.log('Duration -> ' + this.duration);
            setTimeout(() => {
                console.log(this.fullID)
                document.getElementById(this.fullID).classList.add('hidden');
                setTimeout(() => {
                    this.removeNotification()
                }, 2000);
            }, this.duration);
        }, 50);
        
        
    }
    
    removeNotification() {
        document.getElementById(this.fullID).parentNode.removeChild(document.getElementById(this.fullID))
        
        for (let i = 0; i < NotifyPlus.notificaions.length; i++) {
            if (this.fullID == NotifyPlus.notificaions[i]["fullID"]) NotifyPlus.notificaions.splice(i, 1);
        }
    }
}

class NotifyPlus {
    static launch(settings) {
        this.isLaunched = true;
        this.notificaions = [];
        this.notificationCounter = 0;
        
        if (!settings) {
            this.settings = {
                position: 'right',
                style: 'Default',
                updateInterval: 250
            }
        } else this.settings = settings;
        
        
        this.setSetting('position', this.settings["position"]);
        this.setSetting('style', this.settings["style"]);
        
        setInterval(() => {
            this.updatePositions();
        }, this.settings["updateInterval"])
    }
    
    static set Notificaions(notification) {
        if(!this.notificaions) return console.log('Plugin not launched!');
        this.notificaions.push(notification);
        this.notificationCounter++;
        notification.createHTML();
    }
    
    static addNotify(text, type, duration) {
        if(!this.isLaunched) this.launch();
        if(!type) type = 'success';
        if(!duration) duration = 10;
        duration = duration * 1000;
        this.Notificaions = new Notification(this.notificationCounter, text, type, duration)
    }
    
    static updatePositions() {
        for (let i = 0; i < this.notificaions.length; i++) {
            if (!document.getElementById(this.notificaions[i]["fullID"]).classList.contains('hidden')) {
                let previousElementsHeights = 0;
                for (let j = 0; j < i; j++) {
                    previousElementsHeights += (document.getElementById(this.notificaions[i]["fullID"]).clientHeight + 20);
                }
                document.getElementById(this.notificaions[i]["fullID"]).style.bottom = 20 + previousElementsHeights;
            }
        }
    }
    
    static setSetting(setting, value) {
        if(!this.isLaunched) this.launch();
        if (setting == 'position') {
            if (value == 'right') value = 'pos__right';
            else if (value == 'left') value = 'pos__left';
            else return console.log('This value is unavaible! You can use only: right, left');
            
            document.getElementById('notifyplus-container').classList.remove('pos__right')
            document.getElementById('notifyplus-container').classList.remove('pos__left')
            document.getElementById('notifyplus-container').classList.add(value);
            
            for (let i = 0; i < this.notificaions.length; i++) {
                document.getElementById('notifyplus__element__id=' + this.notificaions[i]["id"]).classList.remove('pos__right');
                document.getElementById('notifyplus__element__id=' + this.notificaions[i]["id"]).classList.remove('pos__left');
                document.getElementById('notifyplus__element__id=' + this.notificaions[i]["id"]).classList.add(value);
            }
        } else if (setting == 'style') {
            if (!value) value = 'Default';
            document.getElementById('notifyplus-container').classList.add('notifyplus__style-' + value);
        }
    }
    
    static about() {
        console.log('NotifyPlus by Michał Obara @mobaradev on GitHub')
        console.log('Version 1.0.1')
        console.log('Check updates: github.com/')
        console.log('---')
        console.log('Plugin is currently ' + (this.isLaunched ? 'launched' : 'disabled (you can start with NotifyPlus.launch())'));
    }
}

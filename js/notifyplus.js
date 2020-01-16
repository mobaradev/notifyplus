window.addEventListener('DOMContentLoaded', () => {    
    if(notifyPlus__settings["autoLaunch"]) notifyPlus.launch();
});

class NotifyPlus {
    
    launch() {
        notifyPlus.setSetting('position', notifyPlus__settings["position"]);
        notifyPlus.setSetting('style', notifyPlus__settings["style"]);
        
        setInterval(() => {
            notifyPlus.updatePositions();
        }, notifyPlus__settings["updateInterval"])
    }
    
    addNotify(text, type, duration) {
        if(!type) type = 'success';
        if(!duration) duration = 10;
        duration = duration * 1000;
        let elementFullID = `notifyplus__element__id=${notifyPlus__notifiesCounter}`;
        let elementID = notifyPlus__notifiesCounter;
        let elementPostionY = 20 + notifyPlus__notifies.length * (32 + 20);
        document.getElementById('notifyplus-container').innerHTML = `
            <div class="element ${type}" style="bottom: ${elementPostionY}" id="${elementFullID}">${text}</div>
        ` + document.getElementById('notifyplus-container').innerHTML;
        setTimeout(() => {
            document.getElementById(elementFullID).classList.add('visible'); // it's an animation
            setTimeout(() => {
                console.log(elementFullID)
                document.getElementById(elementFullID).classList.add('hidden');
                setTimeout(() => {
                    for (let i = 0; i < notifyPlus__notifies.length; i++) {
                        if(notifyPlus__notifies[i]["id"] == elementID) {
                            notifyPlus__notifies.splice(i, 1);
                            document.getElementById(elementFullID).parentNode.removeChild(document.getElementById(elementFullID))
                        }
                    }
                }, 2000);
            }, duration);
        }, 50);
        notifyPlus__notifiesCounter++;
        notifyPlus__notifies.push({id: elementID, text: text, duration: duration})
    }
    
    updatePositions() {
        
        let n = notifyPlus__notifies.length;
        for (let i = 0; i < notifyPlus__notifies.length; i++) {
            //console.log('notifyplus__element__id=' + notifyPlus__notifies[i]["id"])
            if (!document.getElementById('notifyplus__element__id=' + notifyPlus__notifies[i]["id"]).classList.contains('hidden')) {
                let previousElementsHeights = 0;
                if (i > 0) {
                    for (let j = 0; j < i; j++) {
                        previousElementsHeights += (document.getElementById('notifyplus__element__id=' + (notifyPlus__notifies[j]["id"])).clientHeight + 20);
                    }

                }
                document.getElementById('notifyplus__element__id=' + notifyPlus__notifies[i]["id"]).style.bottom = 20 + previousElementsHeights;
            }
        }
    }
    
    setSetting(setting, value) {
        if (setting == 'position') {
            if (value == 'right') value = 'pos__right';
            else if (value == 'left') value = 'pos__left';
            else return console.log('This value is unavaible! You can use only: right, left');
            
            document.getElementById('notifyplus-container').classList.remove('pos__right')
            document.getElementById('notifyplus-container').classList.remove('pos__left')
            document.getElementById('notifyplus-container').classList.add(value);
            
            for (let i = 0; i < notifyPlus__notifies.length; i++) {
                document.getElementById('notifyplus__element__id=' + notifyPlus__notifies[i]["id"]).classList.remove('pos__right');
                document.getElementById('notifyplus__element__id=' + notifyPlus__notifies[i]["id"]).classList.remove('pos__left');
                document.getElementById('notifyplus__element__id=' + notifyPlus__notifies[i]["id"]).classList.add(value);
            }
        } else if (setting == 'style') {
            if (!value) value = 'Default';
            document.getElementById('notifyplus-container').classList.add('notifyplus__style-' + value);
        }
    }
    
    about() {
        console.log('NotifyPlus by Michał Obara @mobaradev on GitHub')
        console.log('Version 1.0.0')
        console.log('Check updates: github.com/')
    }
    
}

const notifyPlus = new NotifyPlus();
let notifyPlus__notifiesCounter = 0;

notifyPlus__settings = {
    position: 'right',
    style: 'Default',
    updateInterval: 250,
    autoLaunch: true
}

notifyPlus__notifies = [
    
]



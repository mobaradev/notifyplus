window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('success-button').addEventListener('click', () => NotifyPlus.addNotify('Success message!', 'success', getDuration()));
    document.getElementById('info-button').addEventListener('click', () => NotifyPlus.addNotify('Info message!', 'info', getDuration()));
    document.getElementById('warn-button').addEventListener('click', () => NotifyPlus.addNotify('Warn message!', 'warn', getDuration()));
    document.getElementById('error-button').addEventListener('click', () => NotifyPlus.addNotify('Error message!', 'error', getDuration()));
    
    document.getElementById('position__right-button').addEventListener('click', () => setPosition('right'));
    document.getElementById('position__left-button').addEventListener('click', () => setPosition('left'));
    
})

function getDuration() {
    let duration = document.getElementById('interval-input').value;
    if(!duration) duration = 3;
    return duration;
}

function setPosition(value) {
    document.getElementById('position__right-button').classList.remove('selected');
    document.getElementById('position__left-button').classList.remove('selected');
    if(value == 'right') document.getElementById('position__right-button').classList.add('selected');
    if(value == 'left') document.getElementById('position__left-button').classList.add('selected');
    NotifyPlus.setSetting('position', value);
}

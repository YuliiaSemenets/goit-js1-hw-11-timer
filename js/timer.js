class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate;
        this.selector = selector;

        this.refs = {
            days: document.querySelector(`${selector} [data-value="days"]`),
            hours: document.querySelector(`${selector} [data-value="hours"]`),
            mins: document.querySelector(`${selector} [data-value="mins"]`),
            secs: document.querySelector(` ${selector} [data-value="secs"]`),
            faceTimer: document.querySelector('#timer-1'),
        };

    }


start() {
    setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = this.targetDate - currentTime;
        this.timerStart(getTimeComponents(deltaTime));
    }, 1000)
}


    
    timerStart({ days, hours, mins, secs }) {
        this.refs.days.textContent = `${days}`;
        this.refs.hours.textContent = `${hours}`;
        this.refs.mins.textContent = `${mins}`;
        this.refs.secs.textContent = `${secs}`;
    }
}

const Timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jun 25, 2021'),
})

console.log(Timer)
Timer.start();

function pad(value) {
    return String(value).padStart(2, '0')
}

function getTimeComponents(time) {
    const days = pad(
      Math.floor(time / (1000 * 60 * 60 * 24)));
    
    const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    
    const mins = pad(
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    
    const secs = pad(
        Math.floor((time % (1000 * 60)) / 1000));
    
    
    return { days, hours, mins, secs };
    }

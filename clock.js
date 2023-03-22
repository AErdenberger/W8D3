class Clock {
    constructor(){
        // create a Date object
        this.date = new Date();
        // Store the hours, minutes, and seconds
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        // Call printTime
        this.printTime();
        // Schedule the tick at 1 second intervals
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        //Format the time in HH:MM:SS
        //user console.log to print it. 
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        // 1. Increment the time by one second.
        // 2. Call printTime.
        this.seconds++;
        // if this.seconds becomes 60, set to 0 and incriment this.minutes
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        };
        // if this.minutes becomes 60, set to 0 and incriment this.hours
        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
        };
        // if this.hours becomes 24, set to 0
        if (this.hours === 24) {
            this.hours = 0;
        };

        this.printTime();
    }
}

new Clock();
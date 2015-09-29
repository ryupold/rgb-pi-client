module RGBPI {

    export class Greeter {
        count: number = 0;
        timerToken: number;

        constructor() {

        }

        start() {
            this.timerToken = setInterval(() => console.log(":> "+this.count++), 500);
        }

        stop() {
            clearTimeout(this.timerToken);
        }

    }
}

var g = new RGBPI.Greeter();
g.start();
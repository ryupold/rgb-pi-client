
/// <reference path="scripts/typings/jquery/jquery.d.ts"/>

module RGBPI {

    export class Greeter {
        count: number = 0;
        timerToken: number;

        constructor() {
            
        }

        start() {
            //this.timerToken = setInterval(() => console.log(":> "+this.count++), 500);
            $("h1").text("asdasd");
        }

        stop() {
            clearTimeout(this.timerToken);
        }

    }
}

var g = new RGBPI.Greeter();
g.start();
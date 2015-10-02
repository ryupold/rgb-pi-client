/// <reference path="scripts/typings/jquery/jquery.d.ts"/>
var RGBPI;
(function (RGBPI) {
    var Greeter = (function () {
        function Greeter() {
            this.count = 0;
        }
        Greeter.prototype.start = function () {
            //this.timerToken = setInterval(() => console.log(":> "+this.count++), 500);
            $("h1").text("asdasd");
        };
        Greeter.prototype.stop = function () {
            clearTimeout(this.timerToken);
        };
        return Greeter;
    })();
    RGBPI.Greeter = Greeter;
})(RGBPI || (RGBPI = {}));
var g = new RGBPI.Greeter();
g.start();
//# sourceMappingURL=app.js.map
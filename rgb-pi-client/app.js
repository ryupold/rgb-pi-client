var RGBPI;
(function (RGBPI) {
    var Greeter = (function () {
        function Greeter() {
            this.count = 0;
        }
        Greeter.prototype.start = function () {
            var _this = this;
            this.timerToken = setInterval(function () { return console.log(":> " + _this.count++); }, 500);
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
/// <reference path="scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="scripts/typings/angularjs/angular-route.d.ts" />
//declare var angular: angular.IAngularStatic;
//declare var $: JQueryStatic;
var RGBPi;
(function (RGBPi) {
    'use strict';
    class AppController {
        constructor($http) {
            this.$http = $http;
            this.count = 0;
            this.init();
            this.load();
        }
        init() {
            $("h1").text("asdasd");
        }
        load() {
        }
    }
    AppController.$inject = ["$http"];
    RGBPi.AppController = AppController;
    angular.module("RGBPi");
})(RGBPi || (RGBPi = {}));
(() => {
    var app = angular.module("RGBPi", ['ngRoute']);
    app.config(RGBPi.Routes.configureRoutes);
})();
//# sourceMappingURL=app.js.map
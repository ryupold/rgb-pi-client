/// <reference path="scripts/typings/angularjs/angular.d.ts"/>
/// <reference path="scripts/typings/angularjs/angular-route.d.ts" />

//declare var angular: angular.IAngularStatic;
//declare var $: JQueryStatic;

module RGBPi {
    'use strict';

    export class AppController {
        count: number = 0;
        timerToken: number;

        static $inject = ["$http"];
        constructor(private $http: ng.IHttpService) {
            this.init();
            this.load();
        }

        init() {
            $("h1").text("asdasd");
        }

        load() {
            
        }

    }

    angular.module("RGBPi");
}

((): void=> {
    var app = angular.module("RGBPi", ['ngRoute']);
    app.config(RGBPi.Routes.configureRoutes);
})()
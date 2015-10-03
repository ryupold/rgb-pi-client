/// <reference path="scripts/typings/angularjs/angular.d.ts" />
/// <reference path="scripts/typings/angularjs/angular-route.d.ts" />

module RGBPi {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/", { controller: "RGBPi.AppController", templateUrl: "views/main.html", controllerAs: "appC" });
            $routeProvider.otherwise({ redirectTo: "/" });
        }
    }
}
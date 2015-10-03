/// <reference path="scripts/typings/angularjs/angular.d.ts" />
/// <reference path="scripts/typings/angularjs/angular-route.d.ts" />
var RGBPi;
(function (RGBPi) {
    class Routes {
        static configureRoutes($routeProvider) {
            $routeProvider.when("/", { controller: "RGBPi.AppController", templateUrl: "views/main.html", controllerAs: "appC" });
            $routeProvider.otherwise({ redirectTo: "/" });
        }
    }
    Routes.$inject = ["$routeProvider"];
    RGBPi.Routes = Routes;
})(RGBPi || (RGBPi = {}));
//# sourceMappingURL=app.routes.js.map
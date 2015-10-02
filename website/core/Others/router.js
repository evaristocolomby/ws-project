(function() {
    "use strict";
    angular.module("app").config(function($routeProvider, $locationProvider) {
        $routeProvider.when("/", {
            templateUrl: "partials/Query.html",
            controller: "appcontroller"
        }).when("/result", {
            templateUrl: "partials/Result.html",
            controller: "appcontroller"
        });
        $routeProvider.otherwise({
            redirectTo: "/"
        });
        $locationProvider.html5Mode(true);
    });
})();
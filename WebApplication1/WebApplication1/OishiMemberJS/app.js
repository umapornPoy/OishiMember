var app = angular.module('OishiMember', ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider) {
    $routeProvider

      
        .when("/Map", {
            templateUrl: "Map/Map"
        })
        .otherwise({
            templateUrl: "release/index"
        })
});
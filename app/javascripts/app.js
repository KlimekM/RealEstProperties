angular.module("realEstProperties", ["ngRoute","realEstProperties.controllers", "realEstProperties.services"])
.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl : "views/home.html",
      controller  : "mainCtrl"
    })
    .otherwise({
      redirectTo: "/"
    });
});
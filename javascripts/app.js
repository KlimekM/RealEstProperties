angular.module("realEstProperties", ["ngRoute","realEstProperties.controllers", "realEstProperties.services"])
.config(function($httpProvider, $routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl : "views/home.html",
      controller  : "mainCtrl"
    })
    .when("/listings/:listingId", {
      templateUrl : "views/listing.html",
      controller  : "listingCtrl"
    })
    .otherwise({
      redirectTo: "/"
    });
});
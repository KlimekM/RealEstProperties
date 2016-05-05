angular.module("realEstProperties.controllers", [])
.controller("mainCtrl", function($scope, Properties) {

  Properties.fetchProperties().then(function() {
    $scope.test = "fetched";
  })
});

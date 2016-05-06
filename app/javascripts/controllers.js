angular.module("realEstProperties.controllers", [])
.controller("mainCtrl", function($scope, Properties) {

  Properties.fetchProperties().then(function() {
    $scope.listings = Properties.listings;
    console.log($scope.listings);
  })

  $scope.showListing = function(index) {
    $scope.currentListing = $scope.listings[index]
    console.log($scope.currentListing);
  }

});

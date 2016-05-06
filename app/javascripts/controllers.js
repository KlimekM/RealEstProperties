angular.module("realEstProperties.controllers", [])
.controller("mainCtrl", function($scope, $location, Properties) {

  Properties.fetchProperties().then(function() {
    $scope.listings = Properties.listings;
    console.log($scope.listings);
  })

  $scope.changePath = function(listingId) {
    $location.path("/listings/"+ listingId)
  }

  $scope.goHome = function() {
    $location.path("/");
  }

  $scope.showListing = function(index) {
    $scope.currentListing = $scope.listings[index]
    $scope.changePath($scope.currentListing.id);
    console.log($scope.currentListing);
  }

});

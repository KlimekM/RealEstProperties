angular.module("realEstProperties.controllers", [])
.controller("mainCtrl", function($scope, $location, Properties) {

  Properties.fetchProperties().then(function() {
    $scope.listings = Properties.listings;
    console.log($scope.listings);
  })

  $scope.changePath = function(listingId) {
    $location.path("/listings/"+ listingId)
    $scope.currentListing = Properties.currentListing;
  }

  $scope.goHome = function() {
    $location.path("/");
  }

  $scope.showListing = function(index) {
    $scope.currentListing = $scope.listings[index]
    Properties.currentListing = $scope.currentListing;
    console.log("PROPERTIES HERE");
    console.log(Properties.currentListing);
    $scope.changePath($scope.currentListing.id);
    console.log($scope.currentListing);
  }

  $scope.printListing = function() {
    console.log("HERE");
    console.log(Properties.currentListing);
    console.log(Properties.currentListing.address);
  }

});

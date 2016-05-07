angular.module("realEstProperties.controllers", [])
.controller("mainCtrl", function($scope, $location, Properties) {

  Properties.fetchProperties().then(function() {
    $scope.listings = Properties.listings;
  })

  $scope.changePath = function(listingId) {
    $location.path("/listings/"+ listingId)
  }

  $scope.showListing = function(index) {
    $scope.currentListing = $scope.listings[index]
    Properties.currentListing = $scope.currentListing;
    $scope.changePath($scope.currentListing.id);
  }
})

.controller("listingCtrl", function($scope, $location, Properties) {

  $scope.currentListing = Properties.getCurrentListing();

  $scope.photos = $scope.currentListing.photos

  $scope.goHome = function() {
    $location.path("/");
  }
});
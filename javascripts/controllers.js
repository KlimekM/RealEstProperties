angular.module("realEstProperties.controllers", ["uiGmapgoogle-maps"])
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: "AIzaSyBHTPhVv2rc3AQfjzqkgnSrHrxc7veMp08",
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });
})

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

.controller("listingCtrl", function($scope, $location, Properties, uiGmapGoogleMapApi) {

  $scope.currentListing = Properties.getCurrentListing();

  $scope.photos = $scope.currentListing.photos;

  $scope.selectedImg = $scope.currentListing.photos[0];

  $scope.map = { center: { latitude: $scope.currentListing.latitude, longitude: $scope.currentListing.longitude }, zoom: 12 }

  $scope.marker = {
    id: 0,
    coords: {
      latitude: $scope.currentListing.latitude,
      longitude: $scope.currentListing.longitude
    }
  }

  $scope.makeLargeImage = function(index) {
    $scope.selectedImg = $scope.currentListing.photos[index];
  }

  $scope.goHome = function() {
    $location.path("/");
  }
});
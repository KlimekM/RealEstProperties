angular.module("realEstProperties.controllers", ["uiGmapgoogle-maps"])
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: "KEY",
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

.controller("listingCtrl", function($scope, $route, $location, Properties, uiGmapGoogleMapApi) {

  // Use when fetching data from the location.json file:
  Properties.fetchProperties().then(function() {
    $scope.findSingleProperty(Properties.listings, $route.current.params.listingId)

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

  })

  // Use when fetching a single property from the Buildout API:
  // Properties.fetchSingleProperty($route.current.params.listingId).then(function() {
  //   $scope.currentListing = Properties.currentListing;

  //   $scope.photos = $scope.currentListing.photos;

  //   $scope.selectedImg = $scope.currentListing.photos[0];

  //   $scope.map = { center: { latitude: $scope.currentListing.latitude, longitude: $scope.currentListing.longitude }, zoom: 12 }
  //   $scope.marker = {
  //     id: 0,
  //     coords: {
  //       latitude: $scope.currentListing.latitude,
  //       longitude: $scope.currentListing.longitude
  //     }
  //   }
  // })

  // Function to find a single property when fetching from the location.json file.
  $scope.findSingleProperty = function(properties, listingId) {
    var singleListing;
    for(var index = 0; index < properties.length; index++) {
      var specificProperty = properties[index];
      if (specificProperty.id == listingId) {
        console.log(specificProperty);
        $scope.currentListing = specificProperty;
      }
    }
  }

  $scope.makeLargeImage = function(index) {
    $scope.selectedImg = $scope.currentListing.photos[index];
  }

  $scope.goHome = function() {
    $location.path("/");
  }
});
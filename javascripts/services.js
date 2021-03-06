angular.module("realEstProperties.services", [])
.factory("Properties", function($http) {
  var o = {
    listings: [],
    currentListing: {}
  }

  // Fetching data from the Buildout API:
  // o.fetchProperties = function() {
  //   return $http({
  //     method: "GET",
  //     url: "https://crossorigin.me/https://buildout.com/api/v1/KEY/properties.json?limit=20",
  //   }).success(function(responseData) {
  //     o.listings = responseData.properties;
  //   });
  // }

  // Fetching data from the locations.json file:
  o.fetchProperties = function() {
    return $http.get("locations.json")
    .success(function(responseData) {
      o.listings = responseData.properties;
    })
  }

  // Fetching a single property from the Buildout API:
  // o.fetchSingleProperty = function(listingId) {
  //   return $http({
  //     method: "GET",
  //     url: "https://crossorigin.me/https://buildout.com/api/v1/KEY/properties/" + listingId + ".json",
  //   }).success(function(responseData) {
  //     o.currentListing = responseData.property
  //   });
  // }

  return o;
})
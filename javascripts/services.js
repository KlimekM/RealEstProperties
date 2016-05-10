angular.module("realEstProperties.services", [])
.factory("Properties", function($http) {
  var o = {
    listings: [],
    currentListing: {}
  }

  o.fetchProperties = function() {
    return $http({
      method: "GET",
      url: "https://crossorigin.me/https://buildout.com/api/v1/KEY/properties.json?limit=20",
    }).success(function(responseData) {
      o.listings = responseData.properties;
    });
  }

  o.fetchSingleProperty = function(listingId) {
    return $http({
      method: "GET",
      url: "https://crossorigin.me/https://buildout.com/api/v1/KEY/properties/" + listingId + ".json",
    }).success(function(responseData) {
      o.currentListing = responseData.property
    });
  }

  o.getCurrentListing = function() {
    return o.currentListing;
  }

  return o;
})
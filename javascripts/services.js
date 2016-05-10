angular.module("realEstProperties.services", [])
.factory("Properties", function($http) {
  var o = {
    listings: [],
    currentListing: {}
  }

  o.fetchProperties = function() {
    return $http({
      method: "GET",
<<<<<<< HEAD
      url: "https://buildout.com/api/v1/KEY/properties.json?limit=20"
=======
      url: "https://crossorigin.me/https://buildout.com/api/v1/543996f9d8bbdbe292c5bf74a414b277ace44313/properties.json?limit=20",
>>>>>>> 3620915... Successfully populate properties
    }).success(function(responseData) {
      o.listings = responseData.properties;
    });
  }

  o.getCurrentListing = function() {
    return o.currentListing;
  }

  return o;
})
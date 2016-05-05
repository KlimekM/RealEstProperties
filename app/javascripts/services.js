angular.module("realEstProperties.services", [])
.factory("Properties", function($http) {
  var o = {
    listings: [],
  }

  o.fetchProperties = function() {
    return $http({
      method: "GET",
      url: "https://buildout.com/api/v1/KEY/properties.json?limit=20"
    }).success(function(responseData) {
      o.listings = responseData.properties;
    });
  }

  return o;
});
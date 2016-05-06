angular.module("realEstProperties.services", [])
.factory("Properties", function($http) {
  var o = {
    listings: [],
  }

  o.fetchProperties = function() {
    return $http({
      method: "GET",
      url: "https://buildout.com/api/v1/543996f9d8bbdbe292c5bf74a414b277ace44313/properties.json?limit=20"
    }).success(function(responseData) {
      o.listings = responseData.properties;
    });
  }

  return o;
});
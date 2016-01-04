angular.module('fiveyear.factories', [])

.factory('Entries', function($http) {

  var getEntries = function() {
    return $http({
      method: 'GET',
      url   : '/api/entries'
    })
    .then(function(response) {
      return response.data;
    })
    .catch(function(err) {
      console.log('Error: ' + err);
    });
  };

  var addEntry = function() {
    return $http({
      method: 'POST',
      url   : 'api/entries'
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(err) {
      console.log('Error: '+ err);
    });
  };

  return {
    getEntries: getEntries
  };

});
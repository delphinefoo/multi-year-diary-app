angular.module('fiveyear.factories', [])

.factory('Entries', function($http) {
  var entry = {};

  var mem = {};

  var getEntries = function() {
    return $http({
      method: 'GET',
      url   : '/api/entries',
    })
    .then(function(response) {
      return response.data;
    })
    .catch(function(err) {
      console.log('Error: ', err);
    });
  };

  var getDateEntries = function(date) {
    return $http({
      method: 'GET',
      url   : '/api/entries/' + date.getMonth() + '/' + date.getDate() ,
      data  : date
    })
    .then(function(response) {
      return response.data;
    })
    .catch(function(err) {
      console.log('Error: ', err);
    });
  };

  var addEntry = function() {
    return $http({
      method: 'POST',
      url   : 'api/entries',
      data  : entry
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(err) {
      console.log('Error: ', err);
    });
  };

  var deleteEntry = function(id) {
    return $http({
      method: 'DELETE',
      url   : 'api/entries/' + id,
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(err) {
      console.log('Error: ', err);
    });
  };

  return {
    getEntries: getEntries,
    addEntry: addEntry,
    entry: entry,
    deleteEntry: deleteEntry,
    getDateEntries: getDateEntries
  };

});

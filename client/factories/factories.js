angular.module('fiveyear.factories', [])

.factory('Entries', function($http) {
  var entry = {};

  var getEntries = function() {
    return $http({
      method: 'GET',
      url   : '/api/entries'
    })
    .then(function(response) {
      return response.data;
      console.log('response to GET: ', response);
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
    deleteEntry: deleteEntry
  };

});

/*.factory('NewDate', function() {
  var newDate = function() {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  };

  return {
    newDate: newDate
  };

});*/
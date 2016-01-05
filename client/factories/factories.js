angular.module('fiveyear.factories', [])

.factory('Entries', function($http) {
  var entry = {};

  var getEntries = function() {
    return $http({
      method: 'GET',
      url   : '/api/entries'
    })
    .then(function(response) {
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

  return {
    getEntries: getEntries,
    addEntry: addEntry,
    entry: entry
  };

})

.factory('NewDate', function() {
  var newDate = function() {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var date = new Date(2015-09-21);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  };

  return {
    newDate: newDate
  };

});
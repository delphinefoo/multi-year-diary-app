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
    getEntries: getEntries,
    addEntry: addEntry
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
})
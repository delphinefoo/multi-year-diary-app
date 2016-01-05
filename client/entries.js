angular.module('fiveyear.entries', [])

.controller('entriesController', function($scope, Entries, $location) {
  $scope.today = {};
  $scope.today.date = new Date();
  $scope.today.day = $scope.today.date.getDate();
  $scope.today.month = $scope.today.date.getMonth();
  $scope.today.year = $scope.today.date.getFullYear();

  $scope.showTheForm = true;

  $scope.entry = Entries.entry;
  $scope.data = {};

  // $scope.Model = $scope.Model;

  $scope.getEntries = function() {
    return Entries.getEntries().then(function(entries) {
      $scope.data.entries = entries;
      console.log('Entries?', entries);
    })
    .catch(function(err) {
      console.log(err);
    });
  };

  $scope.addEntry = function() {
    return Entries.addEntry()
      .then(function() {
        $scope.entry.text = '';
        $scope.getEntries();
      });
  };

  $scope.deleteEntry = function(id) {
    return Entries.deleteEntry(id)
      .then(function(response) {
        console.log(response);
        $scope.getEntries();
        // $location.path('/entries');
        $scope.showTheForm = true;
      })
      .catch(function(error) {
        console.log(error);
      })
  };



  $scope.getEntries();

});
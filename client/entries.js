angular.module('fiveyear.entries', [

  ])

.controller('entriesController', function($scope, Entries, NewDate) {
  $scope.today = {};
  $scope.today.date = new Date();
  $scope.today.day = $scope.today.date.getDate();
  $scope.today.month = $scope.today.date.getMonth();

  $scope.entry = Entries.entry;
  $scope.data = {};

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


  $scope.getEntries();

});
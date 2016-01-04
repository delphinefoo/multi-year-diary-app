angular.module('fiveyear.entries', [])

.controller('entriesController', function($scope, Entries) {
  $scope.data = {};
  $scope.getEntries = Entries.getEntries().then(function(entries) {
    $scope.data.entries = entries;
  });

  $scope.getEntries();
});
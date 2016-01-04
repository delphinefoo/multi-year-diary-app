angular.module('fiveyear.entries', [])

.controller('entriesController', function($scope, Entries) {
  $scope.date = new Date();
  $scope.data = {
    entries: [ {
        text: 'Today I skiied Mont Blanc.',
        createdAt: '2015-09-21'
    },
    {
      text: 'Made a wedding cake for Alison.',
      createdAt: '2015-09-21'
    } ]
  };
  $scope.getEntries = function() {
    return Entries.getEntries().then(function(entries) {
      $scope.data.entries = entries;
    });
  };

  $scope.getEntries();
});
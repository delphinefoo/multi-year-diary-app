angular.module('fiveyear.entries', [

  ])

.controller('entriesController', function($scope, Entries, NewDate) {
  $scope.today = new Date();
  $scope.entry = Entries.entry;
  $scope.data = {};
  //   entries: [ {
  //       text: 'Today I skiied Mont Blanc.',
  //       createdAt: '2015-09-21'
  //   },
  //   {
  //     text: 'Made a wedding cake for Alison.',
  //     createdAt: '2015-09-21'
  //   } ]
  // };
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
      });
  };

  $scope.getEntries();

});
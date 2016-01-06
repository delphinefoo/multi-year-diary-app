angular.module('fiveyear.entries', [])

.controller('entriesController', function($rootScope, $scope, Entries) {
  $scope.today = {};
  $scope.today.date = new Date();
  $scope.today.day = $scope.today.date.getDate();
  $scope.today.month = $scope.today.date.getMonth();
  $scope.today.year = $scope.today.date.getFullYear();

  $scope.showTheForm = true;

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

  $scope.deleteEntry = function(id) {
    return Entries.deleteEntry(id)
      .then(function(response) {
        console.log(response);
        $scope.getEntries();
        $scope.showTheForm = true;
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  $scope.getEntries();

})

.controller('DatepickerDemoCtrl', function ($rootScope, $scope, Entries) {

  $scope.today = function() {
    $scope.dt = new Date();

  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  // $scope.disabled = function(date, mode) {
  //   return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  // };

  // $scope.toggleMin = function() {
  //   $scope.minDate = $scope.minDate ? null : new Date();
  // };
  // $scope.toggleMin();
  $scope.maxDate = new Date(2016, 0, 06);

  $scope.open = function($event) {
    $scope.status.opened = true;
    console.log('date:', $scope.dt);
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  $scope.status = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };

  $scope.getDateEntries = function(date) {
    return Entries.getDateEntries(date)
      .then(function(entries) {
        $scope.data.entries = entries;
      });
  };


});
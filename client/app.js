angular.module('FiveYear', [
  'fiveyear.factories',
  'fiveyear.entries',
  'ui.router',
])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .otherwise('/');

  $stateProvider
    .state('entries', {
      url: '/entries',
      templateUrl: 'entries.html',
      controller: 'entriesController'
    })
})

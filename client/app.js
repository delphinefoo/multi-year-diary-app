angular.module('FiveYear', [
  'fiveyear.factories',
  'fiveyear.entries',
  'ui.router',
])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .otherwise('/entries');

  $stateProvider
    .state('entries', {
      url: '/entries',
      templateUrl: 'entries.html',
      controller: 'entriesController',
      params: {
        autoActivateChild: 'entries.form'
      }
    })
    .state('entries.form', {
      templateUrl: 'form.html',
      controller: 'entriesController'
    });

});

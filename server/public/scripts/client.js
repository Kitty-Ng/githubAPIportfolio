var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: '/views/user.html',
      controller: 'UserController as uc',
    })
    .when('/repos', {
      templateUrl: '/views/repos.html',
      controller: 'ReposController as rc'
    })
    .when('/contact', {
      templateUrl: '/views/contact.html',
      controller: 'UserController as uc'
    })
    .otherwise({
      redirectTo: '/'
    });
});

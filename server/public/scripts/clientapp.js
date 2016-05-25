var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })
    .when('/cinderella', {
      templateUrl: '/views/cinderella.html',
      controller: "CinderellaController"
    })
    .when('/snowwhite', {
      templateUrl: '/views/snowwhite.html',
      controller: "SnowwhiteController"
    })
    .when('/goldilocks', {
      templateUrl: '/views/goldilocks.html',
      controller: "GoldilocksController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);

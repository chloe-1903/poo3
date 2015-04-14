'use strict';

/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */
angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/exp', {
        templateUrl: 'views/exp.html',
        controller: 'ExpCtrl'
      })
      .when('/diplomes', {
        templateUrl: 'views/diplomes.html',
        controller: 'DiplomesCtrl'
      })
      .when('/comp', {
        templateUrl: 'views/comp.html',
        controller: 'CompCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

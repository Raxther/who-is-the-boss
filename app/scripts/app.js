'use strict';

/**
 * @ngdoc overview
 * @name whoIsTheBestApp
 * @description
 * # whoIsTheBestApp
 *
 * Main module of the application.
 */
angular
  .module('whoIsTheBestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'underscore'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/choose', {
        templateUrl: 'views/choose.html',
        controller: 'ChooseCtrl',
        controllerAs: 'choose'
      })
      .when('/addnew', {
        templateUrl: 'views/addnew.html',
        controller: 'AddnewCtrl',
        controllerAs: 'addnew'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

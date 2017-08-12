'use strict';

angular.module('videoClubApp', [
  'videoClubApp.constants',
   'ngCookies',
    'ngResource',
     'ngSanitize',
     'ui.router',
     'ui.bootstrap'
   ])
  .constant("API","http://localhost:8080/ADSI1261718/api")
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });

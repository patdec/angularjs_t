'use strict';

angular.module('angularjsTApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/tut0', {
                templateUrl: 'views/tut0.html',
                controller: 'Tut0Ctrl'
            })
            .when('/tut1', {
                templateUrl: 'views/tut1.html',
                controller: 'Tut1Ctrl'
            })
            .when('/tut2', {
                templateUrl: 'views/tut2.html',
                controller: 'Tut2Ctrl'
            })
            .when('/tut3', {
                templateUrl: 'views/tut3.html',
                controller: 'Tut3Ctrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

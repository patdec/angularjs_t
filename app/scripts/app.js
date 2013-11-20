'use strict';

angular.module('angularjsTApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'phonecatFilters'
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
            .when('/tut4', {
                templateUrl: 'views/tut4.html',
                controller: 'Tut4Ctrl'
            })
            .when('/tut5', {
                templateUrl: 'views/tut5.html',
                controller: 'Tut5Ctrl'
            })
            .when('/tut6', {
                templateUrl: 'views/tut6.html',
                controller: 'Tut6Ctrl'
            })
            .when('/tut7/:phoneId', {
                templateUrl: 'views/tut7.html',
                controller: 'Tut7Ctrl'
            })
            .when('/tut8/:phoneId', {
                templateUrl: 'views/tut8.html',
                controller: 'Tut8Ctrl'
            })
            .when('/tut9/:phoneId', {
                templateUrl: 'views/tut9.html',
                controller: 'Tut9Ctrl'
            }).otherwise({
                redirectTo: '/'
            });
    });

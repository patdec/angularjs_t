'use strict';

var mainControllers = angular.module('angularjsTApp')

mainControllers.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
});

mainControllers.controller('Tut0Ctrl', function ($scope) {

});

mainControllers.controller('Tut1Ctrl', function ($scope) {

});

mainControllers.controller('Tut2Ctrl', function ($scope) {
    $scope.phones = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'}
    ];
    $scope.hello = "Hello, World!"
});

mainControllers.controller('Tut3Ctrl', function ($scope) {
    $scope.phones = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'}
    ];
});

mainControllers.controller('Tut4Ctrl', function ($scope) {
    $scope.phones = [
        {'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.',
            'age': 1},
        {'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.',
            'age': 2},
        {'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.',
            'age': 3}
    ];

    $scope.orderProp = 'age';
});

mainControllers.controller('Tut5Ctrl', function ($scope, $http) {
    $http.get('phones/phones.json').success(function (data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
});

mainControllers.controller('Tut6Ctrl', function ($scope, $http) {
    $http.get('phones/phones.json').success(function (data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
});

mainControllers.controller('Tut7Ctrl', ['$scope', '$routeParams',
    function ($scope, $routeParams) {
        $scope.phoneId = $routeParams.phoneId;
    }]);

mainControllers.controller('Tut8Ctrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
        $http.get('phones/' + $routeParams.phoneId + '.json').success(function (data) {
            $scope.phone = data;
        });
    }]);

mainControllers.controller('Tut9Ctrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
        $http.get('phones/' + $routeParams.phoneId + '.json').success(function (data) {
            $scope.phone = data;
        });
    }]);

mainControllers.controller('Tut10Ctrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
            $scope.phone = data;
            $scope.mainImageUrl = data.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);

mainControllers.controller('Tut11aCtrl', ['$scope', 'Phone', function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
}]);

mainControllers.controller('Tut11bCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}]);
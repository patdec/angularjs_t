'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('angularjsTApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});

describe('Controller: Tut2Ctrl', function () {

    // load the controller's module
    beforeEach(module('angularjsTApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('Tut2Ctrl', {
            $scope: scope
        });
    }));

    it('should create "phones" model with 3 phones', function () {
        expect(scope.phones.length).toBe(3);
    });
});

describe('Controller: Tut4Ctrl', function () {

    // load the controller's module
    beforeEach(module('angularjsTApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('Tut4Ctrl', {
            $scope: scope
        });
    }));

    it('should create "phones" model with 3 phones', function() {
        expect(scope.phones.length).toBe(3);
    });


    it('should set the default value of orderProp model', function() {
        expect(scope.orderProp).toBe('age');
    });
});


describe('Controller: Tut5Ctrl', function () {

    // load the controller's module
    beforeEach(module('angularjsTApp'));

    var MainCtrl,
        scope,
        $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$httpBackend_ ,$controller, $rootScope) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('phones/phones.json').
            respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        scope = $rootScope.$new();
        MainCtrl = $controller('Tut5Ctrl', {
            $scope: scope
        });
    }));

    it('should create "phones" model with 2 phones fetched from xhr', function() {
        expect(scope.phones).toBeUndefined();
        $httpBackend.flush();

        expect(scope.phones).toEqual([{name: 'Nexus S'},
            {name: 'Motorola DROID'}]);
    });


    it('should set the default value of orderProp model', function() {
        expect(scope.orderProp).toBe('age');
    });
});

describe('Controller: Tut8Ctrl', function(){
    // load the controller's module
    beforeEach(module('angularjsTApp'));

    var scope, $httpBackend, ctrl;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('phones/xyz.json').respond({name:'phone xyz'});

        $routeParams.phoneId = 'xyz';
        scope = $rootScope.$new();
        ctrl = $controller('Tut8Ctrl', {$scope: scope});
    }));


    it('should fetch phone detail', function() {
        expect(scope.phone).toBeUndefined();
        $httpBackend.flush();

        expect(scope.phone).toEqual({name:'phone xyz'});
    });
});


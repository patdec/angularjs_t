describe('angularjs App', function () {

    describe('Phone list view', function () {

        beforeEach(function () {
            browser().navigateTo('/#/tut3');
        });


        it('should filter the phone list as user types into the search box', function () {
            expect(repeater('.phones li').count()).toBe(3);

            input('query').enter('nexus');
            expect(repeater('.phones li').count()).toBe(1);

            input('query').enter('motorola');
            expect(repeater('.phones li').count()).toBe(2);
        });


    });

    describe('Phone list view with order', function () {

        beforeEach(function () {
            browser().navigateTo('/#/tut4');
        });

        it('should be possible to control phone order via the drop down select box',
            function () {
                //let's narrow the dataset to make the test assertions shorter
                input('query').enter('tablet');

                expect(repeater('.phones li', 'Phone List').column('phone.name')).
                    toEqual(["Motorola XOOM\u2122 with Wi-Fi",
                        "MOTOROLA XOOM\u2122"]);

                select('orderProp').option('Alphabetical');

                expect(repeater('.phones li', 'Phone List').column('phone.name')).
                    toEqual(["MOTOROLA XOOM\u2122",
                        "Motorola XOOM\u2122 with Wi-Fi"]);
            });

    });

    describe('Phone list view with order and images', function () {

        beforeEach(function () {
            browser().navigateTo('/#/tut6');
        });

        it('should render phone specific links', function() {
            input('query').enter('nexus');
            element('.phones li a').click();
            expect(browser().location().url()).toBe('/tut8/nexus-s');
        });

    });

    describe('Phone detail view', function() {

        beforeEach(function() {
            browser().navigateTo('/#/tut7/nexus-s');
        });


        it('should display placeholder page with phoneId', function() {
            expect(binding('phoneId')).toBe('nexus-s');
        });
    });

    describe('Phone detail view 2', function() {

        beforeEach(function() {
            browser().navigateTo('/#/tut8/nexus-s');
        });


        it('should display nexus-s page', function() {
            expect(binding('phone.name')).toBe('Nexus S');
        });
    });
});
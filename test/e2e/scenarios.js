'use strict';

describe('angularjsGruntExampleApp app', function() {

    beforeEach(function() {
        browser().navigateTo('/f');
    });

    describe('Homepage', function() {
        it('should display the correct route', function() {
            expect(browser().window().path()).toBe('/');
        });

        it('test', function() {
        	input('test').enter('tfsdaf');
        	expect(input('test').val()).toBe('ts');
        })
    });

});
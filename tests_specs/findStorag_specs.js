'use strict';

var FindStorage = require('../tests_class/FindStorage.js')

describe('Protractor find storage tests', function() {

    var findStorage;

    beforeEach(function () {
        findStorage = new FindStorage();
        findStorage.init();
    });
    
    it('should found a store', function() {

        findStorage.init();

        findStorage.searchAddress();
        
        let elem = element(by.css('.distance'));

        findStorage.waitForElement(elem);
        
        expect(elem.getText()).toBe('8 mi');
    });
});
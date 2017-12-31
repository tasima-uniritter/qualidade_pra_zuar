'use strict';

var SearchItens = require('../tests_class/SearchItens.js')

describe('Protractor search itens tests', function() {

    var searchItens;

    beforeEach(function () {
        searchItens = new SearchItens();
        searchItens.init();
    });

	it('should show searched item name', function() {

        searchItens.startSearch();
        
        let elem = element(by.tagName('h1'));
        
        searchItens.waitForElement(elem);
        
        expect(elem.getText()).toBe('SEARCH  "T-SHIRTS > FADED SHORT SLEEVE T-SHIRTS"\n1 result has been found.');
    });

    it('should show searched item image', function() {
        
        searchItens.startSearch();
        
        let elem = element(by.css('.product_img_link'));
        
        searchItens.waitForElement(elem);
        
        expect(elem.getAttribute('title')).toBe('Faded Short Sleeve T-shirts');
    });
});
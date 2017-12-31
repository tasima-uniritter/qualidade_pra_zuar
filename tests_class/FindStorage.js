'use strict';

var FindStorage = function () {

	constructor
    {
        this.addresInput = element(by.id('addressInput'));
		this.searchButton = element(by.name('search_locations'));
    }
		
    this.init = function () {
        browser.waitForAngularEnabled(false);
        browser.get('/index.php?controller=stores');
    }

    this.searchAddress = function(){
    	this.addresInput.click();
        this.addresInput.sendKeys('33018');
        this.searchButton.click();
    }

    this.waitForElement = function(elem){
    	var until  =  protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elem), 15000, 'waiting...');
    }

}

module.exports = FindStorage;
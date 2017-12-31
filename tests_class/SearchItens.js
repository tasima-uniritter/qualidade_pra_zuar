'use strict';

var SearchItens = function () {

	constructor
    {
        this.searchQuery = element(by.id('search_query_top'));
		this.submitButton = element(by.name('submit_search'));
    }
	
	
    this.init = function () {
        browser.waitForAngularEnabled(false);
        browser.get('/index.php');
    }

    this.startSearch = function(){
    	this.searchQuery.sendKeys('T-shirts > Faded Short Sleeve T-shirts');
    	this.submitButton.click();
    }

    this.waitForElement = function(elem){
    	var until  =  protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elem), 10000, 'waiting...');
    }

}

module.exports = SearchItens;
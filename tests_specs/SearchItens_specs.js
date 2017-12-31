describe('Protector Demo App', function() {

	it('should show searched item name', function() {
        
        browser.waitForAngularEnabled(false);
        
        browser.get('http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=&submit_search=');
        
        element(by.id('search_query_top')).sendKeys('T-shirts > Faded Short Sleeve T-shirts');

        element(by.name('submit_search')).click();
        
        let elem = element(by.tagName('h1'));
        
        var until  =  protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elem), 10000, 'waiting...');
        
        expect(elem.getText()).toBe('SEARCH  "T-SHIRTS > FADED SHORT SLEEVE T-SHIRTS"\n1 result has been found.');
    });

    it('should show searched item image', function() {
        
        browser.waitForAngularEnabled(false);
        
        browser.get('http://automationpractice.com/index.php');
        
        element(by.id('search_query_top')).sendKeys('T-shirts > Faded Short Sleeve T-shirts');

        element(by.name('submit_search')).click();
        
        let elem = element(by.css('.product_img_link'));
        
        var until  =  protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elem), 10000, 'waiting...');
        
        expect(elem.getAttribute('title')).toBe('Faded Short Sleeve T-shirts');
    });
});
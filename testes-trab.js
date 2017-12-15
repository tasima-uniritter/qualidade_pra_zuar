describe('Protector Demo App', function() {
    it('should have a title', function() {
        browser.waitForAngularEnabled(false);
        
        browser.get('http://automationpractice.com/index.php?controller=stores');
        
        element(by.id('addressInput')).click();
        
        element(by.id('addressInput')).sendKeys('33018');
        
        element(by.name('search_locations')).click();
        
        let elem = element(by.css('.distance'));
        
        var until  =  protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elem), 15000, 'waiting...');
        
        expect(elem.getText()).toBe('8 mi');
    });
});
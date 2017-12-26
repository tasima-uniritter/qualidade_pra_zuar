describe('Protector Demo App', function() {
    it('should found a store', function() {
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

    it('should show invalid email', function() {
        browser.waitForAngularEnabled(false);
        
        browser.get('http://automationpractice.com/index.php');
        
        element(by.id('newsletter-input')).sendKeys('testessemdemial');
        
        element(by.name('submitNewsletter')).click();
        
        let elem = element(by.css('.alert-danger'));
        
        var until  =  protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elem), 15000, 'waiting...');
        
        expect(elem.getText()).toBe('Newsletter : Invalid email address.');
    });

    it('should show email not registered', function() {
        browser.waitForAngularEnabled(false);
        
        browser.get('http://automationpractice.com/index.php?controller=password');
        
        element(by.id('email')).sendKeys('rafael@gmail.com');
        
        element(by.id('form_forgotpassword')).submit();
        
        let elem = element(by.css('.alert-danger'));
        
        var until  =  protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elem), 25000, 'waiting...');
        
        expect(elem.getText()).toBe('There is 1 error\nThere is no account registered for this email address.');
    });
});
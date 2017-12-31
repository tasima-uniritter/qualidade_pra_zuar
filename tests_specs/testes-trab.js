describe('Protector Demo App', function() {


    it('should show invalid email', function() {
        browser.waitForAngularEnabled(false);
        
        browser.get('/index.php');
        
        element(by.id('newsletter-input')).sendKeys('testessemdemial');
        
        element(by.name('submitNewsletter')).click();
        
        let elem = element(by.css('.alert-danger'));
        
        var until  =  protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elem), 15000, 'waiting...');
        
        expect(elem.getText()).toBe('Newsletter : Invalid email address.');
    });

    it('should show email not registered', function() {
        browser.waitForAngularEnabled(false);
        
        browser.get('/index.php?controller=password');
        
        element(by.id('email')).sendKeys('rafael@gmail.com');
        
        element(by.id('form_forgotpassword')).submit();
        
        let elem = element(by.css('.alert-danger'));
        
        var until  =  protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elem), 25000, 'waiting...');
        
        expect(elem.getText()).toBe('There is 1 error\nThere is no account registered for this email address.');
    });

    it('should show create account error message', function() {
        
        browser.waitForAngularEnabled(false);
        
        browser.get('/index.php?controller=authentication&back=my-account');
        
        element(by.id('SubmitCreate')).click();
        
        let elem = element(by.id('create_account_error'));
        
        var until  =  protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elem), 10000, 'waiting...');

        var li = element(by.id('create_account_error')).element(by.tagName('ol')).element(by.tagName('li'));

        browser.wait(until.presenceOf(li), 10000, 'waiting...');
        
        expect(li.getText()).toBe('Invalid email address.');
    });
    
});
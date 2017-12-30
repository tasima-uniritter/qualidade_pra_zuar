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
    
    it('should show create account error message', function() {
        
        browser.waitForAngularEnabled(false);
        
        browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        
        element(by.id('SubmitCreate')).click();
        
        let elem = element(by.id('create_account_error'));
        
        var until  =  protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elem), 10000, 'waiting...');

        var li = element(by.id('create_account_error')).element(by.tagName('ol')).element(by.tagName('li'));

        browser.wait(until.presenceOf(li), 10000, 'waiting...');
        
        expect(li.getText()).toBe('Invalid email address.');
    });
    
});
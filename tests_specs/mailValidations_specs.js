
'use strict';

var MailValidator = require('../tests_class/MailValidators.js')

describe('Protractor Mail validator tests', function() {

     var mailValidator;

    beforeEach(function () {
        mailValidator = new MailValidator();
    });


    it('should show invalid email', function() {

        mailValidator.initInvalidMail();

        mailValidator.setInvalidMail();
        
        let elem = element(by.css('.alert-danger'));
        
        mailValidator.waitForElement(elem);
        
        expect(elem.getText()).toBe('Newsletter : Invalid email address.');
    });

    it('should show email not registered', function() {
        
        mailValidator.initEmailNotRegitered();

        mailValidator.submitEmailNotRegisteredToRecoverPassword();
        
        let elem = element(by.css('.alert-danger'));
        
         mailValidator.waitForElement(elem);
        
        expect(elem.getText()).toBe('There is 1 error\nThere is no account registered for this email address.');
    });

    it('should show create account error message', function() {
        
        mailValidator.initCreateAccount();
               
        element(by.id('SubmitCreate')).click();
        
        let elem = element(by.id('create_account_error'));
        
        mailValidator.waitForElement(elem);

        var li = element(by.id('create_account_error')).element(by.tagName('ol')).element(by.tagName('li'));

        mailValidator.waitForElement(li);
        
        expect(li.getText()).toBe('Invalid email address.');
    });
    
});
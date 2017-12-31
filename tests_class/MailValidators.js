'use strict';

var MailValidator = function () {

    constructor
    {
        this.newsLetterInput = element(by.id('newsletter-input'));
        this.submitButton = element(by.name('submitNewsletter'));

        this.email = element(by.id('email'));
        this.forgotPassButton = element(by.id('form_forgotpassword'));
    }

    this.init = function(){
       browser.waitForAngularEnabled(false); 
    }
        
    this.initInvalidMail = function () {
        this.init();
        browser.get('/index.php');
    }

    this.initEmailNotRegitered = function () {
        this.init();
        browser.get('/index.php?controller=password');
    }

    this.initCreateAccount = function () {
        this.init();
        browser.get('/index.php?controller=authentication&back=my-account');
    }

    this.setInvalidMail = function(){
        this.newsLetterInput.sendKeys('testessemdemial');
        this.submitButton.click();
    }

    this.submitEmailNotRegisteredToRecoverPassword = function() {
        this.email.sendKeys('rafael@gmail.com');
        this.forgotPassButton.submit();
    }

    this.waitForElement = function(elem){
        var until  =  protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elem), 15000, 'waiting...');
    }

}

module.exports = MailValidator;
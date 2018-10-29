require('../Utilities/CustomLocators.js');
var HomePage = require('../Pages/Home.page.js');
var BankManagerPage = require('../Pages/BankManager.page.js');
var Base = require('../Utilities/Base.js');
var AddCustomerPage = require('../Pages/AddCustomerPage.page.js');
var Customers = require('../Pages/Customers.page.js');
var BankData = require('../TestData/BankData.json');


describe('Bank Manager', () => { 

describe('Login',()=>{

    beforeEach(function(){
        Base.navigateToHome();
    });

    it('should have a correct page title',()=>{
        expect(browser.getTitle()).toEqual("Protractor practice website - Banking App");
    });

    it('should check display home button',()=>{
        expect(HomePage.homeButton.isDisplayed()).toBe(true);
        expect(HomePage.homeButton.getText()).toEqual('Home');
    });

    it('should display header',()=>{
        expect(HomePage.pageTitle.isDisplayed()).toBe(true);
        expect(HomePage.pageTitle.getText()).toEqual(BankData.appData.bankName);
    });

    it('should display Login option for Bank Manager',()=>{
        expect(HomePage.managerLoginButton.isDisplayed()).toBe(true);
        expect(HomePage.managerLoginButton.getText()).toEqual('Bank Manager Login');
    });

    it('should stay at the homepage when Home Button is clicked',()=>{
        $('button.home').click();
        expect(browser.getTitle()).toEqual("Protractor practice website - Banking App");
        expect(HomePage.managerLoginButton.getText()).toEqual('Bank Manager Login');
    });

    it('should login as a Bank Manager', ()=>{
        HomePage.managerLoginButton.click();
        expect(BankManagerPage.addCustomerButton.isDisplayed()).toBe(true);
    });

    it('should behave display options for manager', () => {
        HomePage.managerLoginButton.click();
        expect(BankManagerPage.addCustomerButton.isDisplayed()).toBe(true);
        expect(BankManagerPage.openAccountButton.isDisplayed()).toBe(true);
        expect(BankManagerPage.openAccountButton.getText()).toEqual('Open Account');
        expect(BankManagerPage.customersButton.isDisplayed()).toBe(true);
    });

    it('should behave click to home button', () => {
        HomePage.managerLoginButton.click();
        BankManagerPage.clickHomeButton.click();
        expect(HomePage.managerLoginButton.getText()).toEqual('Bank Manager Login');
    });
});



});
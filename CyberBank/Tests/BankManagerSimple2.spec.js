require('../Utilities/CustomLocators.js');
var HomePage =  require('../Pages/Home.page.js');
var BankManagerPage = require('../Pages/BankManager.page.js');
var Base = require('../Utilities/Base.js');
var AddCustPage = require('../Pages/AddCustomer.page.js')
describe('Login', () => {
    
    beforeEach(function(){
        Base.navigateToHome();
    });
    
    it('should display form for Adding Customer',()=>{
        HomePage.managerLoginButton.click();
        BankManagerPage.addCustomerButton.click();
        expect(AddCustPage.myForm.isDisplayed()).toBe(true);
    });
    it('should list first name in the form', () => {
        HomePage.managerLoginButton.click();
        BankManagerPage.addCustomerButton.click();
        expect(AddCustPage.listFirstName.isDisplayed()).toBe(true);
    });
    it('should list First Name Label in the form',()=>{
        HomePage.managerLoginButton.click();
        BankManagerPage.addCustomerButton.click();
        expect(AddCustPage.firstNLabel.isPresent()).toBe(true);
    });
    it('should list Last Name Label in the form',()=>{
        HomePage.managerLoginButton.click();
        BankManagerPage.addCustomerButton.click();
        expect(AddCustPage.lastNLabel.isPresent()).toBe(true);
    });
    it('should list Post Code Label in the form',()=>{
        HomePage.managerLoginButton.click();
        BankManagerPage.addCustomerButton.click();
        expect(AddCustPage.postCdLabel.isPresent()).toBe(true);
    });
    it('should require First Name', () => {
        HomePage.managerLoginButton.click();
        BankManagerPage.addCustomerButton.click();
        AddCustPage.firstNLabel.click();
        AddCustPage.addButton.click();
        expect(AddCustPage.invalidFName.isDisplayed()).toBe(true);
    });
    it('should require Last Name', () => {
        HomePage.managerLoginButton.click();
        BankManagerPage.addCustomerButton.click();
        AddCustPage.firstNLabel.click().sendKeys('Mike');
        AddCustPage.lastNLabel.click();
        AddCustPage.addButton.click();
        expect(AddCustPage.invalidLName.isDisplayed()).toBe(true);
    });
    it('should require Post Code', () => {
        HomePage.managerLoginButton.click();
        BankManagerPage.addCustomerButton.click();
        AddCustPage.firstNLabel.click().sendKeys('Mike');
        AddCustPage.lastNLabel.click().sendKeys('Smith');
        AddCustPage.postCdLabel.click();
        AddCustPage.addButton.click();
        expect(AddCustPage.invalidPCode.isDisplayed()).toBe(true);
    });
    it('should add customer', () => {
        HomePage.managerLoginButton.click();
        BankManagerPage.addCustomerButton.click();
        AddCustPage.firstNLabel.click().sendKeys('Mike');
        AddCustPage.lastNLabel.click().sendKeys('Smith');
        AddCustPage.postCdLabel.click().sendKeys('22201');
        AddCustPage.addButton.click();
        expect(browser.switchTo().alert().getText()).toContain('Customer added successfully with customer id :');
        browser.switchTo().alert().accept();
    });
    
});
require('../Utilities/CustomLocators.js');

var BankManagerPage = function(){
    this.addCustomerButton = element(by.ngClick('addCust()'));
    this.openAccountButton = element(by.ngClick('openAccount()'));
    this.customersButton = element(by.ngClick('showCust()'));
    this.clickHomeButton = element(by.ngClick('home()'));
};
module.exports = new BankManagerPage();
require('../Utilities/CustomLocators.js');

var HomePage = function(){
    this.homeButton = $('button.home');
    this.pageTitle = $('.mainHeading');
    this.loginBankManager = element(by.ngClick('manager()'));
    this.managerLoginButton = element(by.ngClick('manager()'));    
};

module.exports = new HomePage();
require('../Utilities/CustomLocators.js');

var AddCustPage = function(){
    this.myForm=element(by.name('myForm'));
    this.listFirstName=element(by.cssContainingText('.form-group>label','First Name :'));
    this.firstNLabel=element(by.model('fName'));
    this.lastNLabel=element(by.model('lName'));
    this.postCdLabel=element(by.model('postCd'));
    this.invalidFName=$('.ng-touched');
    this.invalidLName=$$('.ng-touched').get(1);
    this.invalidPCode=$$('.ng-touched').get(2);
    this.addButton=$('button.btn-default');
};
module.exports = new AddCustPage();
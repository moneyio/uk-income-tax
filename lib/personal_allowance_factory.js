var PersonalAllowance = require('./personal_allowance');

var PersonalAllowanceFactory = function(persona, taxYear){
    var pa = new PersonalAllowance();
    pa.setTaxYear(taxYear);
    pa.init(persona);
    return pa;
};

module.exports = PersonalAllowanceFactory;
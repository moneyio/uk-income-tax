// Tax Code Parser & Calculator

var TaxCodeCalculator = function(taxCode){
    if(!taxCode){
        throw new Error('Specify a tax code');
    }
    
    // Common tax code letters (647L / BR909)
    this.taxCode = taxCode;
    this.personalAllowance = 0;
    this.taxLetter = '';
    
    // Codes that don't yeild a personal allowance
    this.specialTaxCodes = ['D0', 'D1', 'BR', 'NT'];
    this.init();
};

TaxCodeCalculator.prototype = {
    
    init : function(){
        this.parse.call(this);
    },
    
    parse : function(){
        this.taxLetter = this.parseTaxCodeLetter();
        this.personalAllowance = this.parseTaxCodeAllowance();
        
        return (this.taxLetter && this.personalAllowance);
    },
    
    parseTaxCodeLetter : function(){
        if(-1 !== this.specialTaxCodes.indexOf(this.taxCode)){
            return this.taxCode;
        }
        
        var taxCodeLetterPattern = this.taxCode.match(/([KDLYTP]+)/i);
        if(taxCodeLetterPattern){
            this.taxLetter = taxCodeLetterPattern[0];
        } else {
            // return false;
            return new Error('No tax code letter was found');
        }
        return this.taxLetter;
    },
    
    parseTaxCodeAllowance : function(){
        if(-1 !== this.specialTaxCodes.indexOf(this.taxCode)){
            return 0;
        }
        
        var taxCodeAllowancePattern = this.taxCode.match(/([0-9]+)/);
        if(taxCodeAllowancePattern){
            this.personalAllowance = taxCodeAllowancePattern[0];
        }
        return this.personalAllowance;
    },
    
    getPersonalAllowance : function(){
        var personalAllowance = 0;
        if(this.taxLetter == 'K'){
            return '-' + (this.personalAllowance * 10);
        }
        
        if(this.personalAllowance > 0){
            personalAllowance = this.personalAllowance * 10  + 9;
        } else {
            return 0;
        }
        return personalAllowance;
    }
};

module.exports = TaxCodeCalculator;
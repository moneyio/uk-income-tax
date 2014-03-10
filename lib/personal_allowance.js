// Allow us to call JSON files
require('./json_include');

var taxRates = require('./data/income_tax_rates.json'),
    TaxCodeCalculator = require("./tax_code_parser"),
    PersonalAllowance;

PersonalAllowance = function(){
    this.income = 0;
    
    this.blind = false;
    
    this.age = 18;
    
    this.allowances = {};
    
    this.taxCode = null;

    this.taxYear = null;
};

PersonalAllowance.prototype = {
    init : function(persona)
    {
        if('number' == typeof persona.income){
            this.income = persona.income;
        } else {
            throw new Error('No income was found. Did you provide it in the persona conf?');
        }
        
        if(persona.taxCode){
            this.taxCode = persona.taxCode;
        }
        
        if(persona.blind){
            this.blind = persona.blind;
        }
        
        if(persona.age){
            this.age = persona.age;
        }

        this.setTaxBand(this.taxYear);
    },
    
    setTaxYear : function(year)
    {
        this.taxYear = year;
    },
    
    setTaxBand : function(year)
    {
        var band = null;
        if(!year){
            year = this.taxYear;
        }
        if(taxRates && taxRates['year' + year] && taxRates['year' + year].rates){
            band = taxRates['year' + year].rates;
        } else {
            throw new Error('No tax band found for year: ' + year);
        }
        
        this.taxBand = band;
    },
    
    getYearPersonalAllowances : function(){
        var allowances = null;
        if(taxRates && taxRates['year' + this.taxYear].rates){
            allowances = taxRates['year' + this.taxYear].allowances;
        } else {
            throw new Error('No tax band found for year: ' + this.taxYear);
        }
        this.allowances = allowances;
        return this.allowances;
    },

    /**
     * Ceiling amount for personal allowance. After this your personal allowance reduces
     *
     */
    getIncomeAllowanceLimit : function(){
        var age = this.age;
        if(age >= 65){
            return this.allowances.income_limit_for_age_related;
        } else {
            return this.allowances.income_limit_for_personal;
        }
    },

    getPersonalAllowance : function(){
        var age = this.age;
        if(age >= 65 && age < 75){
            return this.allowances.personal_for_people_aged_65_74;
        } else if(age >= 75){
            return this.allowances.personal_for_people_aged_75_and_over;
        } else {
            return this.allowances.personal;
        }
    },
    
    setValuesFromTaxCode : function(taxCode){
        var taxCodeCalculator = new TaxCodeCalculator(taxCode);
        this.personalAllowance = taxCodeCalculator.getPersonalAllowance();
    },
    
    getTaxFreeAllowance : function()
    {        
        this.getYearPersonalAllowances();

        var personalAllowance = this.getPersonalAllowance();
        var incomeAllowanceLimit = this.getIncomeAllowanceLimit();        
        if(this.taxCode){
            this.setValuesFromTaxCode(this.taxCode);
            personalAllowance = parseFloat(this.personalAllowance);
        }

        if(this.blind){
            personalAllowance += this.allowances.blind_persons;
        }
        
        if(incomeAllowanceLimit && this.income > incomeAllowanceLimit){
            var toDeductFromAllowance = (this.income - incomeAllowanceLimit) / 2;
            personalAllowance = personalAllowance - toDeductFromAllowance;

            if(personalAllowance < 0){
                personalAllowance = 0;
            }
        }
        
        if(this.married){
            personalAllowance += this.allowances.blind_persons;
        }
        
        // Check that all the modifications to the personal allowance are not below their reccomended amounts
        if(!this.taxCode && personalAllowance < this.allowances.personal){
            if(this.allowances.income_limit_for_personal){
                if(this.income < this.allowances.income_limit_for_personal){
                    return this.allowances.personal;
                }
            } else {
                return this.allowances.personal;
            }
        }
        
        return Math.ceil(personalAllowance);
    }
};

module.exports = PersonalAllowance;
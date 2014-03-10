// Allow us to call JSON files
require('./json_include');

var taxRates = require('./data/income_tax_rates.json'),
    PersonalAllowanceFactory = require('./personal_allowance_factory'),
    TaxCodeCalculator = require("./tax_code_parser"),
    EventTarget = require('./event_target'),
    TaxCalculator;


TaxCalculator = function(persona){

    /**
     * The amount of income to base the calculations on.
     *
     * @link http://www.hmrc.gov.uk/incometax/codes-basics.htm
     */

    this.income = 0;
    this.deduction = 0;
    this.taxFreeAllowance = 0;
    this.persona = {};
    this.taxYear = '';
    this.taxCodeCalculator = null;
    this.taxBand = {};
    this.init(persona);
};


TaxCalculator.prototype = {
    
    event : new EventTarget(),
    
    constructor : TaxCalculator,

    log : function()
    {
        console.log.apply(this, arguments);
    },

    getLowerFigure : function(a,b)
    {
        if(a <= b){
            return a;
        } else {
            return b;
        }
    },

    init : function(persona)
    {
        if(!persona){
            throw new Error('Persona object is needed. Expecting {income:123, age:18...}');
        }
        
        this.persona = persona;
        if(this.persona.income){
            this.setIncome(this.persona.income);
        }
        
        if(persona.taxCode){
            this.taxCodeCalculator = new TaxCodeCalculator(persona.taxCode);
        }
        
        this.event.fire('init');
    },
    
    setIncome : function(income)
    {
        // this.log('setting the income for: ' + income);
        this.income = parseFloat(income);
        this.event.fire('income_set');
    },
    
    setTaxYear : function(year)
    {
        if(year){
            this.taxYear = year;
        } else {
            var pa = new PersonalAllowanceFactory(this.persona);
            this.taxYear = pa.getCurrentTaxYear();
        }
        this.setTaxBand(this.taxYear);
    },
    
    setTaxBand : function(year)
    {       
        var band = null; 
        if(taxRates && taxRates['year' + year].rates){
             band = taxRates['year' + year].rates;
        } else {
            throw new Error('No tax band found');
        }
        
        this.event.fire('tax_band_set');
        this.taxBand = band;
    },
    
    getPersonalTaxFreeAllowance : function(){
        var pa = new PersonalAllowanceFactory(this.persona, this.taxYear);
        pa.setTaxYear(this.taxYear);
        return pa.getTaxFreeAllowance();
    },

    getTaxableAmount : function(){
        return this.income - this.getPersonalTaxFreeAllowance();
    },


    /**
     * Calculate percentage figures for charting deductions etc
     *
     */

    calculatePercentages : function()
    {
        this.netAmountPercentage = Math.ceil(this.netAmount / this.income * 100);
        this.taxAmountPercentage = Math.floor(this.deduction / this.income * 100);
        this.event.fire('percentages_calculated');
    },
    
    
    calculateTaxBands : function(taxBand)
    {
        // What amounts have what percentage?
        var bandDeductions = 0,
            bandPercentage = 0,
            percentageAmount = 0,
            totalDeduction = 0;
        
        delete taxBand.savings;
        
        if(this.taxCodeCalculator){
            switch (this.taxCodeCalculator.taxLetter){ 
                case 'BR':
                    // Basic Band Percentage
                    bandPercentage = taxBand.basic.rate;
                    percentageAmount = (this.taxableAmount / 100) * bandPercentage;
                    return percentageAmount;
                case 'D0':
                    // High Band Percentage
                    bandPercentage = taxBand.higher.rate;
                    percentageAmount = (this.taxableAmount / 100) * bandPercentage;
                    return percentageAmount;
                case 'D1':
                    // Top Band Percentage
                    bandPercentage = taxBand.additional.rate;
                    percentageAmount = (this.taxableAmount / 100) * bandPercentage;
                    return percentageAmount;
                case 'NT':
                    // No Tax
                    return 0;
            }
        }
        
        for(var i in taxBand){
            if(taxBand[i]){
                var band = taxBand[i];
            
                // If there is nothing in this band lets bail
                if(band === null){
                    break;
                }
                
                if(band.end && band.end !== null || band.end > 0){
                    band.amount = this.getLowerFigure(this.taxableAmount, band.end) - bandDeductions;
                } else {
                    band.amount = this.taxableAmount - bandDeductions;
                }
                band.percentageAmount = (band.amount / 100) * band.rate;
                totalDeduction += band.percentageAmount;
                bandDeductions += band.amount;
            }
        }
        return totalDeduction;
    },


    /**
     * Calculate the income tax to be deducted (for the year)
     *
     */

    calculate : function()
    {
        if(!this.taxYear){
            throw new Error('No tax year provided');
        }

        if('number' !== typeof this.income){
            throw new Error('No income was found. Did you provide it in the persona conf?');
        }

        this.taxFreeAllowance = this.getPersonalTaxFreeAllowance();
        
        var deduction = 0;

        // Check we need to deduct something
        if(this.income <= this.taxFreeAllowance){
            this.taxableAmount = 0;
            this.netAmount = this.income;

            // Fire an event so that applications can update their interfaces accordingly.
            this.event.fire("calculation_changed");

            return 0;
        } else {
            // console.log(this.income, this.taxFreeAllowance);
            // Subtract our allowance
            this.taxableAmount = this.income - this.taxFreeAllowance;

            // 2010 100k + reduction in allowance
            if(this.taxBand){
                deduction = this.calculateTaxBands(this.taxBand);
                this.netAmount = this.income - deduction;
            }

            // Fire an event so that applications can update their interfaces accordingly.
            this.event.fire("calculation_changed");

            this.deduction = Math.round(deduction * 100) / 100;
            return this.deduction;
        }
    }
};

module.exports = TaxCalculator;
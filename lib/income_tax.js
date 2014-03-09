// Allow us to call JSON files
require('./json_include');

var taxRates = require('./data/income_tax_rates.json'),
    MIO = require('./personal_allowance').MIO,
    TCC = require("./tax_code_parser").MIO,
    EventTarget = function(){
        this._listeners = {};
    };

EventTarget.prototype = {

    constructor: EventTarget,

    addListener: function(type, listener){
        if (typeof this._listeners[type] == "undefined"){
            this._listeners[type] = [];
        }

        this._listeners[type].push(listener);
    },

    fire: function(event){
        if (typeof event == "string"){
            event = { type: event };
        }
        if (!event.target){
            event.target = this;
        }

        if (!event.type){
            throw new Error("Event object missing 'type' property.");
        }

        if (this._listeners[event.type] instanceof Array){
            var listeners = this._listeners[event.type];
            for (var i=0, len=listeners.length; i < len; i++){
                listeners[i].call(this, event);
            }
        }
    },

    removeListener: function(type, listener){
        if (this._listeners[type] instanceof Array){
            var listeners = this._listeners[type];
            for (var i=0, len=listeners.length; i < len; i++){
                if (listeners[i] === listener){
                    listeners.splice(i, 1);
                    break;
                }
            }
        }
    }
};

MIO.TaxCalculator = function(persona){

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


MIO.TaxCalculator.prototype = {
    
    event : new EventTarget(),
    
    constructor : MIO.TaxCalculator,

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
            this.taxCodeCalculator = new TCC.TaxCodeCalculator(persona.taxCode);
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
            var pa = new MIO.PersonalAllowanceFactory(this.persona);
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
        var pa = new MIO.PersonalAllowanceFactory(this.persona, this.taxYear);
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

if('object' == typeof exports){
    exports.MIO = MIO;
}
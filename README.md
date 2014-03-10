UK Income Tax Calculator
=============

A standalone UK tax calculator.

Usage options:

    var TaxCalculator = require('uk-income-tax');
    var persona = {
        age : 18,
        income : 50000,
        taxCode : '944L'
    };
    var tc = new TaxCalculator(persona);
    tc.setTaxYear('2013_14');
    tc.calculate();

Resulting in tc:

    {
      income: 50000,
      deduction: 9822,
      taxFreeAllowance: 9440,
      persona: { age: 18, income: 50000 },
      taxYear: '2013_14',
      taxCodeCalculator: null,
      taxBand:
       { basic:
          { rate: 20,
            start: 0,
            end: 32010,
            amount: 32010,
            percentageAmount: 6402 },
         higher:
          { rate: 40,
            start: 32011,
            end: 150000,
            amount: 8550,
            percentageAmount: 3420 },
         additional:
          { rate: 45,
            start: 150001,
            end: null,
            amount: 0,
            percentageAmount: 0 } },
      taxableAmount: 40560,
      netAmount: 40178
    }

You'll most likely be looking for netAmount.
/*
    Test that we are calculating student loans correctly
*/



var sys = require('sys'),
    TCC = require("../lib/tax_code_parser").MIO,
    testCase = require('nodeunit').testCase;

module.exports = {
    'Tax Code 647L' : testCase({
        setUp: function (callback) {
            var taxCode = '647L';
            this.TCC = new TCC.TaxCodeCalculator(taxCode);

            callback();
        },
        tearDown: function (callback) {
            delete this.TCC;

            callback();
        },
        
        testAllowance : function(test) {
            test.equals(6479, this.TCC.getPersonalAllowance());
            test.done();
        },

        testLetter : function(test) {
            test.equals('L', this.TCC.parseTaxCodeLetter());
            test.done();
        }
    }),
    
    'Tax Code K445' : testCase({
        setUp: function (callback) {
            var taxCode = 'K445';
            this.TCC = new TCC.TaxCodeCalculator(taxCode);

            callback();
        },
        tearDown: function (callback) {
            delete this.TCC;

            callback();
        },
        
        testAllowance : function(test) {
            test.equals(-4450.00, this.TCC.getPersonalAllowance());
            test.done();
        },

        testLetter : function(test) {
            test.equals('K', this.TCC.parseTaxCodeLetter());
            test.done();
        }
    }),
    
    'Tax Code 647P' : testCase({
        setUp: function (callback) {
            var taxCode = '647P';
            this.TCC = new TCC.TaxCodeCalculator(taxCode);

            callback();
        },
        tearDown: function (callback) {
            delete this.TCC;

            callback();
        },
        
        testAllowance : function(test) {
            test.equals(6479, this.TCC.getPersonalAllowance());
            test.done();
        },

        testLetter : function(test) {
            test.equals('P', this.TCC.parseTaxCodeLetter());
            test.done();
        }
    }),
    
    'Tax Code 647Y' : testCase({
        setUp: function (callback) {
            var taxCode = '647Y';
            this.TCC = new TCC.TaxCodeCalculator(taxCode);

            callback();
        },
        tearDown: function (callback) {
            delete this.TCC;

            callback();
        },
        
        testAllowance : function(test) {
            test.equals(6479, this.TCC.getPersonalAllowance());
            test.done();
        },

        testLetter : function(test) {
            test.equals('Y', this.TCC.parseTaxCodeLetter());
            test.done();
        }
    }),
    
    'Tax Code 647T' : testCase({
        setUp: function (callback) {
            var taxCode = '647T';
            this.TCC = new TCC.TaxCodeCalculator(taxCode);

            callback();
        },
        tearDown: function (callback) {
            delete this.TCC;

            callback();
        },
        
        testAllowance : function(test) {
            test.equals(6479, this.TCC.getPersonalAllowance());
            test.done();
        },

        testLetter : function(test) {
            test.equals('T', this.TCC.parseTaxCodeLetter());
            test.done();
        }
    }),
    
    'Tax Code BR' : testCase({
        setUp: function (callback) {
            var taxCode = 'BR';
            this.TCC = new TCC.TaxCodeCalculator(taxCode);
            

            callback();
        },
        tearDown: function (callback) {
            delete this.TCC;

            callback();
        },
        
        testAllowance : function(test) {
            test.equals(0, this.TCC.getPersonalAllowance());
            test.done();
        },

        testLetter : function(test) {
            test.equals('BR', this.TCC.parseTaxCodeLetter());
            test.done();
        }
    }),
    
    'Tax Code D0' : testCase({
        setUp: function (callback) {
            var taxCode = 'D0';
            this.TCC = new TCC.TaxCodeCalculator(taxCode);
            

            callback();
        },
        tearDown: function (callback) {
            delete this.TCC;

            callback();
        },
        
        testAllowance : function(test) {
            test.equals(0, this.TCC.getPersonalAllowance());
            test.done();
        },

        testLetter : function(test) {
            test.equals('D0', this.TCC.parseTaxCodeLetter());
            test.done();
        }
    }),
    
    'Tax Code D1' : testCase({
        setUp: function (callback) {
            var taxCode = 'D1';
            this.TCC = new TCC.TaxCodeCalculator(taxCode);
            

            callback();
        },
        tearDown: function (callback) {
            delete this.TCC;

            callback();
        },
        
        testAllowance : function(test) {
            test.equals(0, this.TCC.getPersonalAllowance());
            test.done();
        },

        testLetter : function(test) {
            test.equals('D1', this.TCC.parseTaxCodeLetter());
            test.done();
        }
    }),
    
    'Tax Code NT' : testCase({
        setUp: function (callback) {
            var taxCode = 'NT';
            this.TCC = new TCC.TaxCodeCalculator(taxCode);
            

            callback();
        },
        tearDown: function (callback) {
            delete this.TCC;

            callback();
        },
        
        testAllowance : function(test) {
            test.equals(0, this.TCC.getPersonalAllowance());
            test.done();
        },

        testLetter : function(test) {
            test.equals('NT', this.TCC.parseTaxCodeLetter());
            test.done();
        }
    })
};
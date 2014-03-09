/*
    Test that we are calculating PAYE correctly
*/

var sys = require('sys'),
    MIO = require("../lib/income_tax").MIO,
    testCase = require('nodeunit').testCase;


module.exports = {
    
    '2009_10' : {
        
        // ************************************************************

        // 18 Year Old

        // ************************************************************
    
        'Low Salary for a 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 25000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2009_10');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(3705, this.tc.calculate());
            
                test.done();
            }
        }),
    
        'Medium Salary for a 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 45000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2009_10');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(7930, this.tc.calculate());
            
                test.done();
            }
        }),
    
        'High Salary for a 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 125000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2009_10');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(39930, this.tc.calculate());
            
                test.done();
            }
        }),
    
        // ************************************************************

        // 66 Year Old

        // ************************************************************
    
        'Low Salary for 66 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 66,
                    income : 25000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2009_10');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(3312, this.tc.calculate());
            
                test.done();
            }
        }),
    
        'Medium Salary for 66 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 66,
                    income : 45000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2009_10');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(7930, this.tc.calculate());
            
                test.done();
            }
        }),
    
        'High Salary for 66 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 66,
                    income : 125000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2009_10');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(39930, this.tc.calculate());
            
                test.done();
            }
        }),
    
        // ************************************************************

        // 78 Year Old

        // ************************************************************
    
        'Low Salary for 78 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 78,
                    income : 25000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2009_10');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(3282, this.tc.calculate());
            
                test.done();
            }
        })
    },
    
    
    '2010_11' : {
        
        // ************************************************************

        // 18 Year Old

        // ************************************************************
    
        'Low Salary for a 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 25000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2010_11');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(3705, this.tc.calculate());
            
                test.done();
            }
        }),
    
        'Medium Salary for a 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 45000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2010_11');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(7930, this.tc.calculate());
            
                test.done();
            }
        }),
    
        'High Salary for a 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 125000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2010_11');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(42520, this.tc.calculate());
            
                test.done();
            }
        }),
    
        // ************************************************************

        // 66 Year Old

        // ************************************************************
    
        'Low Salary for 66 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 66,
                    income : 25000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2010_11');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(3312, this.tc.calculate());
            
                test.done();
            }
        }),
    
        'Medium Salary for 66 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 66,
                    income : 45000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2010_11');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(7930, this.tc.calculate());
            
                test.done();
            }
        }),
    
        'High Salary for 66 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 66,
                    income : 125000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2010_11');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(42520, this.tc.calculate());
            
                test.done();
            }
        }),
    
        // ************************************************************

        // 78 Year Old

        // ************************************************************
    
        'Low Salary for 78 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 78,
                    income : 25000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2010_11');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(3282, this.tc.calculate());
            
                test.done();
            }
        })
    },
    
    '2011_12' : {
        
        // ************************************************************

        // 18 Year Old

        // ************************************************************
    
        'Low Salary for a 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 25000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2011_12');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(3505, this.tc.calculate());
            
                test.done();
            }
        }),
    
        'Medium Salary for a 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 45000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2011_12');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(8010, this.tc.calculate());
            
                test.done();
            }
        }),
        
        'Medium Salary for a 18 year old with tax code K445' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 50000,
                    taxCode : 'K445'
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2011_12');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(14780.00, this.tc.calculate());
            
                test.done();
            }
        }),
    
        'High Salary for a 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 125000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2011_12');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(43000, this.tc.calculate());
            
                test.done();
            }
        }),
    
        // ************************************************************

        // 66 Year Old

        // ************************************************************
    
        'Low Salary for 66 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 66,
                    income : 25000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2011_12');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(3112, this.tc.calculate());
            
                test.done();
            }
        }),
    
        'Medium Salary for 66 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 66,
                    income : 45000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2011_12');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(8010, this.tc.calculate());
            
                test.done();
            }
        }),
    
        'High Salary for 66 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 66,
                    income : 125000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2011_12');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(43000, this.tc.calculate());
            
                test.done();
            }
        }),
    
        // ************************************************************

        // 78 Year Old

        // ************************************************************
    
        'Low Salary for 78 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 78,
                    income : 25000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2011_12');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(3082, this.tc.calculate());
            
                test.done();
            }
        }),
        
        'High Salary for 78 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 78,
                    income : 125000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2011_12');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(43000, this.tc.calculate());
            
                test.done();
            }
        }),
        
        // ************************************************************

        // Tax Codes

        // ************************************************************
    
        'Low Salary with tax code 647L' : testCase({
            setUp: function (callback) {
                var persona = {
                    taxCode : '647L',
                    income : 25000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2011_12');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(3704.20, this.tc.calculate());
            
                test.done();
            }
        }),
        
        'Low Salary with tax code BR' : testCase({
            setUp: function (callback) {
                var persona = {
                    taxCode : 'BR',
                    income : 25000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2011_12');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(5000, this.tc.calculate());
            
                test.done();
            }
        }),
        
        'Low Salary with tax code D0' : testCase({
            setUp: function (callback) {
                var persona = {
                    taxCode : 'D0',
                    income : 25000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2011_12');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(10000, this.tc.calculate());
            
                test.done();
            }
        }),
        
        'Low Salary with tax code D1' : testCase({
            setUp: function (callback) {
                var persona = {
                    taxCode : 'D1',
                    income : 25000
                };
        
                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2011_12');
                this.tc = tc;
        
                callback();
            },
            tearDown: function (callback) {
                delete this.tc;
        
                callback();
            },
        
            testDeduction : function(test) {
                test.equals(12500, this.tc.calculate());
            
                test.done();
            }
        }),
        
        'Low Salary with tax code NT' : testCase({
            setUp: function (callback) {
                var persona = {
                    taxCode : 'NT',
                    income : 25000
                };
        
                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2011_12');
                this.tc = tc;
        
                callback();
            },
            tearDown: function (callback) {
                delete this.tc;
        
                callback();
            },
        
            testDeduction : function(test) {
                this.tc.calculate();
                test.equals(0, this.tc.deduction);
            
                test.done();
            }
        }),
        
        'Low Salary with tax code K647' : testCase({
            setUp: function (callback) {
                var persona = {
                    taxCode : 'K647',
                    income : 25000
                };

                var tc = new MIO.TaxCalculator(persona);
                tc.setTaxYear('2011_12');
                this.tc = tc;

                callback();
            },
            tearDown: function (callback) {
                delete this.tc;

                callback();
            },

            testDeduction : function(test) {
                test.equals(6294, this.tc.calculate());
            
                test.done();
            }
        })
    }
};
/*
    Test that we are calculating PAYE correctly
*/

var sys = require('sys'),
    PersonalAllowanceFactory = require("../lib/personal_allowance_factory"),
    testCase = require('nodeunit').testCase;


module.exports = {
    '2009_10' : {

        // ************************************************************

        // 18 Year Old

        // ************************************************************

        'Low Salary for a blind 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 25000,
                    blind : true
                };

                this.pa = new PersonalAllowanceFactory(persona, '2009_10');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(8365.00, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'High Salary for a blind 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 115000,
                    blind : true
                };

                this.pa = new PersonalAllowanceFactory(persona, '2009_10');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(8365, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary for a 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 25000
                };

                this.pa = new PersonalAllowanceFactory(persona, '2009_10');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(6475, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary for a 66 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 66,
                    income : 25000
                };

                this.pa = new PersonalAllowanceFactory(persona, '2009_10');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(8440, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary for a blind 66 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 66,
                    income : 25000,
                    blind : true
                };

                this.pa = new PersonalAllowanceFactory(persona, '2009_10');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(10330, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        
        'Low Salary for a blind 75 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 75,
                    income : 25000,
                    blind : true
                };

                this.pa = new PersonalAllowanceFactory(persona, '2009_10');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(10480, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary for a 75 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 75,
                    income : 25000
                };

                this.pa = new PersonalAllowanceFactory(persona, '2009_10');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(8590, this.pa.getTaxFreeAllowance());

                test.done();
            }
        })
    },
    
    '2010_11' : {

        // ************************************************************

        // 18 Year Old

        // ************************************************************

        'Low Salary for a blind 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 25000,
                    blind : true
                };

                this.pa = new PersonalAllowanceFactory(persona, '2010_11');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(8365.00, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'High Salary for a blind 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 115000,
                    blind : true
                };

                this.pa = new PersonalAllowanceFactory(persona, '2010_11');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(865, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary for a 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 25000
                };

                this.pa = new PersonalAllowanceFactory(persona, '2010_11');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(6475, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary for a 66 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 66,
                    income : 25000
                };

                this.pa = new PersonalAllowanceFactory(persona, '2010_11');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(8440, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary for a blind 66 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 66,
                    income : 25000,
                    blind : true
                };

                this.pa = new PersonalAllowanceFactory(persona, '2010_11');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(10330, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        
        'Low Salary for a blind 75 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 75,
                    income : 25000,
                    blind : true
                };

                this.pa = new PersonalAllowanceFactory(persona, '2010_11');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(10480, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary for a 75 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 75,
                    income : 25000
                };

                this.pa = new PersonalAllowanceFactory(persona, '2010_11');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(8590, this.pa.getTaxFreeAllowance());

                test.done();
            }
        })
    },
    
    
    '2011_12' : {

        // ************************************************************

        // 18 Year Old

        // ************************************************************

        'Low Salary for a blind 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 25000,
                    blind : true
                };

                this.pa = new PersonalAllowanceFactory(persona, '2011_12');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(9455, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'High Salary for a blind 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 115000,
                    blind : true
                };

                this.pa = new PersonalAllowanceFactory(persona, '2011_12');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(1955, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary for a 18 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 18,
                    income : 25000
                };

                this.pa = new PersonalAllowanceFactory(persona, '2011_12');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(7475, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary for a 66 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 66,
                    income : 25000
                };

                this.pa = new PersonalAllowanceFactory(persona, '2011_12');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(9440, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary for a blind 66 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 66,
                    income : 25000,
                    blind : true
                };

                this.pa = new PersonalAllowanceFactory(persona, '2011_12');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(11420, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        
        'Low Salary for a blind 75 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 75,
                    income : 25000,
                    blind : true
                };

                this.pa = new PersonalAllowanceFactory(persona, '2011_12');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(11570, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary for a 75 year old' : testCase({
            setUp: function (callback) {
                var persona = {
                    age : 75,
                    income : 25000
                };

                this.pa = new PersonalAllowanceFactory(persona, '2011_12');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(9590, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary with a 647L tax code' : testCase({
            setUp: function (callback) {
                var persona = {
                    income : 25000,
                    taxCode : '647L'
                };

                this.pa = new PersonalAllowanceFactory(persona, '2011_12');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(6479, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary with a BR tax code' : testCase({
            setUp: function (callback) {
                var persona = {
                    income : 25000,
                    taxCode : 'BR'
                };

                this.pa = new PersonalAllowanceFactory(persona, '2011_12');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(0, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary with a D0 tax code' : testCase({
            setUp: function (callback) {
                var persona = {
                    income : 25000,
                    taxCode : 'D0'
                };

                this.pa = new PersonalAllowanceFactory(persona, '2011_12');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(0, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary with a D1 tax code' : testCase({
            setUp: function (callback) {
                var persona = {
                    income : 25000,
                    taxCode : 'D1'
                };

                this.pa = new PersonalAllowanceFactory(persona, '2011_12');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(0, this.pa.getTaxFreeAllowance());

                test.done();
            }
        }),
        
        'Low Salary with a K647 tax code' : testCase({
            setUp: function (callback) {
                var persona = {
                    income : 25000,
                    taxCode : 'K647'
                };

                this.pa = new PersonalAllowanceFactory(persona, '2011_12');

                callback();
            },
            tearDown: function (callback) {
                delete this.pa;

                callback();
            },

            testPersonalAllowance : function(test) {
                test.equals(-6470, this.pa.getTaxFreeAllowance());

                test.done();
            }
        })
    }
};
var fs = require('fs');
require.extensions['.json'] = function(module, filename){
    module.exports = JSON.parse(fs.readFileSync(filename, 'utf8'));
};
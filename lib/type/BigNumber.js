var BigNumber = require('arbitrary-precision')(require('decimaljs-adapter'));

// FIXME: replace all require('decimal.js') with require('./BigNumber').

module.exports = BigNumber;

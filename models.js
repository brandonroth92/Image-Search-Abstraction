var mongoose = require('mongoose');
var historyschema = require('./history');

var exports = module.exports = {};

exports.history = mongoose.model('History', historyschema);


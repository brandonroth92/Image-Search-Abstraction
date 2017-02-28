const mongodb = require('mongodb');
const mongoose = require('mongoose');
const MONGOLAB_URI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/URLmicroservice';
var db = mongoose.connection;

var exports = module.exports = {};

exports.connect = function() {
  mongoose.connect(MONGOLAB_URI);
}

//once database is available, run app code
exports.db = function(callback) {
  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', function() {
    callback();
  });
}
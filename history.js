var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  term: String,
  when: String
});

module.exports = schema;
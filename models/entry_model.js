var mongoose = require('mongoose');

var entrySchema = new mongoose.Schema({
  author: String,
  text: String
});

exports = module.exports = mongoose.model('Entry', entrySchema);

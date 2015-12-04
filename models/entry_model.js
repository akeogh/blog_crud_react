var mongoose = require('mongoose');

var entrySchema = new mongoose.Schema({
  title: String,
  author: String,
  date: {type: Date, default: Date.now },
  content: String
});

exports = module.exports = mongoose.model('Entry', entrySchema);

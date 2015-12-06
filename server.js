var mongoose = require('mongoose');
var express = require('express');
var app = express();
var entrysRouter = require(__dirname + "/routes/entries_router");

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/entry_dev');

app.use(express.static(__dirname + '/build'));

app.use('/api', entrysRouter);

app.use(function(req, res) {
  res.status(404).send('NOT FOUND!!!!!');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server up :)');
});

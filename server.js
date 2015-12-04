var mongoose = require('mongoose');
var express = require('express');
var app = express();
//insert mongo schema

//write connection to database - mongoose.connect

app.use(express.static(__dirname + '/build'));

//app.use('/api', ROUTER);

app.use(function(req, res) {
  res.status(404).send('NOT FOUND!!!!!');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server up :)');
});

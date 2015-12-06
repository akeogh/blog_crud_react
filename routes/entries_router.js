var express = require('express');
var Entry = require(__dirname + '/../models/entry_model');
var bodyParser = require('body-parser');
var respond = require(__dirname + "/../lib/respond");

var entrysRouter = exports = module.exports = express.Router();

entrysRouter.get('/', function(req, res) {
  Entry.find({}, function(err, data) {
    respond(res, err, data);
  });
});

entrysRouter.get('/:id', function(req, res) {
  Entry.find({_id: req.params.id}, function(err, data) {
    respond(res, err, data);
  });
});

entrysRouter.post('/', bodyParser.json(), function(req, res) {
  var newEntry = new Entry(req.body);
  newEntry.save(function(err, data) {
    respond(res, err, {msg: 'new post saved.'});
  });
});

entrysRouter.put('/:id', bodyParser.json(), function(req, res) {
  var updates = req.body;
  Entry.update({_id: req.params.id}, updates, function(err){
    respond(res, err, {msg: 'updates saved.'});
  });
});

entrysRouter.delete('/:id', function(req, res) {
  Entry.remove({_id: req.params.id}, function(err) {
    respond(res, err, {msg: 'entry deleted.'});
  });
});

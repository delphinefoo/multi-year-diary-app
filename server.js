var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var Q = require('q');
var Entry = require('./entryModel.js');
var util = require('./utils.js');

var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/fiveyear');

mongoose.connection.once('connected', function() {
  console.log("Connected to database");
});

app.use(express.static(__dirname + '/client'));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/api/entries', function(req, res, next) {
  var findAll = Q.nbind(Entry.find, Entry);
  var month = new Date().getMonth();
  var date = new Date().getDate();
  findAll({
    month: month,
    day: date,
  })
    .then(function(entries) {
      res.json(entries);
    });
});

app.get('/api/entries/:month/:day', function(req, res) {
  var findAll = Q.nbind(Entry.find, Entry);
  var month = req.params.month;
  var date = req.params.day;
  findAll({
    month: month,
    day: date
  })
    .then(function(entries) {
      console.log(entries);
      res.json(entries);
    });
});

app.post('/api/entries', function(req, res, next) {
  var createEntry = Q.nbind(Entry.create, Entry);
  var newEntry = {
    text: req.body.text,
    createdAt: new Date(2015, 11, 31),
    month: new Date(2015, 11, 31).getMonth(),
    day: new Date(2015, 11, 31).getDate(),
    year: new Date(2015, 11, 31).getFullYear()
  };
  createEntry(newEntry)
    .then(function(createdEntry) {
      res.json(createdEntry);
    });
});

app.delete('/api/entries/:entry_id', function(req, res, next) {
  var remove = Q.nbind(Entry.remove, Entry);
  remove({
    _id: req.params.entry_id
  })
    .then(function() {
      res.end();
    });
});



app.listen(port);

console.log('Server now listening on port ' + port);
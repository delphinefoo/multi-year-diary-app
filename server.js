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
    day: date
  })
    .then(function(entries) {
      res.json(entries);
    });
});

app.post('/api/entries', function(req, res, next) {
  var createEntry = Q.nbind(Entry.create, Entry);
  var newEntry = {
    text: req.body.text,
    createdAt: new Date(),
    month: new Date().getMonth(),
    day: new Date().getDate()
  };

  createEntry(newEntry)
    .then(function(createdEntry) {
      res.json(createdEntry);
    });

});



app.listen(port);

console.log('Server now listening on port ' + port);
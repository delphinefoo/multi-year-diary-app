var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var db = require('./db.js');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/client'));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.listen(port);

console.log('Server now listening on port ' + port);
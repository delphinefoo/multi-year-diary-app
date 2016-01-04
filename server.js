var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var db = require('./db.js')

var port = process.env.PORT || 3000;

app.listen(port);

console.log('Server now listening on port ' + port);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
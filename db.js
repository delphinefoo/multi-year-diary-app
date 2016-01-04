var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/fiveyear');

mongoose.connection.once('connected', function() {
  console.log("Connected to database");
});
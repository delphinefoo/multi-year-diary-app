var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/fiveyear');

mongoose.connection.once('connected', function() {
  console.log("Connected to database");
});

var entrySchema = new mongoose.Schema({
  text: {
    type: String,
    maxlength: 140
  },
  createdAt: {
    type: Date
  }
});

var Entry = mongoose.model('Entry', entrySchema);
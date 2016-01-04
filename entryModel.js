var mongoose = require('mongoose');

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

module.exports = Entry;
var mongoose = require('mongoose');

var bookmarkSchema = new mongoose.Schema({
  title: String,
  link: String,
  image: String,
  tags: [String],
  color: String
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);

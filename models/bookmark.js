var mongoose = require('mongoose');

var bookmarkSchema = new mongoose.Schema({
  title: String,
  link: String,
  tags: [String],
  color: String,
  imageUrl: String
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);

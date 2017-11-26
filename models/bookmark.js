var mongoose = require('mongoose');

let bookmarkSchema = new mongoose.Schema({
  title: String,
  link: String,
  tags: [String],
  imageUrl: String,
  colorCategory: {
    color: String,
    category: String
  }
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);

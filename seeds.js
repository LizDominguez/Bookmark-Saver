var mongoose = require('mongoose'),
  Bookmark = require('./models/bookmark');

const data = [
  {
    title: 'Netflix',
    link: 'https://www.netflix.com/browse',
    tags: ['movies', 'shows'],
    color: '',
    imageUrl: 'https://lh3.googleusercontent.com/BbqN8GpAephpCNwTBuB8SiFTPT1zFccYyuPd4qRRQRTQPXU5d4F1wuVWfEJh3L4RL3wIKc6BeQ=w640-h400-e365'
  }
];

function seedDB() {
// Remove Bookmarks

  Bookmark.remove({}, function(err) {
    if (err) {
      console.log('error');
    }
    console.log('Deleted Bookmarks');

    // Add Bookmarks

    data.forEach(function(seed) {
      Bookmark.create(seed, function(err, bookmark) {
        if (err) {
          console.log('error');
        } else {
          console.log('Added bookmarks');
          bookmark.save();
        }
      });
    });
  });
}

module.exports = seedDB;

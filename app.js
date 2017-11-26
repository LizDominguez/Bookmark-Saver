var express = require('express'),
  app = express(),
  path = require('path'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  Bookmark = require('./models/bookmark'),
  methodOverride = require('method-override'),
  seedDB = require('./seeds');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bookmarksaver');
app.use(methodOverride('method'));
seedDB();

app.get('/', function(req, res) {
  res.redirect('/login');
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.get('/register', function(req, res) {
  res.render('register');
});

app.get('/bookmarks', function(req, res) {
  Bookmark.find({}, function(err, allBookmarks) {
    if (err) {
      console.log(err);
    } else {
      res.render('bookmarks', {bookmarks: allBookmarks});
    }
  });
});

app.post('/bookmarks', function(req, res) {
  var title = req.body.title,
    link = req.body.link,
    tags = req.body.tags,
    colorCategory = {
      color: req.body.colorCategory.color,
      category: req.body.colorCategory.category
    },
    imageUrl = req.body.imageUrl,
    newBookmark = {title: title, link: link, tags: tags, colorCategory: colorCategory, imageUrl: imageUrl};
  Bookmark.create(newBookmark, function(err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully rendered Bookmarks');
      res.redirect('/bookmarks');
    }
  });
});

app.get('/bookmarks/new', function(req, res) {
  res.render('new');
});

app.listen(3000, function() {
  console.log('Bookmark-Saver has started!');
});

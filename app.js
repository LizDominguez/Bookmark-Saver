const express = require ('express'),
      app = express(),
      path = require('path'),
      bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs");

app.get('/', function(req, res) {
  res.redirect('/login');
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.get("/register", function(req, res){
   res.render("register");
});

app.get("/bookmarks", function(req, res){
   res.render("bookmarks");
});


app.listen(3000, function () {
  console.log('Bookmark-Saver has started!')
});

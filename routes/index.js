var express = require('express');
var models = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var tweets = models.Tweet.findAll({include:[models.User]}).success(function(tweets) {
    // console.log(tweets);
    res.render('index', { title: 'Twitter.js', tweets: tweets });
  });
  // var tweets = store.list();
});

router.post('/submit', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  var id = ; //FILL IN
  store.push(name, text, id); //PUSH NEW TWEET
  io.sockets.emit("new_tweet", { name: name, text: text, id: id });
  res.redirect('/');
});

module.exports = router;

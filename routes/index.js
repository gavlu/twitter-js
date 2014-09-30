var express = require('express');
var models = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var tweets = models.Tweet.findAll({include:[models.User]}).success(function(tweets) {
    res.render('index', { title: 'Twitter.js', tweets: tweets });
  });
});

router.post('/submit', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;

  models.User.findOrCreate({where: {name: name}}).complete(function(err, user) {
    models.Tweet.create({UserId: user[0].id, tweet: text}).complete(function(err, data) {
      io.sockets.emit("new_tweet", { name: name, text: text});
      res.redirect('/');
    });
  });

});

module.exports = router;

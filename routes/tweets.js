var express = require('express');
var router = express.Router();
// var store = require('../store');
var models = require('../models');

router.get('/:id', function(req, res) {
  var name = req.body.name;
  var id = Number(req.params.id);
  var tweets = models.Tweet.findAll({include:[models.User], where: {'Tweet.id': id} }).success(function(tweets) {
    res.render('index', { title: 'Twitter.js - Posts by ' + name, nameVal: name, tweets: tweets });
  });
});

router.post('/:id/delete', function(req, res) {
  var tweetId = req.params.id;
  models.Tweet.find({where: {id: tweetId}}).complete(function(err, tweet) {
    tweet.destroy().complete(function(err, done) {
      console.log('Deleted');
      res.redirect('/');
    });
  });
});

module.exports = router;

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

  // res.render('index', { title: 'Tweet: ' + id + ' by ' + name, tweets: list });
});

module.exports = router;

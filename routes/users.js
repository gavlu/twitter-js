var express = require('express');
var router = express.Router();
var tweetsRouter = require('./tweets');
var models = require('../models');

/* GET users listing. */
router.get('/:name', function(req, res) {
  var name = req.params.name;
  var tweets = models.Tweet.findAll({include:[models.User], where: {'User.name': name}  }).success(function(tweets) {
    res.render('index', { title: 'Twitter.js - Posts by ' + name, nameVal: name, tweets: tweets });
  });

});

router.use('/:name/tweets', function(req, res, next) {
  req.body.name = req.params.name;
  next();
}, tweetsRouter);

module.exports = router;

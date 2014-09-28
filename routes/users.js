var express = require('express');
var router = express.Router();
var store = require('../store');
var tweetsRouter = require('./tweets');

/* GET users listing. */
router.get('/:name', function(req, res) {
  var name = req.params.name;
  var list = store.find({name: name});
  res.render('index', { title: 'Twitter.js - Posts by ' + name, nameVal: name, tweets: list });
});

router.use('/:name/tweets', function(req, res, next) {
  req.body.name = req.params.name;
  next();
}, tweetsRouter);

module.exports = router;

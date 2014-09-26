var express = require('express');
var router = express.Router();
var store = require('../store');

/* GET users listing. */
router.get('/:name', function(req, res) {
  var name = req.params.name;
  var list = store.find({name: name});
  res.render('index', { title: 'Twitter.js - Posts by ' + name, nameVal: name, tweets: list });
});

router.get('/:name/tweets/:id', function(req, res) {
  var name = req.params.name;
  var id = Number(req.params.id);
  var list = store.find({name: name, id: id});
  res.render('index', { title: 'Twitter.js - Posts by ' + name, tweets: list });
});
module.exports = router;

var express = require('express');
var router = express.Router();
var store = require('../store');

router.get('/:id', function(req, res) {
  var name = req.body.name;
  var id = Number(req.params.id);
  var list = store.find({name: name, id: id});
  res.render('index', { title: 'Tweet: ' + id + ' by ' + name, tweets: list });
});

module.exports = router;

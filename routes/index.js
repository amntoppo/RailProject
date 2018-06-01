var express = require('express');
var router = express.Router();
var request = require("request");
var url = 'https://api.railwayapi.com/v2/route/train/12006/apikey/7ojkymzkb3';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

module.exports = router;

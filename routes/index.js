var express = require('express');
var router = express.Router();
var request = require("request");
var url = 'https://api.railwayapi.com/v2/route/train/';
var apikey = '7ojkymzkb3';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Train status' });

});

router.post('/search', function(req, res, next) {
  console.log("gets here");
   var trainno = req.body.trainno;
      request({
          url: url + trainno + '/apikey/' + apikey,
          json: true
      }, function (error, response, body) {

         if (!error && response.statusCode === 200) {
           body.route.forEach(function(data) {
             console.log(data); // prints the route json
           });
             //console.log(body.route[0]) // Print the json response
          }
    })
    res.redirect('/');
});

module.exports = router;

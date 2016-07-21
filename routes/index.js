var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(req.headers.host);
  res.render('index', { title: 'Seven Bears 野生蜂蜜' });

});

module.exports = router;

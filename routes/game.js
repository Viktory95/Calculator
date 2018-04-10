var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/calcGame', function(req, res, next) {
  res.render('calcGame', { title: 'Calculator Game' });
});

module.exports = router;

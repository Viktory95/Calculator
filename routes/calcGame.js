var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/calcGame', function(req, res, next) {
  res.render('calcGame', { title: 'Memory Game' });
});

module.exports = router;

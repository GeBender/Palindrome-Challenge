var express = require('express');
var app = express();
var router = express.Router();

router.get('/api/palindrome', function(req, res, next) {
	res.render('index.html');
});


module.exports = router;
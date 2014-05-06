var express = require('express');
var router = express.Router();

/* GET users listing. */
router.route('/')
	.get(function(req, res, next) {
		res.send('GET Users');
	})
	.post(function(req, res, next) {
		res.send('POST Users');
	});

module.exports = router;

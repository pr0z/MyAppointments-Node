var express = require('express');
var router = express.Router();

/* GET users listing. */
router.route('/:userId')
	.get(function(req, res, next) {
		userId = req.params.userId;
		res.send('GET Users '+userId);
	})
	.post(function(req, res, next) {
		res.send('POST Users');
	});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET tasks listing. */
router.route('/')
	.get(function(req, res, next) {
		res.send('GET Tasks');
	})
	.post(function(req, res, next) {
		res.send('POST Tasks');
	});	

router.route('/get/:id')
	.get(function(req, res, next) {
		res.send({id:req.params.id, name: "The Name", description: "description"});
  // req.collection.remove({_id: req.collection.id(req.params.id)}, function(e, result){
  //   if (e) return next(e)
  //   res.send((result===1)?{msg:'success'}:{msg:'error'})
  // })
})



module.exports = router;

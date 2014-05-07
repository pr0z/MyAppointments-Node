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

router.route('/GetTasksForthcoming/:userId')
	.get(function(req, res, next) {
		res.send({id:req.params.userId, name: "The Name", description: "description"});
  // req.collection.remove({_id: req.collection.id(req.params.id)}, function(e, result){
  //   if (e) return next(e)
  //   res.send((result===1)?{msg:'success'}:{msg:'error'})
  // })
	})

router.route('/GetTasksHistory/:userId')
	.get(function(req, res, next) {
		 
	})

router.route('/GetTasksForUserId/:userId')
	.get(function(req, res, next) {
		 
	})

router.route('/SyncrhonizeTasksForUserId/:userId/:maxTaskId')
	.get(function(req, res, next) {
		 
	})

router.route('/RegisterTask')
	.post(function(req, res, next) {
		 
	})	

module.exports = router;

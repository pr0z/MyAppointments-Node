var express = require('express');
var router = express.Router();

/* GET tasks listing. */
router.get('/', function(req, res) {
  res.send('Route Tasks');
});

router.get('/get/:id', function(req, res) {
	res.send({id:req.params.id, name: "The Name", description: "description"});
  // req.collection.remove({_id: req.collection.id(req.params.id)}, function(e, result){
  //   if (e) return next(e)
  //   res.send((result===1)?{msg:'success'}:{msg:'error'})
  // })
})



module.exports = router;

var express = require('express');
var router = express.Router();

/* GET tasks listing. */
router.get('/', function(req, res) {
  res.send('Route Tasks');
});

router.get('/delete/:id', function(req, res) {
	console.log(req.params.id);

  // req.collection.remove({_id: req.collection.id(req.params.id)}, function(e, result){
  //   if (e) return next(e)
  //   res.send((result===1)?{msg:'success'}:{msg:'error'})
  // })
})



module.exports = router;

   var express = require('express');
   var router = express.Router();

   /* GET users listing. */
   router.route('/:userId')
   	.get(function(req, res, next) {

   		users = [];
   		  for (var i=0;i<10;i++) {
   		  	users.push({
   				id : i,
   				firstname : "julien ["+i+"]"
   		  	});
   		  }
     

      	database.collection('USERS').insert(users, function(err, cursor) {});

    // 		db.collection('users').find(
    //   	   {
    //   	   },
    //   	   {
      	   	
    //   	   }, 
    //   	   function(err, cursor) {   	   
    //         var next = function() {
    //         	cursor.nextObject(function(err, item) {
    //         		if (err || !item) {
    //         			return;
    //         		}
    //         		console.log(item);
    //         		next();
    //         	})

    //         }
       //         next();

   	// });

   		res.send('GET Users');	
   	})
   	.post(function(req, res, next) {
   		res.send('POST Users');
   	});

   module.exports = router;

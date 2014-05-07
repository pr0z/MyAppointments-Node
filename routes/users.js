var express = require('express');
var router = express.Router();

router.route('/')
   .get(function(req, res, next){
      res.send("Get Users");
   });

/* GET users listing. */
router.route('/InsertNewUser/')
	.get(function(req, res, next) {

		users = [];
		users.push({
         	USR_ID : 1,
         	USR_FIRSTNAME : "Roman",
         	USR_LASTNAME : "Leichnig",
         	USR_BIRTHDATE :  "14/05/1991",
         	USR_EMAIL : "roman.leichnig@gmail.com",
         	USR_PASSWORD : "toto",
         	USR_PHONE : "0609880736",
         	USR_CREATION_DATE : "06/05/2014"
		});
 
   		database.collection('USERS').insert(users, function(err, cursor) {});

		res.send('Utilisateur enregistré');	
	})
	.post(function(req, res, next) {
		res.send('POST Users');
	});

	router.route('/GetUserByMail/:userMail')
		.get(function(req, res, next) {
		 // res.send("PARAM "+ req.params.userMail);

	  //   database.collection('USERS').find().limit(1);

	     database.collection('USERS').findOne(
	     {
	        USR_EMAIL : req.params.userMail
	     },
	     {
	         _id : 0,
	        USR_EMAIL : 1
	     }
	     , function(err, item) {
	     	if (err) {
	     		res.send("ERROR "+err);
	     	} else {
	     		res.json(item);


	     	//tooto
	     		// var next = function() {
		      //      	cursor.nextObject(function(err, item) {
		      //         	if (err || !item)
		      //            	return;
		      //         	res.send(item);
		      //         	next();
	       //     		})
	       // 		}
	       //  	next();
	     	}
	        
	     });
	})

module.exports = router;

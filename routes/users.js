var express = require('express');
var bodyParser = require('body-parser');
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
         	Id : 1,
         	FirstName : "Roman",
         	LastName : "Leichnig",
         	BirthDate :  "14/05/1991",
         	Email : "roman.leichnig@gmail.com",
         	Password : "toto",
         	Phone : "0609880736",
         	CreationDate : "06/05/2014"
		});

		console.log(database);

   		database.collection('USERS').insert(users, function(err, cursor) {
   			if(err)
   				console.log(err);
   		});

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
	        Email : req.params.userMail
	     },
	     {
	         _id : 0
	     }
	     , function(err, item) {
	     	if (err) {
	     		res.send("ERROR "+err);
	     	} else {
	     		res.json(item);
	     	}
	        
	     });
	})

router.route('/RegisterUser')
	.all(function(req, res, next) {
		console.log(next);
		res.send("toto");
	})

router.route('/UpdateUser')
	.get(function(req, res, next) {
	})

router.route('/DeleteUser')
	.post(function(req, res, next) {
		 
	})

module.exports = router;

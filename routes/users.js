var express = require('express');
var router = express.Router();

router.route('/')
   .get(function(req, res, next){
      res.send("Get Users");
   });

router.route('/RegisterUser')
	.get(function(req, res, next) {
		users = [];

		user = createUser(1,"Roman","Leichnig","14/05/1991","roman.leichnig@gmail.com","toto","0609880736","06/05/2014");
		users.push(user);
 
   		database.collection('USERS').insert(user);

		res.send('Utilisateur enregistré');
	})
	.post(function(req, res, next) {
		user = createUser(req.body.Id,req.body.FirstName,req.body.LastName,req.body.BirthDate,req.body.Email,req.body.Password,req.body.Phone,req.body.CreationDate);

		database.collection('USERS').insert(user);

		res.send('Utilisateur enregistré');	
	});

	function createUser(id, firstname, lastname, birthdate, email, password, phone, creationdate) {
		return {
			Id : id,
         	FirstName : firstname,
         	LastName : lastname,
         	BirthDate :  birthdate,
         	Email : email,
         	Password : password,
         	Phone : phone,
         	CreationDate : creationdate
		};
	}

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

router.route('/UpdateUser')
	.post(function(req, res, next) {
		 
	})

router.route('/DeleteUser')
	.post(function(req, res, next) {
		 
	})

module.exports = router;

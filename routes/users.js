var express = require('express');
var router = express.Router();

router.route('/')
   .get(function(req, res, next){
      res.send("Get Users");
   });

/* GET users listing. */
router.route('/RegisterUser')
	.get(function(req, res, next) {
		console.log(database);

		user = createUser(1,"Roman","Leichnig","14/05/1991","roman.leichnig@gmail.com","toto","0609880736","06/05/2014");

   		database.collection('USERS').insert(user, function(err, cursor) {
   			if (err)
   				res.send(err);
   			else
   				res.send('Utilisateur enregistré');	
   		});
	})
	.post(function(req, res, next) {
		console.log(require('util').inspect(req.body, {depth : null}));
		// res.send(req.body);
		// var user = res.json(req.body);
		// var user = req.param("Id");

		// console.log("PARAM = "+req.params);
		// console.log("BODY = "+req.body);
		// user = createUser(req.body.Id,req.body.FirstName,req.body.LastName,req.body.BirthDate,req.body.Email,req.body.Password,req.body.Phone,req.body.CreationDate);
		console.log(req.body);
		res.send("BODY = "+req.body);
		// res.send(req);
		// console.log("USER = "+user);
		// database.collection('USERS').insert(user, function(err, cursor) {
  //  			if (err)
  //  				res.send(err);
  //  			else
  //  				res.send('Utilisateur enregistré');	
  //  		});
 	});
 	//Test : curl -i -X POST -H 'Content-Type: application/json' -d '{"Id":"1", "FirstName":"Julien", "LastName":"Wetstein", "BirthDate":"13/12/1988", "Email":"julienwetstein@gmail.com", "Password":"thunder", "Phone":"0638664364", "BirthDate":"07/05/2014"}' http://localhost:3000/Users/RegisterUser
//curl -i -X POST -H 'Content-Type: application/json'  -d '{"email":"julienwetstein@gmail.com"}'  http://localhost:3000/Users/RegisterUser

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

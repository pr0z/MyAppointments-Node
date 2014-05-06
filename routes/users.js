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
  
   		res.send('GET Users');	
   	})
   	.post(function(req, res, next) {
   		res.send('POST Users');
   	});

   module.exports = router;

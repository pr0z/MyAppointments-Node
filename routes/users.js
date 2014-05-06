   var express = require('express');
   var router = express.Router();

   /* GET users listing. */
   router.route('/:userId')
   	.get(function(req, res, next) {

   		users = [];
   		users.push({
            USR_ID = 1,
            USR_FIRSTNAME = "Roman",
            USR_LASTNAME = "Leichnig",
            USR_BIRTHDATE =  "14/05/1991",
            USR_PASSWORD = "toto",
            USR_PHONE = "0609880736",
            USR_CREATION_DATE = "06/05/2014"
   		});
     

      	database.collection('USERS').insert(users, function(err, cursor) {});

   		res.send('utilisateur enregistré');	
   	})
   	.post(function(req, res, next) {
   		res.send('POST Users');
   	});

   module.exports = router;

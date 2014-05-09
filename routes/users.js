module.exports = function(app){

	app.get('/Users/GetUserByMail/:userMail', function(req, res, next) {
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
	      console.log("get user by mail");
	      res.json(item);
	    }        
	  });
	})

	app.get('/Users/InsertNewUser/', function(req, res, next) {
        users = [];
        users.push({
            Id : 1,
            FirstName : "leichnig",
            LastName : "roman",
            BirthDate :  new Date(1991, 05, 14),
            Email : "roman.leichnig@gmail.com",
            Password : "toto",
            Phone : "0609880736",
            CreationDate : new Date()
        });

        database.collection('USERS').insert(users, function(err, cursor) {
            if(err)
                console.log(err);
        });

        res.send('Utilisateur enregistré'); 
 	})
}
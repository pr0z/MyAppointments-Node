var async = require("async");

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

 	app.get('/Users/RegisterUser/', function(req, res, next) {
 		res.render('registerUser');
 	})

 	app.post('/Users/RegisterUser/', function(req, res, next) {
 		var json = req.body;
	    var options = { "sort": [['Id','desc']] };
	    var maxId = 0;
	    async.parallel([
	        function (cb) {
	          database.collection('USERS').findOne({}, options , function(err, doc) {
	           if (err)
	              console.log(err);

	            maxId = +doc.Id;
	            cb(null);
	        }),
	        function (cb){
	            cb(null);
	        }
	    }],
	        function(){
	            maxId++;
	            json.Id = maxId;
	            var dateofbirth = new Date(json.dateofbirth);
	           	var date = new Date(new Date(dateofbirth).setMonth(dateofbirth.getMonth()+1));

	            database.collection('USERS').insert(
	            {
	            	Id : maxId,
	            	FirstName : json.firstname,
		            LastName : json.lastname,
		            BirthDate :  date,
		            Email : json.mel,
		            Password : json.pass,
		            Phone : json.phone,
		            CreationDate : new Date()
	            }, function(err, cursor){
	                if (err)
	                    console.log(err);
	            });

	            res.send("Utilisateur "+req.body.firstname+" enregistré")
	        }
	    );
 	})
}
var express = require('express')
  , http = require('http')
  , path = require('path')
  , async = require("async")
  , MongoClient = require('mongodb').MongoClient;

var app = express();
port = process.env.PORT || 3000;
global.config = require('./config.js');

app.configure(function(){
  app.set('port', port);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {layout: false});
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//Routes
app.get('/', function(req, res){
  res.render('index');
});

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

app.get('/Task/GetTasksForUserId/:userId', function(req, res, next){
   console.log(req.params.userId);
   database.collection('TASK').find(
     {
       IdUser : +req.params.userId
     },
     {
       _id : 0
     }
   ).toArray(function(err, results){
     if (err)
       res.send("ERR : nodata");

     res.send(results);
   });
 })

app.get('/Task/SyncrhonizeTasksForUserId/:userId/:maxTaskId', function(req, res, next) {
    database.collection('TASK').find(
     {
       Id : { $gt : +req.params.maxTaskId },
       IdUser : +req.params.userId
     },
     {
       _id : 0
     }
    ).toArray(function(err, results){
     if (err)
       res.send("ERR : nodata");

     res.send(results);
   });
 })

app.post('/Task/RegisterTask/', function(req, res, next){
    var json = req.body;
    var options = { "sort": [['Id','desc']] };
    var maxId = 0;
    async.parallel([
        function (cb) {
          database.collection('TASK').findOne({}, options , function(err, doc) {
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
            console.log(json);

            database.collection('TASK').insert(json, function(err, cursor){
                if (err)
                    console.log(err);
            });

            console.log(json);
            res.json(json);
        }
    );
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

        console.log(database);

        database.collection('USERS').insert(users, function(err, cursor) {
            if(err)
                console.log(err);
        });

        res.send('Utilisateur enregistré'); 
    })

//Asynchronous db connection
async.parallel([function (cb) {
    MongoClient.connect(config.mongo.host, {
        server: {
            socketOptions: {
                connectTimeoutMS: 3000
            }
        },
    }, function (err, db) {
        if (err) {
            console.log('error: ', err);
        } else {
            global.database = db;
            cb(null);
        }
    }),
    function (cb){
        cb(null);
    }
}],
    function (){
        app.listen(port);
        console.log('Go on localhost:'+port+'...'); 
    }
);

module.exports = app;
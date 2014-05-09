var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/users')
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
  res.send("Hello World");
});

app.get('/task/new', function(req, res) {
  res.send("New task");
});

//save new employee
app.post('/employee/new', function(req, res){
  res.sen("post task");
});

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
var express = require('express'),
    path = require('path'),
    favicon = require('static-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var routes = require('./routes/index');
var users = require('./routes/users');
var tasks = require('./routes/tasks');
var app = express();
var port = process.env.PORT || 3000;

var uri = "mongodb://MongoLab-d4:91U16s8z3R1TcFE7C3vAyBiHortXZg8kQd4IpkWuxIo-@ds030817.mongolab.com:30817/MongoLab-d4";
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(uri, {
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
        }
    });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');                  

app.use(favicon());
app.use(logger('dev'));                         // log every request to the console
app.use(bodyParser.json());                     // pull information from html in POST
app.use(methodOverride());                      // simulate DELETE and PUT
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));     // set the static files location /public/img will be /img for users

app.use('/', routes);
app.use('/Users', users);
app.use('/Task', tasks);


// Make our db accessible to our router
/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(port);
console.log('Go on localhost:'+port+'...'); 

module.exports = app;

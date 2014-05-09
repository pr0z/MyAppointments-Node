var express = require('express');
var app = express();

/* GET home page. */
app.get('/', function(req, res, next) {
  		res.render('index', { title: 'Express' });
  	});
 //  	res.writeHead(200, { 'Content-Type': 'text/plain' });
	// res.end('Hello Azure with Express !\n');


app.get('/Task', function(req, res, next) {
		res.render('index', { toto : 1 });
	})
app.post('/Task/', function(req, res, next) {
		res.send('POST Tasks');
	});

module.exports = app;

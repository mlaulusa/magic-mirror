var express = require('express'),
	logger = require('morgan'),
	fs = require('fs'),
	app = express(),
	server = require('https').createServer({
		key: fs.readFileSync('public/privatekey.pem'),
		cert: fs.readFileSync('public/certificate.pem')
	}, app),
	config = require('./config');

app.use(logger('dev'));
app.use(express.static('app'));

app.get('/test', function(req, res){
	res.status(200);
	res.send('Hello');
});

app.get('*', function(req, res){
	res.status(200);
	res.sendFile('./app/index.html');
});

server.listen(config.port, function(){
	console.log('Server listening on port %d in a %s environment', config.port, app.get('env'));
});

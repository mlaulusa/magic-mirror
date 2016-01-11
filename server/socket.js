var app = require('./'),
    fs = require('fs'),
    server = require('https').createServer({
        key: fs.readFileSync('server/public/privatekey.pem'),
        cert: fs.readFileSync('server/public/certificate.pem')
    }, app),
    io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  console.log('Someone connected!');
});

module.exports = server;

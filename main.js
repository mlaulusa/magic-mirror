var config = require('./server/config'),
    server = require('./server/socket'),
    app = require('./server');

server.listen(config.app.port, function () {
    console.log('Server listening on port %d in a %s environment', config.app.port, app.get('env'));
});

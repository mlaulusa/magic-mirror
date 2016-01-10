var express = require('express'),
    logger = require('morgan'),
    app = express(),
    router = require('./routes');

app.use(logger('dev'));
app.use(express.static('app'));
app.use(express.static('server/public'));

require('./cron');

app.use(router);

module.exports = app;

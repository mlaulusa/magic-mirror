var router = require('express').Router(),
    config = require('../config'),
    r = require('rethinkdbdash')({host: config.rethinkdb.ip, port: config.rethinkdb.port});

router.get('/api/forecast', function(req, res){
  r.db('weather').table('forecast').then(function(results){
    res.status(200);
    res.json(results);
  }).catch(function(err){
    res.status(401);
    res.json(err);
  });
});

router.get('/api/conditions', function(req ,res){
  r.db('weather').table('conditions').then(function(results){
    res.status(200);
    res.json(results);
  }).catch(function(err){
    res.status(401);
    res.json(results);
  });
});

router.get('/api/astronomy', function(req, res){
  r.db('weather').table('astronomy').then(function(results){
    res.status(200);
    res.json(results);
  }).catch(function(err){
    res.status(401);
    res.json(err);
  });
});

router.get('/api/alerts', function(req, res){
  r.db('weather').table('alerts').then(function(results){
    res.status(200);
    res.json(results);
  }).catch(function(err){
    res.status(401);
    res.json(err);
  });
});

router.get('/test', function (req, res){
    res.status(200);
    res.send('Hello');
});

router.get('*', function (req, res){
    res.status(200);
    //res.sendFile('app/index.html');
});

module.exports = router;

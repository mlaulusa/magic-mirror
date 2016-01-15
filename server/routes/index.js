var router = require('express').Router(),
    config = require('../config'),
    r = require('../db');

router.get('/api/forecast', function(req, res){
  r.getForecast().then(function(results){
    res.status(200);
    res.json(results);
  }).catch(function(err){
    res.status(401);
    res.json(err);
  });
});

router.get('/api/conditions', function(req ,res){
  r.getConditions().then(function(results){
    res.status(200);
    res.json(results);
  }).catch(function(err){
    res.status(401);
    res.json(results);
  });
});

router.get('/api/astronomy', function(req, res){
  r.getAstronomy().then(function(results){
    res.status(200);
    res.json(results);
  }).catch(function(err){
    res.status(401);
    res.json(err);
  });
});

router.get('/api/alerts', function(req, res){
  r.getAlerts().then(function(results){
    res.status(200);
    res.json(results);
  }).catch(function(err){
    res.status(401);
    res.json(err);
  });
});

router.get('*', function (req, res){
    res.status(200);
    //res.sendFile('app/index.html');
});

module.exports = router;

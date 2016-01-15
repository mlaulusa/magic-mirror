var config = require('../config'),
    r = require('rethinkdbdash')({host: config.rethinkdb.ip, port: config.rethinkdb.port});

module.exports = {

  getConditions:  function(){
    return new Promise(function(resolve, reject){
      r.db('weather').table('conditions').then(function(results){
        resolve(results);
      }).catch(function(error){
        reject(error);
      });
    });
  },

  getForecast: function(){
    return new Promise(function(resolve, reject){
      r.db('weather').table('forecast').then(function(results){
        resolve(results);
      }).catch(function(error){
        reject(error);
      });
    });
  },

  getAstronomy: function(){
    return new Promise(function(resolve, reject){
      r.db('weather').table('astronomy').then(function(results){
        resolve(results);
      }).catch(function(error){
        reject(error);
      });
    });
  },

  getAlerts: function(){
    return new Promise(function(resolve, reject){
      r.db('weather').table('alerts').then(function(results){
        resolve(results);
      }).catch(function(error){
        reject(error);
      });
    });
  },

  postConditions: function(conditions){
    return new Promise(function(resolve, reject){
      r.db('weather').table('conditions').insert(conditions).then(function(results){
        resolve(results);
      }).catch(function(error){
        reject(error);
      });
    });
  },

  postForecast: function(forecast){
    return new Promise(function(resolve, reject){
      r.db('weather').table('forecast').insert(forecast).then(function(results){
        resolve(results);
      }).catch(function(error){
        reject(error);
      });
    });
  },

  postAstronomy: function(astronomy){
    return new Promise(function(resolve, reject){
      r.db('weather').table('astronomy').insert(astronomy).then(function(results){
        resolve(results);
      }).catch(function(error){
        reject(error);
      });
    });
  },

  postAlerts: function(alerts){
    return new Promise(function(resolve, reject){
      r.db('weather').table('alerts').insert(alerts).then(function(results){
        resolve(results);
      }).catch(function(error){
        reject(error);
      });
    });
  }
}

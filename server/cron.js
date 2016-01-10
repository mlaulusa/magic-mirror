var CronJob = require('cron').CronJob,
    rp = require('request-promise'),
    config = require('./config');

//new CronJob('*/2 * * * *', function () {
//    var api = 'https://api.wunderground.com/api/' + config.weather.api + '/conditions/forecast/hourly/alerts/q/UT/Provo.json';
//    rp({
//        uri: api,
//        json: true
//    }).then(function (data) {
//            console.log(new Date().toUTCString());
//            console.log(data);
//        })
//        .catch(function (err) {
//            console.log(err);
//        });
//}, null, true, 'America/Boise');

var weather = require('./weather.json');
console.log(weather.forecast);

var app = require('./'),
    fs = require('fs'),
    server = require('https').createServer({
        key: fs.readFileSync('server/public/privatekey.pem'),
        cert: fs.readFileSync('server/public/certificate.pem')
    }, app),
    io = require('socket.io').listen(server),
    CronJob = require('cron').CronJob,
    rp = require('request-promise'),
    config = require('./config'),
    r = require('./db');

io.sockets.on('connection', function(socket){
  console.log('Someone connected!');
});

new CronJob('*/30 * * * *', function (){

    var api = 'https://api.wunderground.com/api/' + config.wunderground.api + '/conditions/forecast/hourly/alerts/astronomy/q/' + config.location.state + '/' + config.location.city + '.json';

    rp({
        uri: api,
        json: true
    }).then(function (data){

        var weather = {

            conditions: {
                location: data.current_observation.display_location.full,
                date_retreived: new Date(),
                condition: data.current_observation.weather,
                fahrenheit: {
                    temp: data.current_observation.temp_f,
                    feelslike: data.current_observation.feelslike_f
                },
                celsius: {
                    temp: data.current_observation.temp_c,
                    feelslike: data.current_observation.feelslike_c
                },
                humidity: data.current_observation.relative_humidity,
                wind_string: data.current_observation.wind_string,
                wind_mph: data.current_observation.wind_mph,
                visibility: data.current_observation.visibility_mi,
                solar_radiation: data.current_observation.solarradiation,
                uv: data.current_observation.UV,
                high: data.forecast.simpleforecast.forecastday[0].high,
                low: data.forecast.simpleforecast.forecastday[0].low,
                snow: {
                    allday: data.forecast.simpleforecast.forecastday[0].snow_allday.in,
                    day: data.forecast.simpleforecast.forecastday[0].snow_day.in,
                    night: data.forecast.simpleforecast.forecastday[0].snow_night.in
                },
                precipitation: {
                    allday: data.forecast.simpleforecast.forecastday[0].qpf_allday.in,
                    day: data.forecast.simpleforecast.forecastday[0].qpf_day.in,
                    night: data.forecast.simpleforecast.forecastday[0].qpf_night.in
                },
                icon: data.current_observation.icon
            },

            forecast: {
                location: data.current_observation.display_location.full,
                date_retreived: new Date(),
                day_forecast: [

                {
                    date: {
                        epoch: data.forecast.simpleforecast.forecastday[1].date.epoch,
                        month_name: data.forecast.simpleforecast.forecastday[1].date.monthname,
                        day_name: data.forecast.simpleforecast.forecastday[1].date.weekday,
                        day: data.forecast.simpleforecast.forecastday[1].date.day,
                        year: data.forecast.simpleforecast.forecastday[1].date.year
                    },
                    high: data.forecast.simpleforecast.forecastday[1].high,
                    low: data.forecast.simpleforecast.forecastday[1].low,
                    condition: data.forecast.simpleforecast.forecastday[1].conditions,
                    snow: {
                        allday: data.forecast.simpleforecast.forecastday[1].snow_allday.in,
                        day: data.forecast.simpleforecast.forecastday[1].snow_day.in,
                        night: data.forecast.simpleforecast.forecastday[1].snow_night.in
                    },
                    precipitation: {
                        allday: data.forecast.simpleforecast.forecastday[1].qpf_allday.in,
                        day: data.forecast.simpleforecast.forecastday[1].qpf_day.in,
                        night: data.forecast.simpleforecast.forecastday[1].qpf_night.in
                    },
                    wind: {
                        average: data.forecast.simpleforecast.forecastday[1].avewind,
                        max: data.forecast.simpleforecast.forecastday[1].maxwind
                    }
                },

                {
                    date: {
                        epoch: data.forecast.simpleforecast.forecastday[2].date.epoch,
                        month_name: data.forecast.simpleforecast.forecastday[2].date.monthname,
                        day_name: data.forecast.simpleforecast.forecastday[2].date.weekday,
                        day: data.forecast.simpleforecast.forecastday[2].date.day,
                        year: data.forecast.simpleforecast.forecastday[2].date.year
                    },
                    high: data.forecast.simpleforecast.forecastday[2].high,
                    low: data.forecast.simpleforecast.forecastday[2].low,
                    condition: data.forecast.simpleforecast.forecastday[2].conditions,
                    snow: {
                        allday: data.forecast.simpleforecast.forecastday[2].snow_allday.in,
                        day: data.forecast.simpleforecast.forecastday[2].snow_day.in,
                        night: data.forecast.simpleforecast.forecastday[2].snow_night.in
                    },
                    precipitation: {
                        allday: data.forecast.simpleforecast.forecastday[2].qpf_allday.in,
                        day: data.forecast.simpleforecast.forecastday[2].qpf_day.in,
                        night: data.forecast.simpleforecast.forecastday[2].qpf_night.in
                    },
                    wind: {
                        average: data.forecast.simpleforecast.forecastday[2].avewind,
                        max: data.forecast.simpleforecast.forecastday[2].maxwind
                    }
                },

                {
                    date: {
                        epoch: data.forecast.simpleforecast.forecastday[3].date.epoch,
                        month_name: data.forecast.simpleforecast.forecastday[3].date.monthname,
                        day_name: data.forecast.simpleforecast.forecastday[3].date.weekday,
                        day: data.forecast.simpleforecast.forecastday[3].date.day,
                        year: data.forecast.simpleforecast.forecastday[3].date.year
                    },
                    high: data.forecast.simpleforecast.forecastday[3].high,
                    low: data.forecast.simpleforecast.forecastday[3].low,
                    condition: data.forecast.simpleforecast.forecastday[3].conditions,
                    snow: {
                        allday: data.forecast.simpleforecast.forecastday[3].snow_allday.in,
                        day: data.forecast.simpleforecast.forecastday[3].snow_day.in,
                        night: data.forecast.simpleforecast.forecastday[3].snow_night.in
                    },
                    precipitation: {
                        allday: data.forecast.simpleforecast.forecastday[3].qpf_allday.in,
                        day: data.forecast.simpleforecast.forecastday[3].qpf_day.in,
                        night: data.forecast.simpleforecast.forecastday[3].qpf_night.in
                    },
                    wind: {
                        average: data.forecast.simpleforecast.forecastday[3].avewind,
                        max: data.forecast.simpleforecast.forecastday[3].maxwind
                    }
                }
            ]},
            astronomy: {
                location: data.current_observation.display_location.full,
                date_retreived: new Date(),
                sunrise: data.sun_phase.sunrise,
                sunset: {
                    hour: data.sun_phase.sunset.hour % 12,
                    minute: data.sun_phase.sunset.minute
                },
                moon_phase: {
                    age: data.moon_phase.ageOfMoon,
                    phase: data.moon_phase.phaseofMoon,
                    illuminated: data.moon_phase.percentIlluminated
                }
            },

            alerts: {
              location: data.current_observation.display_location.full,
              date_retreived: new Date(),
              reports: data.alerts
            }
        };

        r.postForecast(weather.forecast).then(function(results){
            console.log('Inserted into forecast table');
            io.sockets.emit('update-forecast', weather.forecast);
        }).catch(function(err){
            console.log(err);
        });

        r.postConditions(weather.conditions).then(function(results){
            console.log('Inserted into conditions table');
            io.sockets.emit('update-condition', weather.conditions);
        }).catch(function(err){
            console.log(err);
        });

        r.postAlerts(weather.alerts).then(function(results){
            console.log('Inserted into alerts table');
            io.sockets.emit('update-alerts', weather.alerts);
        }).catch(function(err){
            console.log(err);
        });

        r.postAstronomy(weather.astronomy).then(function(results){
            console.log('Inserted into astronomy table');
            io.sockets.emit('update-astronomy', weather.astronomy);
        }).catch(function(err){
            console.log(err);
        });

    }).catch(function(err){
        console.log(err);
    });

}, null, true, config.location.timezone);

module.exports = server;

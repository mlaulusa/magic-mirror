var CronJob = require('cron').CronJob,
    rp = require('request-promise'),
    config = require('./config'),
    r = require('rethinkdbdash')({host: '192.168.1.112', port: 28015}),
    connection = null,
    data = require('./weather.json');

new CronJob('*/4 * * * *', function (){

    var api = 'https://api.wunderground.com/api/' + config.weather.api + '/conditions/forecast/hourly/alerts/astronomy/q/UT/Provo.json';

    rp({
        uri: api,
        json: true
    }).then(function (data){

        var weather = {

            location: data.current_observation.display_location.full,
            time: new Date(),

            conditions: {
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
                icon: {
                    name: data.current_observation.icon,
                    url: data.current_observation.icon_url
                }
            },

            forecast: {
                day_one: {
                    date: {
                        epoch: data.forecast.simpleforecast.forecastday[0].date.epoch,
                        month_name: data.forecast.simpleforecast.forecastday[0].date.monthname,
                        day_name: data.forecast.simpleforecast.forecastday[0].date.weekday
                    },
                    high: data.forecast.simpleforecast.forecastday[0].high,
                    low: data.forecast.simpleforecast.forecastday[0].low,
                    condition: data.forecast.simpleforecast.forecastday[0].conditions,
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
                    wind: {
                        average: data.forecast.simpleforecast.forecastday[0].avewind,
                        max: data.forecast.simpleforecast.forecastday[0].maxwind
                    }
                },

                day_two: {
                    date: {
                        epoch: data.forecast.simpleforecast.forecastday[1].date.epoch,
                        month_name: data.forecast.simpleforecast.forecastday[1].date.monthname,
                        day_name: data.forecast.simpleforecast.forecastday[1].date.weekday
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

                day_three: {
                    date: {
                        epoch: data.forecast.simpleforecast.forecastday[2].date.epoch,
                        month_name: data.forecast.simpleforecast.forecastday[2].date.monthname,
                        day_name: data.forecast.simpleforecast.forecastday[2].date.weekday
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

                day_four: {
                    date: {
                        epoch: data.forecast.simpleforecast.forecastday[3].date.epoch,
                        month_name: data.forecast.simpleforecast.forecastday[3].date.monthname,
                        day_name: data.forecast.simpleforecast.forecastday[3].date.weekday
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
            },
            astronomy: {
                sunrise: data.sun_phase.sunrise,
                sunset: data.sun_phase.sunset,
                moon_phase: data.moon_phase.phaseofMoon
            },

            alerts: data.alerts
        };

        r.db('weather').table('forecast').insert(weather.forecast).then(function(results){
            console.log('Inserted into forecast table');
            console.log(results);
        }).catch(function(err){
            console.log(err);
        });

        r.db('weather').table('conditions').insert(weather.conditions).then(function(results){
            console.log('Inserted into conditions table');
            console.log(results);
        }).catch(function(err){
            console.log(err);
        });

        r.db('weather').table('alerts').insert(weather.alerts).then(function(results){
            console.log('Inserted into alerts table');
            console.log(results);
        }).catch(function(err){
            console.log(err);
        });

        r.db('weather').table('astronomy').insert(weather.astronomy).then(function(results){
            console.log('Inserted into astronomy table');
            console.log(results);
        }).catch(function(err){
            console.log(err);
        });

    }).catch(function(err){
        console.log(err);
    });

}, null, true, 'America/Boise');


/*var obj = {

 conditions: {
 location: data.current_observation.display_location.full,
 time: new Date(),
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
 icon: {
 name: data.current_observation.icon,
 url: data.current_observation.icon_url
 }
 },

 forecast: {
 day_one: {
 date: {
 epoch: data.forecast.simpleforecast.forecastday[0].date.epoch,
 month_name: data.forecast.simpleforecast.forecastday[0].date.monthname,
 day_name: data.forecast.simpleforecast.forecastday[0].date.weekday
 },
 high: data.forecast.simpleforecast.forecastday[0].high,
 low: data.forecast.simpleforecast.forecastday[0].low,
 condition: data.forecast.simpleforecast.forecastday[0].conditions,
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
 wind: {
 average: data.forecast.simpleforecast.forecastday[0].avewind,
 max: data.forecast.simpleforecast.forecastday[0].maxwind
 }
 },

 day_two: {
 date: {
 epoch: data.forecast.simpleforecast.forecastday[1].date.epoch,
 month_name: data.forecast.simpleforecast.forecastday[1].date.monthname,
 day_name: data.forecast.simpleforecast.forecastday[1].date.weekday
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

 day_three: {
 date: {
 epoch: data.forecast.simpleforecast.forecastday[2].date.epoch,
 month_name: data.forecast.simpleforecast.forecastday[2].date.monthname,
 day_name: data.forecast.simpleforecast.forecastday[2].date.weekday
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

 day_four: {
 date: {
 epoch: data.forecast.simpleforecast.forecastday[3].date.epoch,
 month_name: data.forecast.simpleforecast.forecastday[3].date.monthname,
 day_name: data.forecast.simpleforecast.forecastday[3].date.weekday
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
 },

 astronomy: {
 location: data.current_observation.display_location.full,
 time: new Date(),
 sunrise: data.sun_phase.sunrise,
 sunset: data.sun_phase.sunset,
 moon_phase: data.moon_phase.phaseofMoon
 },

 alerts: {
 location: data.current_observation.display_location.full,
 time: new Date(),
 report: data.alerts
 }
 };

 r.db('weather').table('forecast').insert(obj.forecast).then(function (results){
 console.log(results);
 });*/

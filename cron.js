var CronJob = require('cron').CronJob,
    rp = require('request-promise');

new CronJob('*/4 * * * *', function(){
    console.log('In a box');
}, null, true, 'America/Boise');


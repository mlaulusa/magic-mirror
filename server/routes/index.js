var router = require('express').Router();

router.get('/test', function (req, res){
    res.status(200);
    res.send('Hello');
});

router.get('*', function (req, res){
    res.status(200);
    //res.sendFile('app/index.html');
});

module.exports = router;

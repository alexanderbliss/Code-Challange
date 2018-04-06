var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/*', function (req, res) {
    console.log('404 : ', req.params);
    res.sendStatus(404);
});

module.exports = router;
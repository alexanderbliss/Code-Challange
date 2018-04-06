var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js');


//Posting new template to database
router.post('/new/template', function (req, res) {
        var template = {
            template_name: req.body.template_name,
            text: req.body.text,

        }
        pool.connect(function (errorConnectingToDB, db, done) {
            if (errorConnectingToDB) {
                console.log('errorConnectingToDB', errorConnectingToDB);
                res.sendStatus(500);
            } else {
                var queryText = 'INSERT INTO "templates" ("template_name","text")VALUES($1, $2)'
                db.query(queryText, [template.template_name, template.text],
                    function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('errorMakingQuery', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            res.send(result.rows);
                        }
                    })
            }
        });
});

//posting new locations
router.post('/new/locations', function (req, res) {
        var locations = {
            company: req.body.company,
            city: req.body.city,
            timezone: req.body.timezone,
        }
        pool.connect(function (errorConnectingToDB, db, done) {
            if (errorConnectingToDB) {
                console.log('errorConnectingToDB', errorConnectingToDB);
                res.sendStatus(500);
            } else {
                var queryText = 'INSERT INTO "locations" ("company","city",' +
                    ' "timezone")VALUES($1, $2, $3)'
                db.query(queryText, [locations.company, locations.city, locations.timezone],
                    function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('errorMakingQuery', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            res.send(result.rows);
                        }
                    })
            }
        });
});

// GET ROUTES

//gets guests from database
router.get('/get/guests', function (req, res) {
        pool.connect(function (errorConnectingToDB, db, done) {
            if (errorConnectingToDB) {
                console.log('errorConnectingToDB', errorConnectingToDB);
                res.sendStatus(500);
            } else {
                var queryText = 'SELECT*FROM "guests"';
                db.query(queryText,function (errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('errorMakingQuery', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            res.send(result.rows);
                        }
                    })
            }
        });
});

//gets locations from database
router.get('/get/locations', function (req, res) {
    console.log('here');
    pool.connect(function (errorConnectingToDB, db, done) {
        if (errorConnectingToDB) {
            console.log('errorConnectingToDB', errorConnectingToDB);
            res.sendStatus(500);
        } else {
            var queryText = 'SELECT*FROM "locations"';
            db.query(queryText, function (errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('errorMakingQuery', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                })
        }
    });
});

//gets templates from database
router.get('/get/templates', function (req, res) {
        pool.connect(function (errorConnectingToDb, db, done) {
            if (errorConnectingToDb) {
                console.log('Error connecting', errorConnectingToDb);
                res.sendStatus(500);
            } else {
                var queryText = 'SELECT*FROM "templates"';
                db.query(queryText, function (errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('Error making query', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        console.log(result);
                        res.send(result.rows);
                    }
                }); // END QUERY
            }
        });
});



module.exports = router;

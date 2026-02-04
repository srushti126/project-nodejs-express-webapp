'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    console.log('Home route accessed'); // CodeRabbit test log
    res.render('index', { title: 'Express' });
});

module.exports = router;

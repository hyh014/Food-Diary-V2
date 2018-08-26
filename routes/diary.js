var users = require('../data.json');
var express = require('express');
var router = express.Router();

// GET request to /login

router.get('/', function(req, res, next) {
    // do something
		res.render('diary',users.info[0]);
});

module.exports = router;

var express = require('express');
var router = express.Router();

// GET request to /login

router.get('/', function(req, res, next) {
    // do something
		res.render('register');
});

// POST request to /login


module.exports = router;

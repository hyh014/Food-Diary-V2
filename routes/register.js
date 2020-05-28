var express = require('express');
var router = express.Router();

// GET request to /login

router.get('/', function(req, res, next) {
    // do something
    let message = req.session.message;
    req.session.message = null;
		res.render('register',{message:message});
});

// POST request to /login


module.exports = router;

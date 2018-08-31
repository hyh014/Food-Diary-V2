var express = require('express');
var router = express.Router();
const firebase = require('firebase');

// GET request to /login

router.get('/', function(req, res, next) {
      console.log(firebase.auth().currentUser.uid);
		res.render('entry');
});

// POST request to /login
module.exports = router;

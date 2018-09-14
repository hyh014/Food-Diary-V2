var express = require('express');
var router = express.Router();
const firebase = require('firebase');

// GET request to /login

router.get('/', function(req, res, next) {
	let user = firebase.auth().currentUser;
		if(user){
			res.render('entry');
		}else{
			res.render('login',{message:'Please Login First'});
		}
});

// POST request to /login
module.exports = router;

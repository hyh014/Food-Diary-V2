var express = require('express');
var router = express.Router();
let firebase = require('firebase');

// GET request to /login

router.get('/', function(req, res, next) {
	res.render('index');
	/*
	let user = firebase.auth().currentUser;
	if(user){
		res.render('index',{user:user.uid});
	}else{
		res.render('login',{message:'Please Login First'});
	}
*/
});

module.exports = router;

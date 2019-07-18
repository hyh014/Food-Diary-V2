var express = require('express');
var router = express.Router();
const firebase = require('firebase/app');
require('firebase/auth');

// GET request to /login

router.get('/', function(req, res, next) {

	let user = firebase.auth().currentUser;
	if(user){
		res.render('index',{user:user.uid});
	}else{
		res.redirect('/');
	}
});

module.exports = router;

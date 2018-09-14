var express = require('express');
var router = express.Router();

// GET request to /login

router.get('/', function(req, res, next) {
	let user = firebase.auth().currentUser;
	if(user){
		res.render('index');
	}else{
		res.render('login',{message:'Please Login First'});
	}

});

module.exports = router;

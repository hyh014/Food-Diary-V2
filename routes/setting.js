let express = require('express');
let router = express.Router();
let firebase = require('firebase');

// GET request to /login

router.get('/', function(req, res, next) {

	// res.render('setting');
	let user = firebase.auth().currentUser;
	if(user){
		console.log(user.metadata.creationTime);
		res.render('setting',{email:user.email,created: user.metadata.creationTime});
	}else{
		res.redirect('/');
	}


});

module.exports = router;

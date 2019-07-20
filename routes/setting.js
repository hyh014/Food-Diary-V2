let express = require('express');
let router = express.Router();
let firebase = require('firebase');

// GET request to /login

router.get('/', function(req, res, next) {

	res.render('setting');
	// let user = firebase.auth().currentUser;
	// if(user){
	// 	user = user.uid;
	// 	res.render('setting');
	// }else{
	// 	res.redirect('/');
	// }


});

module.exports = router;

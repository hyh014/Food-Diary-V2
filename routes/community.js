let express = require('express');
let router = express.Router();
let firebase = require('firebase');

// GET request to /login

router.get('/', function(req, res, next) {


	// let user = firebase.auth().currentUser;
	// if(user){
		// user = user.uid;
		res.render('community');
	// }else{
	// 	res.render('login',{message:'Please Login First'});
	// }


});

module.exports = router;

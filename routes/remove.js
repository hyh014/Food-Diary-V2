var express = require('express');
var router = express.Router();
let firebase = require('firebase');



router.get('/:key', function(req, res, next) {
	let user = firebase.auth().currentUser;
	if(user){
    let key = req.params.key;
    let UUID = user.uid;
    let ref = firebase.database().ref('users/'+UUID+'/'+key);
    ref.remove();
		res.redirect('/diary');
	}else{
		res.render('login',{message:'Please Login First'});
	}
});

module.exports = router;

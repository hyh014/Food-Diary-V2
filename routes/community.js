let express = require('express');
let router = express.Router();
let firebase = require('firebase');

// GET request to /login

router.get('/', function(req, res, next) {
	let user = firebase.auth().currentUser.uid;
	if(user){
		let ref = firebase.database().ref('/messages');
		let list = {entry:[]};

		ref.once('value',function(snapshot){
			snapshot.forEach(function(child){
				let val = child.val();
				if(val.userid === user){
					list.entry.unshift({
						'message': val.message,
						'current':true
					});
				}else{
					list.entry.unshift({
						'message': val.message,
						'current':false
					});
				}

			});
			 res.render('community',list);
		});
	}else{
		res.render('login',{message:'Please Login First'});
	}


});

// POST request to /login
router.post('/submit',function(req,res,next){
	let user = firebase.auth().currentUser.uid;
	let ref = firebase.database().ref('/messages');
	let message = req.body.messages;

	let newMessage = {
		'message': message,
		'userid':user
	}
	ref.push(message);
	res.redirect('/community');
});

module.exports = router;

let express = require('express');
let router = express.Router();
let firebase = require('firebase');

// GET request to /login

router.get('/', function(req, res, next) {


	let user = firebase.auth().currentUser;
	if(user){
		user = user.uid;
		let ref = firebase.database().ref('messages');
		let list = {entry:[]};

		ref.once('value',function(snapshot){
			if(snapshot.numChildren()==0){
				list.entry.unshift({
					'message':'Nothing Here',

				});
			}else {
				snapshot.forEach(function(child){
					let val = child.val();
						list.entry.unshift({
							'message': val.message,
							'email':val.email
						});

				});
			}
			 res.render('community',list);
		});
		res.render('community',list);
	}else{
		res.render('login',{message:'Please Login First'});
	}


});

// POST request to /login

router.post('/submit',function(req,res,next){
	let user = firebase.auth().currentUser.getEmail();
	let ref = firebase.database().ref('/messages');
	let message = req.body.messages;

	let newMessage = {
		'message': message,
		'email':user
	}
	ref.push(newMessage);
	res.redirect('/community');
});

module.exports = router;

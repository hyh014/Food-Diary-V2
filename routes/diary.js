
var express = require('express');
var router = express.Router();
const firebase = require('firebase');
let data = require('../my-project-1519903201611-export.json');

// GET request to /login

router.get('/', function(req, res, next) {

			const UUID = 'gqn1G7aM2GRIt5cKgQmwRoJK0E73';//firebase.auth().currentUser.uid;
		  let ref = firebase.database().ref('users/'+UUID);

		  let list = {entry:[]};

ref.once('value',function(snapshot){
	snapshot.forEach(function(child){
		list.entry.unshift({
			'key': child.key,
			'data': child.val()
		});
	});
	 res.render('diary',list);
});

});

module.exports = router;
/*
 	EXAMPLE
	list.entry.unshift(
		{
		key:'sdfsdfsdf',
		data:{
			anxiety: '3.5',
			comments: 'This is an example',
			date: '09/08/2018 2:21PM',
			health: '4',
			imageURL: '/images/B1.jpg',
			mood: '3.5',
			taste: '3.5' }
		});
};*/

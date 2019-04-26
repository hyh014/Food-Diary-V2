
var express = require('express');
var router = express.Router();
let firebase = require('firebase');
require('dotenv').load();
// GET request to /login
router.get('/', function(req, res, next) {
	res.render('diary');
}

//							UNCOMMENT ONCE DONE
// router.get('/', function(req, res, next) {
// 	let user = firebase.auth().currentUser;
// 	if(user){
// 		const UUID = firebase.auth().currentUser.uid;
// 		let ref = firebase.database().ref('users/'+UUID);
//
// 		let list = {entry:[]};
// 		ref.once('value',function(snapshot){
// 			snapshot.forEach(function(child){
// 				list.entry.unshift({
// 					'key': child.key,
// 					'data': child.val()
// 				});
// 			});
// 			list.apiKey= process.env.APIKEY;
// 			list.authDomain= process.env.AUTHDOMAIN;
// 			list.databaseURL= process.env.DATABASEURL;
// 			list.storageBucket= process.env.STORAGEBUCKET;
// 			list.messagingSenderId= process.env.MESSAGINGSENDERID;
// 			 res.render('diary',list);
// 		});
// 	}else{
// 		res.render('login',{message:'Please Login First'});
// 	}
// });

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

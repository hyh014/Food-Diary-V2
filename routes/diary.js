
var express = require('express');
var router = express.Router();
const firebase = require('firebase');

// GET request to /login

router.get('/', function(req, res, next) {
    // do something
			const UUID = firebase.auth().currentUser.uid;
		  let ref = firebase.database().ref('users/'+UUID);
		  let key = newID.key;
			let list = {
				entry:{
					key: 'fsdfsdf',
					data:{
						image:'/images/B1.jpg',
						date:'sdfsdfsdfsdfsdf',
						comments:'sdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
						taste:'1',
						health:'1',
						anxiety:'1',
						mood:'1'
					}
				}
			};
		  /*let list = [];

		  ref.once('value',function(snapshot){
		    snapshot.forEach(function(childSnapshot){
		      let entry = {
		        'key': childSnapshot.key,
		        'data': childSnapshot.val()
		      };
		      list.unshift(entry);
		    });
		  });*/
		 res.render('diary',list);
});

module.exports = router;

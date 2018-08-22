const express = require('express');
const router = express.Router();
const firebase = require('firebase');



router.post('/addUser', function(req,res){
  const email = req.body.email;
  const password = req.body.password;
firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode == 'auth/weak-password'){
        res.render('register',{message:'Weak Password'})
      }else if(errorCode == "auth/invalid-email")
      {
        res.render('register',{message:'Invalid Email'});
      }else if(errorCode == "auth/email-already-in-use")
      {
        res.render('register',{message:'Email Already In Use'});
      }else {
				res.render('/index');
      }
    });

});

router.post('/login', function(req,res,next){
  const email = req.body.email;
  const password = req.body.password;
      firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(function(error) {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				if(errorCode == 'auth/wrong-password'){
						res.render('login',{message:'wrong Password'});
				}else if(errorCode == "auth/invalid-email")
				{
					res.render('login',{message:'Invalid Email'});
				}else if(errorCode == "auth/email-already-in-use")
				{
					res.render('login',{message:'Email Already In Use'});
				}else {
					console.log(errorMessage);
					res.render('index');
				}
			});
});

router.use('/logout', function(req,res,next){
  firebase.auth().signOut().then(function(){
    res.render('/');
  });
});

module.exports = router;

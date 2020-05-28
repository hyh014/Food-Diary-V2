const express = require('express');
const router = express.Router();
const firebase = require('firebase/app');
require('firebase/auth');

require('dotenv').load();



router.post('/addUser', function(req,res){
  const email = req.body.email;
  const password = req.body.password;
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
    res.redirect('/index');
  },function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode == 'auth/weak-password'){
        req.session.message = "Weak Password";
		    res.redirect('/register');
      }else if(errorCode == "auth/invalid-email")
      {
        req.session.message = "Invalid Email";
	    	res.redirect('/register');

      }else if(errorCode == "auth/email-already-in-use")
      {
        req.session.message = "Email Already In Use";
	    	res.redirect('/register');
      }else if(errorCode == 'auth/operation-not-allowed'){
        req.session.message = "Email/Password Account Is Not Enabled";
	    	res.redirect('/register');
      }else{
        req.session.message = errorMessage;
	    	res.redirect('/register');
        
      }
    });
});

router.post('/login', function(req,res,next){
  const email = req.body.email;
  const password = req.body.password;
  console.log(req.body._csrf);
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
        
        res.redirect('/index');
      },function(error) {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				if(errorCode == 'auth/wrong-password'){
          req.session.message = "Incorrect Password";
          res.redirect('/');
				

				}else if(errorCode == "auth/invalid-email")
				{

          req.session.message = "Invalid Email";
          res.redirect('/');

				}else if(errorCode == "auth/user-disabled")
				{
          req.session.message = "This User Is Disabled";
          res.redirect('/');

				}else if(errorCode == 'auth/user-not-found'){
          req.session.message = "User Not Found";
          res.redirect('/');
        }
        else{
          req.session.message = errorMessage;
          res.redirect('/');
        }
			});

});

router.use('/logout', function(req,res,next){
  firebase.auth().signOut().then(function(){
    res.redirect('/');
  });
});

router.get('/env',function(req,res,next){
  const result = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId:process.env.APPID,
  projectId:process.env.PROJECTID
}
  res.send(result);
});

module.exports = router;

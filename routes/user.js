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
        res.render('register',{message:'Weak Password'})
      }else if(errorCode == "auth/invalid-email")
      {
        res.render('register',{message:'Invalid Email'});
      }else if(errorCode == "auth/email-already-in-use")
      {
        res.render('register',{message:'Email Already In Use'});
      }else if(errorCode == 'auth/operation-not-allowed'){
        res.render('register',{message:'Email/Password Account are Not Enabled'});
      }else{
        res.render('register',{message:errorMessage});
      }
    });
});

router.post('/login', function(req,res,next){
  const email = req.body.email;
  const password = req.body.password;

      firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
        res.redirect('/index');
      },function(error) {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				if(errorCode == 'auth/wrong-password'){

					res.render('login',{message:'Wrong Password'});

				}else if(errorCode == "auth/invalid-email")
				{

					res.render('login',{message:'Invalid Email'});

				}else if(errorCode == "auth/user-disabled")
				{

					res.render('login',{message:'The User is Currently Disabled'});

				}else if(errorCode == 'auth/user-not-found'){
          res.render('login',{message:"User Not Found"});
        }
        else{
          res.render('login',{message:errorMessage});
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
  messagingSenderId: process.env.MESSAGINGSENDERID
}
  res.send(result);
});

module.exports = router;

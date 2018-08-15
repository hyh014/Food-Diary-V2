const express = require('express');
const router = express.Router();
const firebase = require('firebase');

router.post('/addUser', function(req,res,next){
  console.log("post");
  const email = req.body.email;
  const password = req.body.password;
  console.log(email);
  console.log(password);
/*
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function() {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    })
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode == 'auth/weak-password'){
        alert('The password is too weak.');
        res.redirect('/register');
      }else if(errorCode == "auth/invalid-email")
      {
        alert('The email is invalid.');
        res.redirect('/register');
      }else if(errorCode == "auth/email-already-in-use")
      {
        alert('The email is already in use.');
        res.redirect('/register');
      }else {
        alert(errorMessage);
        res.sendStatus(200);
      }
    });
    */
    res.redirect('/login');
});

router.post('/login', function(req,res,next){
  const email = req.body.email;
  const password = req.body.password;
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function() {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return firebase.auth().signInWithEmailAndPassword(email, password);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
    res.render('/index');
});

router.use('/logout', function(req,res,next){
  firebase.auth().signOut().then(function(){
    res.render('/');
  });
});

module.exports = router;

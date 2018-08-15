const express = require('express');
const router = express.Router();
const firebase = require('firebase');
router.use('/', function(req,res,next){
  const email = req.body.email;
  const password = req.body.password;

  firebase.auth().createUserWithEmailAndPassword(email,password);
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

router.use('/login', function(req,res,next){
  const email = req.body.email;
  const password = req.body.password;

  firebase.auth()..signInWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
  var errorMessage = error.message;

  });
});
module.exports = router;

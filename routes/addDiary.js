const express = require('express');
const router = express.Router();
const firebase = require('firebase');

router.post('/', function(req,res,next){
  const edit = req.params.edit;
  const imageURL = req.params.dataURL;
  const comments = req.body.comments;
  const taste = req.body.taste;
  const health = req.body.health;
  const mood = req.body.mood;
  const anxiety = req.body.anxiety;
  const date = req.body.date;
  const time = req.body.time;
  const UUID = firebase.auth().currentUser.uid;
  var newObject = {
      "imageURL":dataURL,
      "comments":comments,
      "time":time,
      "taste":taste,
      "health":health,
      "mood":mood,
      "anxiety":anxiety
      };
      firebase.database().ref('users/'+UUID);

      /*
      if(user){

      }else{
        res.render('login',{message:'Please Login First'});
      }*/
      res.render('diary');
});

module.exports = router;

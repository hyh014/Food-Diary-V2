const express = require('express');
const router = express.Router();
const firebase = require('firebase');

router.post('/', function(req,res,next){

  const edit = req.params.edit;
  const imageURL = req.body.dataURL;
  const comments = req.body.comments;
  const taste = req.body.taste;
  const health = req.body.health;
  const mood = req.body.mood;
  const anxiety = req.body.anxiety;
  const date = req.body.date;
  const UUID = firebase.auth().currentUser.uid;
  const newObject = {
      "imageURL":imageURL,
      "comments":comments,
      'date':date,
      "taste":taste,
      "health":health,
      "mood":mood,
      "anxiety":anxiety,
      };

  let ref = firebase.database().ref('users/'+UUID);
  ref.push(newObject);
  res.redirect('/diary');
});

router.post('/e',function(req,res,next){
  const imageURL = req.body.dataURL;
  const comments = req.body.comments;
  const taste = req.body.taste;
  const health = req.body.health;
  const mood = req.body.mood;
  const anxiety = req.body.anxiety;
  const date = req.body.date;
  const key = req.body.key;
  const UUID = firebase.auth().currentUser.uid;
  const newObject = {
      "imageURL":imageURL,
      "comments":comments,
      'date':date,
      "taste":taste,
      "health":health,
      "mood":mood,
      "anxiety":anxiety,
      };
  let ref = firebase.database().ref('users/'+UUID+'/'+key);

  ref.update(newObject);
  res.redirect('/diary');
});

module.exports = router;

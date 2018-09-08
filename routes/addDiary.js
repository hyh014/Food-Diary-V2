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
<<<<<<< HEAD


=======
      console.log(newObject);
      /*
>>>>>>> parent of 94cc6d35... firebase
  let ref = firebase.database().ref('users/'+UUID);
  let newID=ref.push(newObject);
  let key = newID.key;
  let list = [];
  ref.once('value',function(snapshot){
    snapshot.forEach(function(childSnapshot){
      let entry = {
        'key': childSnapshot.key,
        'data': childSnapshot.val()
      };
      list.unshift(entry);
    });
  });
      res.render('diary',list);
/*
      if(user){

      }else{
        res.render('login',{message:'Please Login First'});
      }*/
      res.render('diary');
});

module.exports = router;

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
      'date':date,
      "time":time,
      "taste":taste,
      "health":health,
      "mood":mood,
      "anxiety":anxiety,
      };
  let ref = firebase.database().ref('users/'+UUID);
  let newID=ref.push(newObject);
  let key = newID.key;
  ref.addListenerForSingleValueEvent(new ValueEventListener(){
    @Override
    public void onDataChange(DataSnapshot DataSnapshot){
      let list[];
      children = dataSnapShot.getChildrenCount();
      for(DataSnapshot snapshot:children){
        let val = snapshot.val();
        let entry = {
          "imageURL":val.imageURL,
          'comments':val.comments,
          'date':val.date,
          'time':val.time,
          'taste':val.taste,
          'health':val.health,
          'mood':val.mood,
          'anxiety':val.anxiety
        };
        list.unshift(entry);
      }
    }
    @Override
    public void onCancelled(DatabaseError databaseError){

    }
  });
      /*
      if(user){

      }else{
        res.render('login',{message:'Please Login First'});
      }*/
      res.render('diary');
});

module.exports = router;

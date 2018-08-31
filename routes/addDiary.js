const express = require('express');
const router = express.Router();
const firebase = require('firebase');

router.post('/', function(req,res,next){
  const edit = req.params.edit;
  const image = req.body.image;

  const foodName = req.body.foodName;
  const comments = req.body.comments;
  const taste = req.body.taste;
  const health = req.body.health;
  const mood = req.body.mood;
  const anxiety = req.body.anxiety;
  const date = req.body.date;
  const time = req.body.time;
  const userid = req.body.userid;

        var newObject = {
      "foodName":foodName,
      "image":image,
      "comments":comments,
      "date":date,
      "time":time,
      "taste":taste,
      "health":health,
      "mood":mood,
      "anxiety":anxiety
      };

      res.render('diary');
});

module.exports = router;

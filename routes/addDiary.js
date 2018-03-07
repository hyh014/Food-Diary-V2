var data = require("../data.json");
exports.addDiary = function(req,res){
    var edit = req.params.edit;
    var image = req.body.image;
    console.log(image);
    var foodName = req.body.foodName;
    var comments = req.body.comments;
    var taste = req.body.taste;
    var health = req.body.health;
    var mood = req.body.mood;
    var anxiety = req.body.anxiety;
    var date = req.body.date;
    var time = req.body.time;
    var userid = req.body.userid;
    console.log("going to for loop");
    console.log(userid);
    console.log(time);
    console.log(foodName);
    for(var i=0; i<data.info.length;i++)
    {
      if(userid==data.info[i].id)
      {
        console.log("checking for new image");
        if(image == ""){
          image = "/images/B1.jpg";
        }
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
        if(edit === 'e'){
          for(var j=0;j<data.info[i].datas.length;j++){
            if(time===data.info[i].datas[j].time && date===data.info[i].datas[j].date){
              data.info[i].datas[j] = newObject;
              console.log("redirecting to diary");
              return res.redirect('/diary/'+userid);
            }
          }
        }else{
          data.info[i].datas.unshift(newObject);
        }

        return res.redirect('/diary/'+userid);
      }
    }

}

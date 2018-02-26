var data = require("../data.json");
exports.addDiary = function(req,res){
    console.log("writing foodname!");
    var foodName = req.query.foodName;
    var comments = req.query.comments;
    var taste = req.query.taste;
    var health = req.query.health;
    var mood = req.query.mood;
    var anxiety = req.query.anxiety;
    var date = req.query.date;
    var time = req.query.time;
    var userid = req.query.userid;
    /*for(var i=0; i<data.info.length;i++)
    {
      if(userid==data.info[i].id)
      {*/
    
          var newObject = {
        "foodName":foodName,
        "image":"/images/B1.jpg",
        "comments":comments,
        "date":date,
        "time":time,
        "taste":taste,
        "health":health,
        "mood":mood,
        "anxiety":anxiety
        };
        console.log(data.info[data.info.length-1].datas);
        console.log(data.info[data.info.length-1]);
        data.info[data.info.length-1].datas.push(newObject);
        return res.redirect('/tab/diary')
     /* }
    }*/
  
      //  data.info.push(newID);
      //  console.log(data.info[1]);
     // return res.redirect('/tab/diary');
  
}

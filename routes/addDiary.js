var data = require("../data.json");
exports.addDiary = function(req,res){

    console.log("writing foodname!");
    var foodName = req.query.foodName;
    var comments = req.query.comments;
    var taste = req.query.taste.rateit('value');
    var health = window.document.getElementById('health').rateit('value');
    var mood = window.document.getElementById('mood').rateit('value');
    var anxiety = window.document.getElementById('anxiety').rateit('value');
    var date = window.document.getElementById('clock').value;
    console.log(foodName);
    console.log(comments);
    console.log(date);
    console.log(taste);
    console.log(health);
    console.log(mood);
    console.log(anxiety);
    console.log(date);
      //  data.info.push(newID);
      //  console.log(data.info[1]);
        return true;
  
}

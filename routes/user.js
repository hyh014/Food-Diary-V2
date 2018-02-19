var users = require("../data.json");
exports.userInfo = function(req,res){
  var userID = req.params.id;
  var data="";
  for(var i =0; i<users.info.length;i++)
  {
    if(userID == users.info[i].id){
      console.log(users.info[i]);
        data = users.info[i];
    }
  }
  res.json(data);

}

exports.info = function(req,res){
  res.json(users);
}
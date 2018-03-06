var users = require("../data.json");
exports.userInfo = function(req,res){
  var userID = req.params.id;
  var data="";
  for(var i =0; i<users.info.length;i++)
  {
    if(userID == users.info[i].id){
        data = users.info[i];
    }
  }
  res.json(data);
}

exports.checkLogin = function(req,res){
  var userid = req.params.name;
  var session= req.sessionID;
  for(var i=0; i<users.info.length;i++)
  {
    if(userid == users.info[i].id){
        users.info[i].session=session;
        return res.redirect('/index/'+userid);
    }
  }
  return false;
}

exports.checkRegister = function(req,res){
  
}

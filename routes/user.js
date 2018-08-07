let users = require("../data.json");
let bcrypt = require('bcryptjs');

exports.userInfo = function(req,res,next){
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
//https://www.npmjs.com/package/bcryptjs
exports.checkLogin = function(req,res,next){

  let user = req.body.email;
  let password = req.body.password;
  for(var i=0; i<users.info.length;i++)
  {
    bcrypt.compare(password,hash).then((res) =>{

    });

  }
  res.redirect('/');
/*  var userid = req.params.name;
  var session= req.sessionID;

  for(var i=0; i<users.info.length;i++)
  {
    if(userid == users.info[i].id){
        return res.redirect('/entry/'+userid);
    }
  }
  return false;*/
}

var users = require('../data.json');
exports.viewSetting = function(req,res,next){
  var userid = req.params.name;
  var session = req.sessionID;

  for(var i=0;i<users.info.length;i++){
    if(userid == users.info[i].id){

          res.render('setting',users.info[i]);

    }
  }



}

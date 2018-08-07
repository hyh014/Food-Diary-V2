var users = require('../data.json');
exports.viewDiary = function(req,res,next){
  var userid = req.params.name;
  var session = req.sessionID;
  var authentication = false;
  for(var i=0;i<users.info.length;i++){
    if(userid == users.info[i].id){

          res.render('diary',users.info[i]);

    }
  }

}

var users = require('../data.json');
exports.addEntry = function(req,res,next){
  var userid = req.params.name;
  var session = req.sessionID;
  var authentication = false;
  for(var i=0;i<users.info.length;i++){
    if(userid == users.info[i].id){

          users.info[i]["viewAlt"] = false;

          res.render('entry',users.info[i]);

    }
  }

}
exports.addEntryAlt = function(req,res,next){
  var userid = req.params.name;
  var session = req.sessionID;
  var authentication = false;
  for(var i=0;i<users.info.length;i++){
    if(userid == users.info[i].id){
          users.info[i]["viewAlt"]=true;

          res.render('entry',users.info[i]);

    }
  }

}

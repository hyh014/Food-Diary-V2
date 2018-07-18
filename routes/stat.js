var users = require('../data.json');
exports.getStat = function(req,res){
  var userid = req.params.name;
  var authentication = false;
  for(var i=0;i<users.info.length;i++){
    if(userid == users.info[i].id){

          res.render('stat',users.info[i]);//users.info[i]);

    }
  }




}

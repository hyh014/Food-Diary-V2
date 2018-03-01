var users = require('../data.json');
exports.remove = function(req,res){
  var userid = req.params.name;
  var month = req.params.month;
  var day = req.params.day;
  var year = req.params.year.substring(0,2);
  var time = req.params.year.substring(3);
  var date = month+"/"+day+"/"+year;
  for(var i=0;i<users.info.length;i++){
    if(userid == users.info[i].id){
      for(var j=0;j<users.info[i].datas.length;j++){
        if(users.info[i].datas[j].time==time && users.info[i].datas[j].date==date){
          users.info[i].datas.splice(j-1,1);
          return res.redirect('/diary/'+userid);
        }
      }
    }
  }
}

var data = require('../data.json');
/*
 * GET home page.
 */
exports.view = function(req, res){
    var userid = req.params.name;
    var session = req.sessionID;
    var authentication = false;
    console.log(session);
    for(var i=0;i<data.info.length;i++){
      if(userid == data.info[i].id){
        //if(data.info[i].session==session){
            authentication = true;
            res.render('index',data.info[i]);
      //  }
      }
    }
    if(authentication==false){
          res.status(404).send();
    }

  }

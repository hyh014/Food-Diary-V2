var data = require('../data.json');
/*
 * GET home page.
 */
exports.view = function(req,res,next){
    var userid = "tester1";
    for(var i=0;i<data.info.length;i++){
      if(userid == data.info[i].id){

            res.render('index',data.info[i]);

      }
    }


  }

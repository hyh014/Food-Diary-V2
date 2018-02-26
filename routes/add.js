var data = require("../data.json");
exports.addID = function(req,res){
  if(req.query.userid != undefined)
  {
  var userid = req.query.userid;
  var password = req.query.password;
  var email = req.query.email;
  var phone = req.query.phone;
    var newID = {
        'id':userid,
        'password':password,
        'email':email,
        'phone':phone,
        'camera':'N',
        'location':'N',
        'share':'N',
        'datas':[]
      };
        data.info.push(newID);
        return res.redirect('/index');
      }
}

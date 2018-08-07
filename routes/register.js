var data= require("../data.json");
exports.view = function(req,res,next){
	res.render('register',data);
}

var data= require("../data.json");
exports.view = function(req,res,next){
	var name=req.params.name;
	res.render(name,data);
}

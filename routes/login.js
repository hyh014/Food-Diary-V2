exports.view = function(req,res){
	console.log(req.sessionID);
	res.render('login');
}

/*
exports.view = function(req,res,next){

	console.log("Sdfsdfsd");



}
exports.example = function(req,res,next){
	console.log("example");

}

*/
var express = require('express');
var router = express.Router();

// GET request to /login

router.get('/', function(req, res, next) {
    // do something
		res.render('login');
});

// POST request to /login


module.exports = router;

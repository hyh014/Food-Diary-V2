let express = require('express');
let router = express.Router();

// GET request to /login

router.get('/', function(req, res, next) {
    // do something
		res.render('community');
});

// POST request to /login
router.post('/submit',function(req,res,next){
	let ref = firebase.database().ref('/messages');
	let message = req.body.messages;
	ref.push(message);
	res.redirect('/community');
});

module.exports = router;

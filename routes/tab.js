var data = require('../data.json');

exports.viewTab = function(req, res){
  var name = req.params.name;
  console.log(data.info.length-1);
  res.render(name, data.info[data.info.length-1]);
};

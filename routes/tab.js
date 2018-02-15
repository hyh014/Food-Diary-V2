var data = require('../data.json');
exports.viewTab = function(req, res){
  var name = req.params.name;
  res.render(name, data);
};

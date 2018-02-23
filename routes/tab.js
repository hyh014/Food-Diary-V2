var data = require('../data.json');
exports.viewTab = function(req, res){
  var name = req.params.name;
  console.log(data);
  res.render(name, data);
};

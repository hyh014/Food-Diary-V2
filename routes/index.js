var data = require('../data.json');/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index',data); /*{
    "tabs": [
      { "name": "Create New Entry",
        "id": "entry"},
      { "name": "Anxiety",
        "id": "anxiety"},
      { "name": "View Diary",
        "id": "diary"},
      {"name": "Show Statistics",
        "id": "stat"},
      {"name": "Settings",
        "id": "setting"},
      {"name": "Fun News",
        "id": "news"},
      { "name":"Community",
        "id":"community"},
      { "name":"Login",
        "id": "login"},
      {"name":"Help",
        "id":"help"}
    ]
  };*/
};

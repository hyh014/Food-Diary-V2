
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var login = require('./routes/login');
var index = require('./routes/index');
var photo = require('./routes/photo');
var register = require('./routes/register');
var user = require('./routes/user');
var add = require('./routes/add');
var remove = require('./routes/remove');
var addDiary = require('./routes/addDiary');

var diary = require('./routes/diary');
var setting = require('./routes/setting');
var entry = require('./routes/entry');
var stat = require('./routes/stat');
var news = require('./routes/news');
// Example route
// var user = require('./routes/user');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/',login.view);
// Example route
// app.get('/users', user.list);
/*app.get('/data.json',user.info);
*/
app.get('/user/:id',user.userInfo);
app.get('/add',add.addID);
app.post('/addDiary/:edit',addDiary.addDiary);
app.get('/remove/:name/:month/:day/:year',remove.remove);
app.get('/checkLogin/:name',user.checkLogin);

app.get('/index/:name', index.view);
app.get('/diary/:name',diary.viewDiary);
app.get('/setting/:name',setting.viewSetting);
app.get('/entry/:name',entry.addEntry);
app.get('/stat/:name',stat.getStat);
app.get('/news/:name',news.show);

app.get('/register', register.view);
app.get('/entry/photo/:name',photo.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

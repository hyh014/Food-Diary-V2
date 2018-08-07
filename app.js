
/**
 * Module dependencies.
 */

const express = require('express');
const http = require('http');
const path = require('path');
const handlebars = require('express3-handlebars');
const connect = require('connect');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const errorhandler = require('errorhandler');

const login = require('./routes/login');
const index = require('./routes/index');
const photo = require('./routes/photo');
const register = require('./routes/register');
const user = require('./routes/user');
const add = require('./routes/add');
const remove = require('./routes/remove');
const addDiary = require('./routes/addDiary');

const diary = require('./routes/diary');
const setting = require('./routes/setting');
const entry = require('./routes/entry');
const stat = require('./routes/stat');
const news = require('./routes/news');
// Example route
// const user = require('./routes/user');
const app = express();


const serviceAccount = require("./serviceAccount.json");


// all environments
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
//app.use(express.static(__dirname + '/views'));
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cookieParser('IxD secret key'));
const sess = {
  secret: 'secret',
  cookie: {secure:true}
}
app.use(session(sess));
app.use(express.Router());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler());
}

app.use('/',login.view);
// Example route
// app.get('/users', user.list);
/*app.get('/data.json',user.info);
*/
app.use('/user/:id',user.userInfo);
app.use('/add',add.addID);
app.use('/addDiary/:edit',addDiary.addDiary);
app.use('/remove/:name/:month/:day/:year',remove.remove);
app.use('/checkLogin',user.checkLogin);

app.use('/index/:name', index.view);
app.use('/diary/:name',diary.viewDiary);
app.use('/setting/:name',setting.viewSetting);
app.use('/entry/:name',entry.addEntry);
app.use('/stat/:name',stat.getStat);
app.use('/news/:name',news.show);

app.use('/register', register.view);
app.use('/photo/:name',photo.view);



http.createServer(app).listen(3000);

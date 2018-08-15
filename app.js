/*
/**
 * Module dependencies.
 */
require('dotenv').load();
const express = require('express');
const http = require('http');
const path = require('path');
const exphbs  = require('express-handlebars');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');


const login = require('./routes/login');
const register = require('./routes/register');
const user = require('./routes/user');
/*
const index = require('./routes/index');
const photo = require('./routes/photo');

const add = require('./routes/add');
const remove = require('./routes/remove');
const addDiary = require('./routes/addDiary');

const diary = require('./routes/diary');
const setting = require('./routes/setting');
const entry = require('./routes/entry');
const stat = require('./routes/stat');
*/
//const serviceAccounts = require('./serviceAccount.json');
// Example route
// const user = require('./routes/user');
const app = express();
const firebase = require('firebase');
/*firebase.initializeApp({
  serviceAccount: serviceAccounts,
  databaseURL: process.env.DATABASEURL
});*/
firebase.initializeApp({
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID
});

// all environments
app.set('views', __dirname + '/views/layouts');//path.join(__dirname, 'views'));
app.engine('hbs', exphbs({defaultLayout: false}));
app.set('view engine', 'hbs');
//app.use(express.static(__dirname + '/views'));
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cookieParser('IxD secret key'));
//app.use(express.static('public'));
const sess = {
  secret: 'secret',
  cookie: {secure:true}
}
app.use(session(sess));
//app.use(express.Router());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/',register);
app.use('/register', register);
app.post('/user/addUser',user);
app.post('/user/login',user);
app.use('/user/logout',user);
// Example route
// app.get('/users', user.list);
/*app.get('/data.json',user.info);
*/
/*app.use('/user/:id',user.userInfo);

app.use('/addDiary/:edit',addDiary.addDiary);
app.use('/remove/:name/:month/:day/:year',remove.remove);
app.use('/checkLogin',user. checkLogin);

app.use('/index/:name', index.view);
app.use('/diary/:name',diary.viewDiary);
app.use('/setting/:name',setting.viewSetting);
app.use('/entry/:name',entry.addEntry);
app.use('/stat/:name',stat.getStat);


app.use('/photo/:name',photo.view);
*/
http.createServer(app).listen(3000);

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
const entry = require('./routes/entry');
const diary = require('./routes/diary');
const community = require('./routes/community');
const addDiary = require('./routes/addDiary');
const remove = require('./routes/remove');

//GET RID OF ONCE COMPLETE
const index = require('./routes/index');
/*
const photo = require('./routes/photo');

const add = require('./routes/add');




const setting = require('./routes/setting');

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
app.use(bodyParser.urlencoded({ limit:'50mb', extended: true, parameterLimit:50000 }));
app.use(bodyParser.json({limit:'50mb'}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cookieParser('IxD secret key'));
app.set('trust proxy', 1);
//app.use(express.static('public'));
const sess = {
  secret: 'secret',
  cookie: {secure:true}
}
app.use(session(sess));
//app.use(express.Router());

app.use(express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, 'public')));


app.use('/',login);
app.use('/register', register);
app.use('/user',user);
app.use('/entry',entry);

app.use('/diary',diary);
//app.use('/community',community);
app.use('/addDiary/:edit',addDiary);
//app.use('/remove',remove);

//GET RID OF ONCE COMPLETE
app.use('/index',index);


//app.post('/user/login',user);
//app.use('/user/logout',user);


// Example route
// app.get('/users', user.list);
/*app.get('/data.json',user.info);
*/
/*app.use('/user/:id',user.userInfo);


app.use('/remove/:name/:month/:day/:year',remove.remove);
app.use('/checkLogin',user. checkLogin);



app.use('/setting/:name',setting.viewSetting);

app.use('/stat/:name',stat.getStat);


app.use('/photo/:name',photo.view);
*/
http.createServer(app).listen(3000);

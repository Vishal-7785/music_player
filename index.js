const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 7000;
const db = require('./config/mongoose');
// using session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);

app.use(express.urlencoded());
app.use(cookieParser());
// Set up view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('assets'))

app.use('/uploads',express.static(__dirname + '/uploads'));
// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'music-player',
    // we have to change this secret key before deployment
    secret: 'something',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100)
    },store: new MongoStore({
        mongooseConnection: db,
        autoRemove: 'disabled'
    },function(err){
        console.log('error connecting to mongostore');
    }
    )

}));
// Here we are telling the app to use passport
app.use(passport.initialize());

app.use(passport.session());
// using express router
app.use('/',require('./routes/index'));
app.listen(port,function(err){
    if(err){
        console.log(`Error in ruuning the server : ${err}`);

    }
    console.log(`Server is running on port: ${port}`);
    
});
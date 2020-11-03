const passport = require('passport');
const User = require('../models/users');
const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy({
    usernameField: 'email'
},function(email,password,done){
        // Find a user and establish the identity
    User.findOne({email: email},function(err,user){
        if(err){
            console.log('Error in finding user -->Passport');
            return done(err);
        }
        if(!user || user.password != password){
            console.log('Invalid Username/Password');
            return done(null,false);
        }
        return done(null,user);
    });
}
));
// Serializing the user to decide which key os to be kept in the session cookie
passport.serializeUser(function(user,done){
    done(null,user.id);
});
// Deserializing the user to fetch information about user from that cookie as you have only put id in the cookie
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in fetching user -->Passport');
            return done(err);
        }
        return done(null,user);
    });
});
module.exports = passport;
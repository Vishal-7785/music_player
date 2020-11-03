const User = require('../models/users');
module.exports.signup = function(req,res){
    return res.render('sign-up',{
        title: "My jxbhjb"
    });
}
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in creating the user',err);
                    return res.redirect('back');
                }
                return res.redirect('/');
            });
        }
        else{
            return res.redirect('back');
        }
    });
}
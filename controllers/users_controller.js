const multer = require('multer');
const User = require('../models/users');
const fs = require('fs');
const path = require('path');
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
// Signing in and created a session
module.exports.createSession = function(req,res){
    return res.redirect('/home');
}
module.exports.destroySession = function(req,res){
    console.log('hvv');
    req.logout();
    return res.redirect('/');
}
module.exports.update = function(req,res){
    return res.render('update');
}
module.exports.Update = async function(req,res){
    try{
        let user = await User.findById(req.user.id);
        User.uploadedAvatar(req,res,function(err){
            if(err){
                console.log('**** Multer Error',err);
                return;
            }
            user.name = req.body.name;
            user.email = req.body.email;
            if(req.file){
                if(user.avatar){
                    fs.unlinkSync(path.join(__dirnmae,'..',user.avatar));
                }
                    // This is saving the path of the uploaded file in to avatar field in the user in the uploads
                    user.avatar = User.avatarPath + '/' + req.file.filename;
            }
            user.save();
            return res.redirect('back');
        });

    }catch(err){
        return res.redirect('back');
    }
    

}
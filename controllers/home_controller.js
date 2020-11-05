const User = require('../models/users');
module.exports.home = function(req,res){
    if(req.user){
    User.findById(req.user._id,function(err,user){
        if(err){
            console.log('Error in loading users',err);
            return;
        }
        return res.render('home',{
            title: "Music player",
            user:user
             });

    });
}

  
}
module.exports.begin = function(req,res){
    return res.render('main',{
        title: "Main Page"
    })
}
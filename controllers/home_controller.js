module.exports.home = function(req,res){
    return res.render('home',{
        title: "Music player"
    });
}
module.exports.begin = function(req,res){
    return res.render('main',{
        title: "Main Page"
    })
}

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.content = function(req , res){
    var user={
        User:req.params.user,
        UserChineseName:"红来",
        money:100
    };

    res.render("content",user);
};
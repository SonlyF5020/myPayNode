
exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.content = function(req , res){
    var user={
        User:"honglai",
        UserChineseName:"红来",
        money:100
    };

    res.render("content",user);
};
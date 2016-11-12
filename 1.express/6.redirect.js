var express = require('express');
var app = express();
app.use(function(req,res,next){
    console.log(req.path);
    next();
});
app.get('/',function(req,res){
    //重定向 告诉客户端重新向新的URL地址发起请求
    res.redirect('/user');
});
app.get('/user',function(req,res){
    res.send('用户');
});
app.listen(9090);
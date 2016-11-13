var express = require('express');
var app = express();
var users = [];
//GET请求 reg的时候返回空白的注册表单
// 可以通过query是否有值来判断是否是提交
app.get('/reg',function(req,res){
  var username = req.query.username;//得到用户名
    if(username){//如果有用户名
        var password = req.query.password;// 表示是填写后提交过来的表单
        users.push({username,password});//推送到users里
        res.redirect('/login');//
    }else{
        res.render('reg',{});
    }
});
//GET请求 /login的时候返回空白的登陆表单
app.get('/login',function(){

});
//GET请求 /welcome的时候返回空白的欢迎表单
app.get('/welcome',function(){

});
app.listen(9090);
var express = require('express');
var app = express();
//GET请求 reg的时候返回空白的注册表单
// 可以通过query是否有值来判断是否是提交
app.get('/reg',function(){

});
//GET请求 /login的时候返回空白的登陆表单
app.get('/login',function(){

});
//GET请求 /welcome的时候返回空白的欢迎表单
app.get('/welcome',function(){

});
app.listen(9090);
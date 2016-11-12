var express = require('express');

// app是一个请求监听的回调函数，每当请求到来的时候会执行此函数
var app = express();
//当客户端通过GET的请求方式，访问/路径的时候
// get post delete put head patch
app.get('/',function(req,res){
    res.end('首页');
});

app.get('/login',function(req,res){
    res.end('get 登陆');
})

app.post('/login',function(req,res){
    res.end('post 登陆');
});;

app.get('/user',function(req,res){
    res.end('用户主页');
});
//在当前的本机服务器上监听9090端口
app.listen(9090);







/*var server = require('http').createServer(app);
server.listen(9090);*/

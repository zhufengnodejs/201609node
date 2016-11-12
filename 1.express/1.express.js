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
//定制404提示，当请求的路径没有路由能处理的时候，返回你请求的页面不存在
// all 匹配所有的方法 * 匹配所有的路径
app.all('*',function(req,res){
    res.end('你请求的页面不存在');
});

//在当前的本机服务器上监听9090端口
app.listen(9090);







/*var server = require('http').createServer(app);
server.listen(9090);*/

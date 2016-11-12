var express = require('express');
var app = express();
/**
 * 1. 中间件可以给 req res 赋值
 * 2. 中间件里可以结束响应
 */

//中央
app.use(function(qqq,rrr,ccc){
   console.log(qqq.url);
    qqq.money = 100;
    ccc();
});
//省里
app.use(function(req,res,next){
    req.money -= 30;
    next();
});
//县里
app.use(function(req,res,next){
    console.log('县里');
    req.money -= 30;
    //如果next没有参数，会继续执行后续的路由和正常中间件，如果传了参数，表示出错了，会掉过正常的路由和中间件，交由错误处理中间件来处理
    next('错误: 失火了');
});
//村里
app.use(function(req,res,next){
    console.log('村里');
    req.money -= 40;
    res.end();
    //next();
});
app.get('/money',function(req,res){
    console.log('农民收到'+req.money);
    res.end();
});
//错误处理中间件 有四个参数
app.use(function(err,req,res,next){
    console.log(1,err);
    res.end('error');
    next();
});

app.listen(9090);
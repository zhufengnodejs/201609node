var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
// app.use(function(req,res,next){
//     res.cookie = function(key,value){
//         res.setHeader('Set-Cookie',`${key}=${value}`);
//     }
//     next();
// });
app.get('/write',function(req,res){
    //写入cookie
    //设置域名 设置域名之后，只有向这些域名发起请求是才会发送cookie
   //res.cookie('name','zfpx',{domain:'zf1.cn'});
    //Set-Cookie:name=zfpx; Path=/read1
    //设置了path之后，只有向这个 path发起请求才会发送cookie
   //res.cookie('name','zfpx',{path:'/read1'});
   //res.cookie('age','8',{path:'/read1'});
  //指定失效的绝对事件和相对时间
   ///res.cookie('name','zfpx',{expires:new Date(Date.now()+10*1000)});
   res.cookie('name','zfpx',{maxAge:10*1000});
    res.cookie('age','8',{maxAge:10*1000});
   res.send('write ok');
});

app.get('/read1',function(req,res){
    res.send(req.cookies);
});
app.get('/read2',function(req,res){
    // req.headers.cookie +querystring => req.cookies
    res.send(req.cookies);
});
app.listen(9090);
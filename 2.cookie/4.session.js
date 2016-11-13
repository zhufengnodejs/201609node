var express = require('express');
/**
 * 使用session中间件
 *
 * @type {session}
 */
var session = require('express-session');
var app = express();
//使用了session中间件之后，req.session就是此客户端在服务器端对应的数据对象
app.use(session({
    resave:true,//每次客户端访问服务器的时候都重新保存session对象
    secret:'zfpx',//秘密 加密
    saveUninitialized:true//保存未初始化的session
}));

app.get('/visit',function(req,res){
   var visit = req.session.visit?req.session.visit+1:1;
   req.session.visit = visit;
   res.send(`顾客，这是你的第${visit}次访问`);
});

app.listen(9090);
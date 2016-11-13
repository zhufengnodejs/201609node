var express = require('express');
var path = require('path');
var app = express();
//设置模板引擎
app.set('view engine','html');
//resolve从当前路径出发，得到一个绝对路径
console.log(path.resolve('views'),__dirname);
app.set('views',path.resolve('views'));
app.engine('.html',require('ejs').__express);
app.use(function(req,res,next){
    res.locals.title = '珠峰培训';
    next();
});
var users = [];
/*app.use(function(req,res,next){
    //重定向要求客户端重新向新的地址发起请求
    res.redirect = function(path){
        res.statusCode = 302;
        //在响应头重指定新的地址
        res.setHeader('Location',path);
        res.end();
    }
    next();
});*/
//当客户端通过GET /reg发起请求的时候
app.get('/reg',function(req,res){
    var username = req.query.username;
    if(username){ //表示提交表单
        var password = req.query.password;
        //把用户名和密码封装成对象保存到数组中
        users.push({username,password});
        //redirect会触发URL地址的改变
        res.redirect('/login');
        //res.render('login');render则不会
    }else{//获取空白表单
          //模板的路径 views的父目录+reg+view engine后缀
        //render方法自带end 获取模板 渲染模板为html 发送给客户端并结束响应 end
        res.render('reg',{title:'用户注册'});
    }
});
app.get('/login',function(req,res){
    var username = req.query.username;
    if(username){
        var password = req.query.password;
        var user = users.find(function(user){
            return user.username == username && user.password == password;
        });
        if(user){
            res.redirect('/welcome');
        }else{
            res.redirect('back');
        }
    }else{
        //模板的路径 views的父目录+reg+view engine后缀
        res.render('login',{title:'用户登陆'});
    }

});
app.get('/welcome',function(req,res){
    //模板的路径 views的父目录+reg+view engine后缀
    res.render('welcome',{});
});
app.listen(9090);

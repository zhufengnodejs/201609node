var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
/**
 * 对服务器发起请求的时候 ../ ./ / 都一样 /node_modules/bootstrap/dist/css/bootstrap.css
 *
 */
//设置模板引擎
app.set('view engine','html');
//resolve从当前路径出发，得到一个绝对路径
console.log(path.resolve('views'),__dirname);
app.set('views',path.resolve('views'));
app.engine('.html',require('ejs').__express);
var fs = require('fs');
app.use(function(req,res,next){
    res.locals.title = '珠峰培训';
    next();
});
/**
 * 静态文件中间件
 * 当客户端访问服务器一个静态文件的时候，服务器返回这个静态文件
 */
//静态文件根目录
// 1.取出请求路径 2. 到根目录下找找有没有这个文件
// 3.如果找到的话返回给客户端 4.没找到 next的
/*function static(staticRootDir){
   //staticRootDir = F:\201609node\1.express\public
   //req.path=/bootstrap/dist/css/bootstrap.css
   //filename= F:\201609node\1.express\public\bootstrap\dist\css\bootstrap.css
   return function(req,res,next){
       //先得到静态文件绝对路径
       var filename = path.join(staticRootDir,req.path);
       //判断文件是否存在
       fs.exists(filename,function(exists){
         if(exists){//如果存在，读出来发送给客户端
            fs.createReadStream(filename).pipe(res);
         }else{//如果不存在，继续执行
             next();
         }
       });
   }
}*/
//参数就是public的绝对路径
app.use(express.static(path.resolve('public')));
//使用请求体中间件，把请求体字符串转成对象挂载到 req.body 上
app.use(bodyParser.urlencoded({extended:true}));
var querystring  = require('querystring');
app.use(function(req,res,next){
   var result  =""
   req.setEncoding('utf8');//设置编码之后 data就成为了字符串
   req.on('data',function(data){
       result+=data;
   })
    // username=zfpx&password=8
   req.on('end',function(){
        req.body = querystring.parse(result);
         next();
   })
});
/*app.get('/node_modules/bootstrap/dist/css/bootstrap.css',function(req,res){
    //path must be absolute or specify root to res.sendFile
    //res.sendFile('./public/bootstrap/dist/css/bootstrap.css',{root:__dirname});
    res.sendFile(path.resolve('public/bootstrap/dist/css/bootstrap.css'));
});*/
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
    res.render('reg',{title:'用户注册'});
/*
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
        /!**
         * 如果不传回调函数 先渲染模板 然后直接返回给客户端并结束响应
         * 如果传回调函数 只管渲染模板，把渲染后的HTML字符串传给回调函数
         *!/
        res.render('reg',{title:'用户注册'});
    }*/
});
//客户端在发送 post请求的时候，会把输入的表单转成查询字符串，并且放在请求体里发送给服务器
app.post('/reg',function(req,res){
    var user = req.body;
    console.log(user);
    //把用户名和密码封装成对象保存到数组中
    users.push(user);
    //redirect会触发URL地址的改变
    res.redirect('/login');
    //res.render('login');render则不会
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

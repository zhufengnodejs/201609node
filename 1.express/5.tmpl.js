var users =[{id:1,name:'张三'},{id:2,name:'李四'}];
var express = require('express');
var path = require('path');
var app = express();
//设置模板引擎 用来添加文件后缀的
app.set('view engine','html');
//设置模板存放目录 指定一个模板的绝对路径
app.set('views',path.join(__dirname,'views'));
//设置对于html类型的模板使用ejs来进行渲染
app.engine('.html',require('ejs').__express);
// http://localhost:9090/users/1
/**
 * 1. 定义路由
 * 2. 取得ID
 * 3. 取得ID对应的user对象
 * 4. 渲染模板
 */
app.get('/users/:id',function(req,res){
    var id = req.params.id;
    var user = users.find(function(user){
        return user.id == id;
    });
    //用数据渲染模板
    // 1.模板的相对路径
    // 2参数是渲染模板数据对象 模板里的变量要从数据对象的属性中取值
    res.render('user',user);
})
app.listen(9090);
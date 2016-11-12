/**
 * 参数的处理
 * 请求行 method url(pathname+query)
 * 请求头 headers
 * 请求体 body
 */
var express = require('express');
var url = require('url');
var app = express();
app.get('/',function(req,res){
    console.log('method=',req.method);
    var urlObj = url.parse(req.url,true);
    console.log('pathname=',urlObj.pathname);
    console.log('query=',urlObj.query);
    res.end()
});
//获取某个用户的信息  路径可以写正则
/*app.get(/^\/users\/(\w+)$/,function(req,res){
    res.end('1');
});*/
//获取某个用户的信息 :id是占位符 匹配一个字符串 /users/1
app.get('/users/:id',function(req,res){
    //params是express帮我们添加的对象属性，属性名就是占位符，值是实际请求的字符串占位符对应的部分
    res.end('id='+req.params.id);
});
app.listen(9090);

/**
 * 参数的处理
 * 请求行 method url(pathname+query)
 * 请求头 headers
 * 请求体 body
 */
var express = require('express');
var http  = require('http');
//console.log(http.STATUS_CODES);
var url = require('url');
var app = express();
// app.use(function (req,res,next) {
//     var urlObj = url.parse(req.url,true);
//     req.path = urlObj.pathname;
//     req.query = urlObj.query;
//     next();
// });
/**
 * typeof number object
 * Object.prototype.toString.call Array Object
 * obj.constructor
 * instanceOf
 */
var util = require('util');
/**
app.use(function(req,res,next){
    res.send = function(params){
        var type = typeof params;//获得参数类型
        switch (type){//判断参数类型
            case 'object'://如果是对象
                res.setHeader('Content-Type','application/json; charset=utf-8');
                res.end(JSON.stringify(params));
                break;
            case 'string':
                res.setHeader('Content-Type','text/html; charset=utf-8');
                res.end(params);
                break;
            case 'number':
                res.setHeader('Content-Type','text/plain; charset=utf-8');
                res.statusCode = params;
                res.end(http.STATUS_CODES[params]);
                break;
            default:
                res.end(util.inspect(params));
        }
    }
    next();
});
 **/
app.get('/',function(req,res){
   /* console.log('method=',req.method);
    var urlObj = url.parse(req.url,true);
    console.log('pathname=',urlObj.pathname);
    console.log('query=',urlObj.query);*/
    console.log(req.path);
    console.log(req.query);
    //First argument must be a string or Buffer
    /**
     * 参数是对象 Content-Type:application/json; charset=utf-8
     * 参数是字符串 Content-Type:text/html; charset=utf-8
     * 参数是数字 把数字当成了状态码 响应体是对应的描述短语 Content-Type:text/plain; charset=utf-8
     */
   // res.status(404).send('页面不存在');
    res.sendStatus(404);
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

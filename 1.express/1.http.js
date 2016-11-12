var http  = require('http');
var url = require('url');
/**
 *  / 首页
 *  /login 登陆
 *  /user 用户主页
 **/
http.createServer(function(req,res){
    //取得了客户端的请求路径
    var pathname = url.parse(req.url).pathname;// url = 路径名+查询字符串  /user?username=zfpx&age=8
    //服务器告诉客户端我的类型和编码
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    if(pathname == '/'){
        res.end('首页');
    }else if(pathname == '/login'){
        res.end('登陆');
    }else if(pathname == '/user'){
        res.end('用户主页');
    }else{
        res.end(`Cannot ${req.method} ${pathname}`);
    }
}).listen(9090);
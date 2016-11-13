var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/write'){
        //通过响应头写入cookie Cookie:name=zfpx; age=8
      //res.setHeader('Set-Cookie',['name=zfpx','age=9']);
        res.setHeader('Set-Cookie','name=zfpx; age=9')
      res.end();
    }else if(pathname == '/read'){
        //Cookie:name=zfpx; age=8
        var cookie = req.headers.cookie;
        var cookies = querystring.parse(cookie,'; ');
        //console.log(cookie);//name=zfpx; age=8
        res.end(util.inspect(cookies));
    }else{
        res.end('404');
    }
}).listen(9090);
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
/*app.use(function (req, res, next) {
    res.cookie = cookie(name, val, options)
    {
        var opt = options || {};
        var value = encodeURIComponent(val);
        var pairs = [name + '=' + value];
        if (null != opt.maxAge) {
            var maxAge = opt.maxAge - 0;
            if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
            pairs.push('Max-Age=' + Math.floor(maxAge));
        }
        if (opt.domain) {
            pairs.push('Domain=' + opt.domain);
        }
        if (opt.path) {
            pairs.push('Path=' + opt.path);
        }
        if (opt.expires) pairs.push('Expires=' + opt.expires.toUTCString());
        if (opt.httpOnly) pairs.push('HttpOnly');
        if (opt.secure) pairs.push('Secure');

        return pairs.join('; ');
    }
    next();
});*/
app.get('/write', function (req, res) {
    //写入cookie
    //设置域名 设置域名之后，只有向这些域名发起请求是才会发送cookie
    //res.cookie('name','zfpx',{domain:'zf1.cn'});
    //Set-Cookie:name=zfpx; Path=/read1
    //设置了path之后，只有向这个 path发起请求才会发送cookie
    //res.cookie('name','zfpx',{path:'/read1'});
    //res.cookie('age','8',{path:'/read1'});
    //指定失效的绝对事件和相对时间
    ///res.cookie('name','zfpx',{expires:new Date(Date.now()+10*1000)});
    res.cookie('name', 'zfpx', {maxAge: 10 * 1000});
    res.cookie('age', '8', {maxAge: 10 * 1000});
    res.send('write ok');
});

app.get('/read1', function (req, res) {
    res.send(req.cookies);
});
app.get('/read2', function (req, res) {
    // req.headers.cookie +querystring => req.cookies
    res.send(req.cookies);
});
app.listen(9090);
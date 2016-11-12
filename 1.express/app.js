var app = function(req,res){
  
}
//存放中间件函数的数组
app.routes = [];
app.use = function(fn){
    app.routes.push(fn);
}
app.use(function(req,res){
    console.log(1);
});
app.use(function(req,res){
    console.log(2);
    res.end('ok');
});

var http = require('http');
var server = http.createServer(app);
server.listen(9090);
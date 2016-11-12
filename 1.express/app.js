var app = function(req,res){

}
app.use(function(req,res,next){
    console.log(1);
    next();
});
app.use(function(req,res,next){
    console.log(2);
    res.end('ok');
});

var http = require('http');
var server = http.createServer(app);
server.listen(9090);
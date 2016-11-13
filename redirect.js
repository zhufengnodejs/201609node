var express = require('express');
var app = express();
app.get('/1',function(req,res){
    res.statusCode = 301;
    res.setHeader('Location','/3');
    res.end();
});
app.get('/2',function(req,res){
    res.statusCode = 302;
    res.setHeader('Location','/3');
    res.end();
});
app.get('/3',function(req,res){
    res.send('3');
});
app.listen(9090);
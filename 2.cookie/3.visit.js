var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
app.get('/visit',function(req,res){
   var cookies = req.cookies;
   var visit = 1;
   if(cookies && cookies.visit){
       visit = parseInt(cookies.visit) + 1;
   }
   res.cookie('visit',visit);
   res.send(`这是你的第${visit}次访问`);
});
app.listen(9090);
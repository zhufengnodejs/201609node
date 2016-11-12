// http://localhost:9090/users/1
var http = require('http');
var url = require('url');
var fs = require('fs');
var users =[{id:1,name:'张三'},{id:2,name:'李四'}];
/**
 * 1.得到1
 * 2.得到1对应的对象
 * 3.读出html,替换其中的ID和name
 * 4.发送给客户端
 */
http.createServer(function(req,res){
   var urlObj = url.parse(req.url);
   var pathname = urlObj.pathname;// /users/1
   var result = pathname.match(/\/users\/(\d+)/);
   console.log(result);//[ '/users/1', '1', index: 0, input: '/users/1' ]
   var id = result[1];//得到ID属性
    //在数组中查找ID等于url中ID的元素
   var user = users.find(function(user){
        return user.id == id;
   });
   fs.readFile('./user.html','utf8',function(err,data){
       data = data.replace('<%=id%>',user.id).replace('<%=name%>',user.name);
       res.end(data);
   })
}).listen(9090);
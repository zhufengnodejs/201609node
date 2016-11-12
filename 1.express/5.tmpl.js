var users =[{id:1,name:'张三'},{id:2,name:'李四'}];
var express = require('express');
var app = express();
// http://localhost:9090/users/1
/**
 * 1. 定义路由
 * 2. 取得ID
 * 3. 取得ID对应的user对象
 */
app.listen(9090);
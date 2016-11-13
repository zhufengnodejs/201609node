var locals = {name:'zfpx',age:5};
var data = {age:8};

/*for(var attr in data){
    if(data.hasOwnProperty(attr)){
        locals[attr] = data[attr];
    }
}*/
Object.assign(locals,data)
console.log(locals);

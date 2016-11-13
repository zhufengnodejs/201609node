var document = {
    cookies:[],
    set cookie(cookie){//name=zfpx2
        document.cookies = document.cookies.filter(function(item){//name=zfpx
            return item.split('=')[0]  != cookie.split('=')[0];
        });
        document.cookies.push(cookie);
    },
    get cookie(){
        return document.cookies.join('; ');
    }
}
document.cookie = "name=zfpx";
document.cookie = "age=6";
document.cookie = "name=zfpx2";
console.log(document.cookie);
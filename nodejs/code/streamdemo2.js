var fs = require("fs");
var data = "hello world 你好，世界";

var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data,'UTF8');

writeStream.end();

writeStream.on('finish',function(){
    console.log('写入完成');
});

writeStream.on('error',function(err){
    console.log(err.stack);
});

console.log('程序执行完毕');
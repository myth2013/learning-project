# 安装
## node.js
简单的说 Node.js 就是运行在服务端的 JavaScript。

Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。

Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。

安装完成后，可以通过`node -v`或者`node --version`查看node.js版本号。

## npm
NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
+ 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
+ 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
+ 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

可以通过`npm -v`或者`npm --version`查看npm版本号;

## nrm的安装和使用
nrm(npm registry manager )是npm的镜像源管理工具，有时候国外资源太慢，那么我们可以用这个来切换镜像源。

首先全局安装 nrm：
`npm install -g nrm`

安装完后就可以立即使用了，我们来列出可用的源：
`nrm ls`

会发现列出了下面几个源：
```
npm ---- https://registry.npmjs.org/
cnpm --- http://r.cnpmjs.org/
taobao - https://registry.npm.taobao.org/
nj ----- https://registry.nodejitsu.com/
rednpm - http://registry.mirror.cqupt.edu.cn/
npmMirror  https://skimdb.npmjs.com/registry/
edunpm - http://registry.enpmjs.org/
```
当然这里我们选择国内淘宝的源：
`nrm use taobao`

## gnvm的安装和使用
gnvm是windows版nvm（npm version manager）。下载后，直接放到nodejs的安装目录。

+ 功能
```
config       配置 .gnvmrc
use          使用某个本地已存在的 Node.js 版本
ls           输出 [local] [remote] Node.js 版本
install      下载/安装任意已知版本的 Node.js
uninstall    删除任意本地已存在的 Node.js
update       下载 Node.js latest 版本并更新到 .gnvmrc 里面
npm          NPM 下载/安装/删除 管理
session      临时设定本地某个已存在的 Node.js 为 全局 Node.js
search       查询并且输出符合查询条件的 Node.js 版本详细信息的列表
node-version 输出 [global] [latest] Node.js 版本
reg          设定 .gnvmrc 属性值 [noderoot] 为 环境变量 [NODE_HOME]，并加入到 Path 中
version      查看 gnvm 版本
```

+ 更换更快的库 registry

gnvm.exe 内建了 DEFAULT 和 TAOBAO 两个库。

`gnvm config registry TAOBAO`

+ 安装 多个 Node.js

安装任意版本的 Node.js 包括： 自动匹配 latest / io.js version 以及 选择 32 / 64 位，例如 x.xx.xx-x64 。

`gnvm install latest 1.0.0-x86 1.0.0-x64 5.0.0`

+ 卸载本地任意 Node.js 版本

`gnvm uninstall latest 1.0.0-x86 1.0.0-x64 5.0.0`

+ 切换本地存在的任意版本 Node.js

`gnvm use 5.10.1`

+ 列出本地已存在的全部 Node.js 版本

`gnvm ls`

+ 更新本地的 Node.js latest 版本

`gnvm update latest`

+ 安装 NPM

gnvm 支持安装 npm, 例如：下载最新版的 npm version ，使用 gnvm npm latest 。

`gnvm npm latest`

+ 查询 Node.js 版本

可以使用关键字 \* 或者 正则表达式 /regxp/，例如： gnvm search 5.\*.\* 或者 gnvm search /.10./ 。

+ 例子
1. 不存在 Node.js 环境时，下载 Node.js latest version 并设置为全局 Node.js 。
```
c:\> gnvm config registry TAOBAO
Set success, registry new value is http://npm.taobao.org/mirrors/node/
c:\> gnvm install latest -g
Notice: local  latest version is unknown.
Notice: remote latest version is 5.10.1.
Start download Node.js versions [5.10.1].
5.10.1: 100% [==================================================>] 13s
End download.
Set success, latestversion new value is 5.10.1
Set success, global Node.js version is 5.10.1.
```
2. 升级本地 Node.js latest 版本。
```
c:\> gnvm config registry TAOBAO
Set success, registry new value is http://npm.taobao.org/mirrors/node/
c:\> gnvm update latest
Notice: local  Node.js latest version is 5.9.1.
Notice: remote Node.js latest version is 5.10.1 from http://npm.taobao.org/mirrors/node/.
Waring: remote latest version 5.10.1 > local latest version 5.9.1.
Waring: 5.10.1 folder exist.
Update success, Node.js latest version is 5.10.1.
```
3. 查看本地 Node.js global and latest 版本。
```
c:\> gnvm node-version
Node.js latest version is 5.10.1.
Node.js global version is 5.10.1.
```
4. 验证 .gnvmrc registry 正确性。
```
c:\> gnvm config registry test
Notice: gnvm config registry http://npm.taobao.org/mirrors/node/ valid ................... ok.
Notice: gnvm config registry http://npm.taobao.org/mirrors/node/index.json valid ......... ok.
```
5. 本地不存在 NPM 时，安装当前 Node.js 版本对应的 NPM 版本。
```
c:\ gnvm npm global
Waring: current path C:\xxx\xxx\nodejs\ not exist npm.
Notice: local    npm version is unknown
Notice: remote   npm version is 3.8.3
Notice: download 3.8.3 version [Y/n]? y
Start download new npm version v3.8.3.zip
v3.8.3.zip: 100% [==================================================>] 4s
Start unzip and install v3.8.3.zip zip file, please wait.
Set success, current npm version is 3.8.3.
c:\> npm -v
3.8.7
```
6. 安装 NPM latest 版本。
```
c:\ gnvm npm latest
Notice: local    npm version is 3.7.3
Notice: remote   npm version is 3.8.7
Notice: download 3.8.7 version [Y/n]? y
Start download new npm version v3.8.7.zip
v3.8.7.zip: 100% [==================================================>] 3s
Start unzip and install v3.8.7.zip zip file, please wait.
Set success, current npm version is 3.8.7.
c:\> npm -v
3.8.7
```

# 创建应用程序

## HelloWorld

+ 脚本模式
```
console.log("Hello World!");
```
保存该文件，文件名为helloworld.js(注意：文件编码为utf-8，否则中文乱码),并通过node命令来执行：

`node helloworld.js`

+ 交互模式
打开终端，键入node进入命令交互模式，可以输入一条代码语句后立即执行并显示结果，例如：
```
>node
>console.log("Hello World!");
```

## 创建Node.js应用
使用 Node.js 时，我们不仅仅 在实现一个应用，同时还实现了整个 HTTP 服务器。事实上，我们的 Web 应用以及对应的 Web 服务器基本上是一样的。

Node.js 应用是由三个部分组成：
1. 引入 required 模块：我们可以使用 require 指令来载入 Node.js 模块。
2. 创建服务器：服务器可以监听客户端的请求，类似于 Apache 、Nginx 等 HTTP 服务器。
3. 接收请求与响应请求：服务器很容易创建，客户端可以使用浏览器或终端发送 HTTP 请求，服务器接收请求后返回响应数据。

### 1.引入required模块
我们使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http，实例如下:

`var http = require("http");`

### 2.创建服务器
接下来我们使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。 函数通过 request, response 参数来接收和响应数据。

实例如下，在你项目的根目录下创建一个叫 server.js 的文件，并写入以下代码：
```
var http = require("http");

http.createServer(function(request,response){
    // 发送http头部
    // http状态值：200
    // 内容类型：text/plain,设置utf-8防止中文乱码
    response.writeHead(200,{
        'Content-Type':'text/plain;charset=utf-8'
    });
    
    // 发送响应数据
    response.end("Hello World\n你好 世界");
    
}).listen(8888);

// 终端打印信息
console.log("Server running at http://127.0.0.1:8888/");
```
以上代码我们完成了一个可以工作的 HTTP 服务器。

使用 node 命令执行以上的代码：`node server.js`

接下来，打开浏览器访问 http://127.0.0.1:8888/

# Node.js 回调函数

## 阻塞代码
```
var fs = require("fs");

var data = fs.readFileSync("input.txt");

console.log(data.toString());

console.log("程序执行结束");
```

## 非阻塞代码
```
var fs = require("fs");

fs.readFile("input.txt",function(err,data){
    if(err)
        return console.error(err);
    
    console.log(data.toString());
});
console.log("程序执行结束");
```

# Node.js 事件循环
Node.js 是单进程单线程应用程序，但是因为 V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发，所以性能非常高。

Node.js 几乎每一个 API 都是支持回调函数的。

Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。

Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

## 事件驱动程序

Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。

当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。

这个模型非常高效可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作。（这也被称之为非阻塞式IO或者事件驱动IO）

在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。
```
// eventsdemo.js
// 引入events模块
var events = require('events');
// 创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected(){
    console.log('连接成功。');
    // 触发data_received事件
    eventEmitter.emit('data_received');
}

// 绑定connection事件处理程序
eventEmitter.on('connection',connectHandler);

// 使用匿名函数绑定data_received事件
eventEmitter.on('data_received',function(){
    console.log('数据接收成功。');
});

// 触发connection事件
eventEmitter.emit('connection');

console.log('程序执行完毕。');
```

# Node.js EventEmitter
Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。

Node.js 里面的许多对象都会分发事件：一个 net.Server 对象会在每次有新连接时触发一个事件， 一个 fs.readStream 对象会在文件被打开的时候触发一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。

## EventEmitter类
events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。

你可以通过require("events");来访问该模块。
```

// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```
EventEmitter 对象如果在实例化时发生错误，会触发 error 事件。当添加新的监听器时，newListener 事件会触发，当监听器被移除时，removeListener 事件被触发。

下面我们用一个简单的例子说明 EventEmitter 的用法：
```
// eventsdemo2.js
var eventEmitter = require('events').EventEmitter;

var event = new eventEmitter();

event.on('some_event',function(){
    console.log('some_event事件触发');
});

setTimeout(function(){
    event.emit('some_event');
},1000);
```
运行这段代码，1 秒后控制台输出了 'some_event 事件触发'。其原理是 event 对象注册了事件 some_event 的一个监听器，然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event，此时会调用some_event 的监听器。

EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。

当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。

让我们以下面的例子解释这个过程：
```
// eventsdemo3.js
var eventEmitter = require('events').EventEmitter;

var event = new eventEmitter();

event.on('someEvent',function(arg1,arg2){
    console.log('listener1',arg1,arg2);
});

event.on('someEvent',function(arg1,arg2){
    console.log('listener2',arg1,arg2);
});

event.emit('someEvent','arg1 参数','arg2 参数');
```
运行结果：
```
listener1 arg1 参数 arg2 参数
listener2 arg1 参数 arg2 参数
```
以上例子中，emitter 为事件 someEvent 注册了两个事件监听器，然后触发了 someEvent 事件。

运行结果中可以看到两个事件监听器回调函数被先后调用。 这就是EventEmitter最简单的用法。

EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件。

## 方法
+ addListener(event, listener)

为指定事件添加一个监听器到监听器数组的尾部。

+ on(event, listener)

为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。

+ once(event, listener)

为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。

+ removeListener(event, listener)

移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。

它接受两个参数，第一个是事件名称，第二个是回调函数名称。

+ removeAllListeners([event])

移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。

+ setMaxListeners(n)

默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。

+ listeners(event)

返回指定事件的监听器数组。

+ emit(event, [arg1], [arg2], [...])
按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。

## 类方法

+ listenerCount(emitter, event)

返回指定事件的监听器数量。

## 事件

+ newListener

event - 字符串，事件名称

listener - 处理事件函数

该事件在添加新监听器时被触发。

+ removeListener

event - 字符串，事件名称

listener - 处理事件函数

从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。
```
// eventsdemo4.js
var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log('监听器listener1执行。');
}

var listener2 = function listener2(){
    console.log('监听器listener2执行。');
}

eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'个监听器监听连接事件。');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
console.log('listener1不再受监听。');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'个监听器监听连接事件。');

console.log('程序执行完毕。')
```

## error事件

EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。

当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。

我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。例如：
```
// eventsdemo5.js
var events = require('events'); 
var emitter = new events.EventEmitter(); 
emitter.emit('error'); 
```
运行时会显示错误。

## 继承EventEmitter

大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。

为什么要这样做呢？原因有两点：

首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发生应该是一个对象的方法。

其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。

# Node.js Buffer(缓冲区)
JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。

在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。

## Buffer 与字符编码
Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。

通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。

```
const buf = Buffer.from('runoob', 'ascii');
// 输出 72756e6f6f62
console.log(buf.toString('hex'));
// 输出 cnVub29i
console.log(buf.toString('base64'));
```

## 创建 Buffer 类
Buffer 提供了以下 API 来创建 Buffer 类：
```
Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
Buffer.allocUnsafeSlow(size)
Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例

// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');
```
## 写入缓冲区
+ 语法

写入 Node 缓冲区的语法如下所示：

`buf.write(string[, offset[, length]][, encoding])`

+ 参数

参数描述如下：

string - 写入缓冲区的字符串。

offset - 缓冲区开始写入的索引值，默认为 0 。

length - 写入的字节数，默认为 buffer.length

encoding - 使用的编码。默认为 'utf8' 。

根据 encoding 的字符编码写入 string 到 buf 中的 offset 位置。 length 参数是写入的字节数。 如果 buf 没有足够的空间保存整个字符串，则只会写入 string 的一部分。 只部分解码的字符不会被写入。

+ 返回值

返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。

+ 实例
```
buf = Buffer.alloc(256);
len = buf.write("www.runoob.com");

console.log("写入字节数 : "+  len);
```

## 从缓冲区读取数据
+ 语法

读取 Node 缓冲区数据的语法如下所示：

`buf.toString([encoding[, start[, end]]])`

+ 参数

参数描述如下：

encoding - 使用的编码。默认为 'utf8' 。

start - 指定开始读取的索引位置，默认为 0。

end - 结束位置，默认为缓冲区的末尾。

+ 返回值

解码缓冲区数据并使用指定的编码返回字符串。

+ 实例
```
buf = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde
```

## 将 Buffer 转换为 JSON 对象
+ 语法

将 Node Buffer 转换为 JSON 对象的函数语法格式如下：

`buf.toJSON()`

当字符串化一个 Buffer 实例时，JSON.stringify() 会隐式地调用该 toJSON()。

+ 返回值

返回 JSON 对象。

+ 实例
```
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);
```

## 缓冲区合并
+ 语法

Node 缓冲区合并的语法如下所示：

`Buffer.concat(list[, totalLength])`

+ 参数

参数描述如下：

list - 用于合并的 Buffer 对象数组列表。

totalLength - 指定合并后Buffer对象的总长度。

+ 返回值

返回一个多个成员合并的新 Buffer 对象。

+ 实例
```
var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());
```

## 缓冲区比较
+ 语法

Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入：

`buf.compare(otherBuffer);`

+ 参数

参数描述如下：

otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。

+ 返回值

返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。

+ 实例
```
var buffer1 = Buffer.from('ABC');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}
```
## 拷贝缓冲区
+ 语法

Node 缓冲区拷贝语法如下所示：

`buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])`

+ 参数

参数描述如下：

targetBuffer - 要拷贝的 Buffer 对象。

targetStart - 数字, 可选, 默认: 0

sourceStart - 数字, 可选, 默认: 0

sourceEnd - 数字, 可选, 默认: buffer.length

+ 返回值

没有返回值。

+ 实例
```
var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('RUNOOB');

//将 buf2 插入到 buf1 指定位置上
buf2.copy(buf1, 2);

console.log(buf1.toString());
```

## 缓冲区裁剪
+ 语法

Node 缓冲区裁剪语法如下所示：

`buf.slice([start[, end]])`

+ 参数

参数描述如下：

start - 数字, 可选, 默认: 0

end - 数字, 可选, 默认: buffer.length

+ 返回值

返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。

+ 实例
```
var buffer1 = Buffer.from('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());
```

## 缓冲区长度
+ 语法

Node 缓冲区长度计算语法如下所示：

`buf.length;`

+ 返回值

返回 Buffer 对象所占据的内存长度。

+ 实例
```
var buffer = Buffer.from('www.runoob.com');
//  缓冲区长度
console.log("buffer length: " + buffer.length);
```

# Node.js Stream(流)

Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。

Node.js，Stream 有四种流类型：

+ Readable - 可读操作。
+ Writable - 可写操作。
+ Duplex - 可读可写操作.
+ Transform - 操作被写入数据，然后读出结果。

所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

+ data - 当有数据可读时触发。
+ end - 没有更多的数据可读时触发。
+ error - 在接收和写入过程中发生错误时触发。
+ finish - 所有数据已被写入到底层系统时触发。

## 从流中读取数据

创建input.txt文件，内容如下：
```
菜鸟教程官网地址：www.runoob.com
```
创建读取文件，代码如下：
```
//streamdemo.js
var fs = require("fs");
var data = "";

var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');
readerStream.on('data', function (chunk) {
	data = chunk;
});

readerStream.on('end', function () {
	console.log(data);
});

readerStream.on('error',function(err){
    console.log(err.stack)
});

console.log("程序执行完毕");
```

## 写入流

创建文件，代码如下：
```
//streamdemo2.js
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
```

## 管道流
管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。

以下实例我们通过读取一个文件内容并将内容写入到另外一个文件中。创建文件，代码如下：
```
//streamdemo3.js
var fs = require("fs");

var readerStream = fs.createReadStream('input.txt');
var writeStream = fs.createWriteStream('output.txt');

readerStream.pipe(writeStream);

console.log('程序执行完毕');
```

## 链式流
链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。

接下来我们就是用管道和链式来压缩和解压文件。创建文件，代码如下：
```
//streamdemo4.js
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('input.txt.gz'));

console.log('文件压缩完成');
```
执行完以上操作后，我们可以看到当前目录下生成了 input.txt 的压缩文件 input.txt.gz。

接下来，让我们来解压该文件，创建文件，代码如下：
```
//streamdemo5.js
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input.txt'));

console.log('文件解压完成');
```

# Node.js 模块系统
为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。

模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。

## 创建模块
在 Node.js 中，创建一个模块非常简单，如下我们创建一个文件，代码如下:
```
//moduledemo.js
var hello = require('./hello');
hello.world();
```
在以上示例中，hello.js 通过 exports 对象把 world 作为模块的访问接口，在 main.js 中通过 require('./hello') 加载这个模块，然后就可以直接访 问 hello.js 中 exports 对象的成员函数了。

有时候我们只是想把一个对象封装到模块中，格式如下：
```
module.exports = function() {
  // ...
}
```
例如:
```
//hello2.js 
function Hello() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}; 
module.exports = Hello;
```
这样就可以直接获得这个对象了：
```
//main.js 
var Hello = require('./hello'); 
hello = new Hello(); 
hello.setName('BYVoid'); 
hello.sayHello(); 
```
模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}。 在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。

# Node.js 函数
在JavaScript中，一个函数可以作为另一个函数的参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。

Node.js中函数的使用与Javascript类似，举例来说，你可以这样做：
```
//functiondemo.js
function say(word) {
  console.log(word);
}

function execute(someFunction, value) {
  someFunction(value);
}

execute(say, "Hello");
```
以上代码中，我们把 say 函数作为execute函数的第一个变量进行了传递。这里传递的不是 say 的返回值，而是 say 本身！

这样一来， say 就变成了execute 中的本地变量 someFunction ，execute可以通过调用 someFunction() （带括号的形式）来使用 say 函数。

当然，因为 say 有一个变量， execute 在调用 someFunction 时可以传递这样一个变量。


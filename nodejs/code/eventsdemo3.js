var eventEmitter = require('events').EventEmitter;

var event = new eventEmitter();

event.setMaxListeners(20);

event.on('someEvent',function(arg1,arg2){
    console.log('listener1',arg1,arg2);
});

event.on('someEvent',function(arg1,arg2){
    console.log('listener2',arg1,arg2);
});

event.on('someEvent',function(arg1,arg2){
    console.log('listener3',arg1,arg2);
});

event.on('someEvent',function(arg1,arg2){
    console.log('listener4',arg1,arg2);
});

event.on('someEvent',function(arg1,arg2){
    console.log('listener5',arg1,arg2);
});

event.on('someEvent',function(arg1,arg2){
    console.log('listener6',arg1,arg2);
});

event.on('someEvent',function(arg1,arg2){
    console.log('listener7',arg1,arg2);
});

event.on('someEvent',function(arg1,arg2){
    console.log('listener8',arg1,arg2);
});

event.on('someEvent',function(arg1,arg2){
    console.log('listener9',arg1,arg2);
});

event.on('someEvent',function(arg1,arg2){
    console.log('listener10',arg1,arg2);
});

event.on('someEvent',function(arg1,arg2){
    console.log('listener11',arg1,arg2);
});

console.log(event.listeners('someEvent'));

console.log(event.emit('someEvent','arg1 参数','arg2 参数'));

var module = [ 'foo', 'bar' ][+(Math.random() > 0.5)]
var message = require('./lib/' + module) // 动态请求
console.log(message)

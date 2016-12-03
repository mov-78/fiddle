```js
( {

    // wrap 用于添加前缀与/或后缀
    wrap : {
        start : '(function() {' ,
        end : '}());'
    } ,

    // 使用默认前缀/后缀
    wrap : true ,

    // 引用外部文件
    // 相对路径相对于构建配置文件或工作目录解析
    wrap : {
        startFile : 'path/to/start.frag' ,
        endFile : 'path/to/end.frag'
    }

} )
```

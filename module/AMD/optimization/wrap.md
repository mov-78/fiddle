```js
( {

    // wrap 用于为「构建层」添加前缀与/或后缀
    wrap : {
        start : '(function() {' ,
        end : '}());'
    } ,

    // 使用默认前缀/后缀
    wrap : true ,

    // 引用外部文件
    wrap : {
        startFile : 'path/to/start.frag' ,
        endFile : 'path/to/end.frag'
    }

} )
```

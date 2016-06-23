[Grunt](http://gruntjs.com/) 相关 fiddle

---

配置任务：

```js
module.exports = function ( grunt ) {

  grunt.initConfig( {
    task : { // 任务参数配置
      options : { // 任务级选项
      } ,
      target : {
        options : { // 目标级选项（覆盖任务级选项）
        }
      }
    }
  } )

}
```

执行任务：

```sh
$ grunt task # 执行 task 内所有 target
$ grunt task:target # 执行 task 内指定 target
$ grunt task:target:arg1:arg2... # 执行 task 内指定 target 并传参
```

配置文件路径映射：

- COMPACT FORMAT

```js
{
  target : {
    src : [ 'path/to/files' ] ,
    dest : 'path/to/files'
    // options
  }
}
```

- FILES OBJECT FORMAT

```js
{
  target : {
    files : {
      'path/to/dest' : 'path/to/src'
      // more mapping...
    }
  }
}
```

- FILES ARRAY FORMAT

```js
{
  target : {
    files : [
      {
        src : 'path/to/files' ,
        dest : 'path/to/files'
        // options
      }
      // more mapping...
    ]
  }
}
```

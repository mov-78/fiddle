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

---

执行任务：

```sh
$ grunt --help # 列出所有任务
$ grunt task # 执行 task 内所有 target
$ grunt task:target # 执行 task 内指定 target
$ grunt task:target:arg1:arg2... # 执行 task 内指定 target 并传参
```

---

配置文件路径映射：

- COMPACT FORMAT (n:1)

```js
{
  target : {
    src : 'path/to/src' ,
    dest : 'path/to/dest'
    // ...其他配置
  }
}
```

- FILES OBJECT FORMAT (n:1)

```js
{
  target : {
    files : {
      'path/to/dest' : 'path/to/src'
      // ...更多映射
    }
  }
}
```

- FILES ARRAY FORMAT (n:1)

```js
{
  target : {
    files : [
      {
        src : 'path/to/src' ,
        dest : 'path/to/dest'
        // ...其他选项
      }
      // ...更多映射
    ]
  }
}
```

- FILES ARRAY FORMAT (n:n)

```js
{
  target : {
    files : [
      {
        expand : true ,
        cwd : 'path/to/src' ,
        src : '**/*.js' ,
        dest : 'path/to/dest' ,
        ext : '.min.js' ,
        extDot : 'last'
        // ...其他选项
      }
      // ...更多映射
    ]
  }
}
```

该 fiddle 用于演示 gulp 核心接口 [#](https://github.com/gulpjs/gulp/blob/master/docs/API.md)

> gulp := [vinyl](https://github.com/gulpjs/vinyl) + [orchestrator](https://github.com/robrich/orchestrator) + [gaze](https://github.com/shama/gaze)

```js
// 经典流程
let gulp = require( 'gulp' )

gulp.task( 'name' , function () {
  gulp
    .src( 'path/to/src' ) // source globs
    .pipe( plugin() )
    .pipe( anotherPlugin() )
    .pipe( gulp.dest( 'path/to/dest' ) ) // destination folder
} )
```

---

__gulp.src( glob:String|Array , [opts:Object] )__ [#](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpsrcglobs-options)

指定源文件集，返回 Transform 流。

> - `glob` 支持 [node-glob](https://github.com/isaacs/node-glob) 语法，同时额外添加否定语法（`!`）
> - `opts` 支持 [node-glob](https://github.com/isaacs/node-glob#options) 及 [glob-stream](https://github.com/gulpjs/glob-stream#options) 的全部选项

__gulp.dest( path:String|Function , [opts:Object] )__ [#](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpdestpath-options)

指定输出目录（若目录不存在则自动创建指定目录），返回 Transform 流。

> - opts.mode:String='0777' - 输出目录 `chmod` 权限
> - opts.cwd:String=process.cwd() - 生成目录时的工作目录（仅在 `path` 为相对路径时生效）

__gulp.task( name:String , [deps:Array] , [fn:Function] )__ [#](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulptaskname--deps--fn)

用于定义任务。gulp 内部使用 [Orchestrator](https://github.com/robrich/orchestrator) 来进行任务管理。

`deps` 依赖内的任务全部并行执行。如果依赖中包含异步任务，则这些异步任务需要：

- 调用 `done` 回调（`fn` 里唯一的自由变量）
- 返回一个 `Promise` 对象
- 返回一个 `Stream` 对象

来告知 gulp 任务何时结束。

__gulp.watch( glob:String|Array , [opts:Object] , tasks:Array|callback:Function )__ [#](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglob--opts-tasks-or-gulpwatchglob--opts-cb)

用于侦测文件变更并在事件触发时执行指定任务集或回调。gulp 内部使用 [gaze](https://github.com/shama/gaze) 来侦测文件变更。

```js
// [1] 执行指定任务集
gulp.watch( 'path/to/file' , 'task' )

// [2] 执行指定回调
gulp.watch( 'path/to/file' , opts , function ( event ) {

  // opts:Object - 传递给 Gaze 构造函数的选项

  // event.path:String - 触发文件变更事件的文件路径
  // event.type:String - 文件变更类型（枚举型）：`added|changed|deleted|renamed`

} )
```

该 fiddle 用于演示 [Gulp](http://gulpjs.com/) 核心接口

> Gulp := [Vinyl](https://github.com/gulpjs/vinyl) + [Orchestrator](https://github.com/robrich/orchestrator) + [Gaze](https://github.com/shama/gaze)

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

指定源文件集，返回 Readable 流。

> - `glob` 支持 [node-glob](https://github.com/isaacs/node-glob) 语法，同时额外添加否定语法（`!`）
> - `opts` 支持 [node-glob](https://github.com/isaacs/node-glob#options) 及 [glob-stream](https://github.com/gulpjs/glob-stream) 的全部选项

__gulp.dest( path:String|Function , [opts:Object] )__ [#](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpdestpath-options)

指定输出目录（若目录不存在则自动创建指定目录），返回 Transform 流。

> - opts.mode:String='0777' - 输出目录权限
> - opts.cwd:String=process.cwd() - 生成目录时的工作目录（仅在 `path` 为相对路径时生效）

__gulp.task( name:String , [deps:Array] , [fn:Function] )__ [#](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulptaskname--deps--fn)

用于定义任务。

Gulp 内部使用 [Orchestrator](https://github.com/robrich/orchestrator) 来进行任务管理，默认情况下，所有任务均并行执行。 若需要串行/顺序执行行为，则需要：

1. 将先行任务定义为一个异步任务
2. 在后行任务中声明 `deps` 依赖

可以通过如下方式定义异步任务：

- 调用 `done` 回调（`fn` 里唯一的自由变量）
- 返回一个 `Promise` 对象
- 返回一个 `Stream` 对象

__gulp.watch( glob:String|Array , [opts:Object] , tasks:Array|callback:Function )__ [#](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglob--opts-tasks-or-gulpwatchglob--opts-cb)

用于侦测文件变更并执行指定任务集或回调。Gulp 内部使用 [gaze](https://github.com/shama/gaze) 来侦测文件变更。

```js
gulp.watch( 'path/to/file' , 'task' )

gulp.watch( 'path/to/file' , function ( event ) {
  // event.path:String - 触发文件变更事件的文件路径
  // event.type:String - 文件变更类型（枚举型）：`added|changed|deleted|renamed`
} )
```

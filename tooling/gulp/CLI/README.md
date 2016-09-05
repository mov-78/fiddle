该 fiddle 用于演示 gulp 命令行用例 [#](https://github.com/gulpjs/gulp/blob/master/docs/CLI.md)

---

```sh
$ gulp [<task>...] # 若未指定任何任务则执行 default 任务
```

```js
// 添加任务描述，供 gulp --tasks 命令使用
const fn = function fn() {}
fn.description = 'description'
gulp.task( 'name' , fn )
```

- `-T|--tasks` 显示任务依赖树（包含任务描述）
- `--tasks-simple` 显示任务列表（不包含任务描述）
- `--gulpfile <path>` 指定 gulpfile 路径
- `--require <module>` 预加载模块
- `--silent` 隐藏 debug 日志
- `-v|--version` 打印本地及全局 gulp 版本信息

> r.js = adapter + optimizer

---

```sh
# 查看版本信息
$ r.js -v

# CommonJS 转 AMD
$ r.js -convert path/to/commonjs/dir path/to/output/dir

# 适配器模式 http://requirejs.org/docs/node.html
$ r.js main.js

# 构建模式
#
# 构建配置来源（依优先级排序）：
# - 命令行参数
# - 构建配置文件
# - mainConfigFile 配置项
$ r.js -o [profile.js] [[key=value]...]
```

---

> 构建模式包含「单文件构建模式」及「项目构建模式」：

<p align="center"><img src="https://cdn.rawgit.com/pwnn/img/master/fiddle/module/AMD/rjs-workflow.svg?v=20161203.1" alt="流程图"></p>

---

- [r.js](https://github.com/requirejs/r.js)
- [Optimization](http://requirejs.org/docs/optimization.html)
- [example.build.js](https://github.com/requirejs/r.js/blob/2.3.2/build/example.build.js)

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

![流程图](https://cdn.rawgit.com/pwnn/img/355fc57e12da3b24e037406cd5bd908b779b994a/fiddle/module/AMD/rjs-workflow.svg)

---

![相对路径解析原则](https://cdn.rawgit.com/pwnn/img/61d112d4a028119fc3490990b41183694f40c8bf/fiddle/module/AMD/rjs-relative-path.svg)

---

- [r.js](https://github.com/requirejs/r.js)
- [Optimization](http://requirejs.org/docs/optimization.html)
- [example.build.js](https://github.com/requirejs/r.js/blob/2.3.2/build/example.build.js)

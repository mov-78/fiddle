> r.js = adapter + optimizer

---

```sh
$ npm install -g requirejs

# 查看版本信息
$ r.js -v

# 适配器模式 http://requirejs.org/docs/node.html
$ r.js main.js

# CommonJS 转 AMD
$ r.js -convert path/to/commonjs/dir path/to/output/dir

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

<p align="center"><img src="https://cdn.jsdelivr.net/gh/pwnn/img@355fc57e12da3b24e037406cd5bd908b779b994a/fiddle/module/AMD/rjs-workflow.svg?v=1" alt="流程图"></p>

---

<p align="center"><img src="https://cdn.jsdelivr.net/gh/pwnn/img@61d112d4a028119fc3490990b41183694f40c8bf/fiddle/module/AMD/rjs-relative-path.svg?v=1" alt="相对路径解析原则"></p>


---

- [r.js](https://github.com/requirejs/r.js)
- [Optimization](http://requirejs.org/docs/optimization.html)
- [example.build.js](https://github.com/requirejs/r.js/blob/2.3.2/build/example.build.js)

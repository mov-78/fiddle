> r.js = adapter + optimizer

---

```sh
$ r.js -v # 查看版本信息
$ r.js main.js # 适配器模式 http://requirejs.org/docs/node.html
$ r.js -convert path/to/commonjs/dir path/to/output/dir # CommonJS 转 AMD
$ r.js -o [profile.js] [[key=value]...] # 构建模式
```

---

构建配置来源（依优先级排序）：

- 命令行参数
- 构建配置文件
- mainConfigFile

---

<p align="center"><img src="http://ocv7sq6bh.bkt.clouddn.com/rjs-optimization-workflow.svg?bust=161106.1" alt="流程图"></p>

---

- [r.js](https://github.com/requirejs/r.js)
- [Optimization](http://requirejs.org/docs/optimization.html)
- [example.build.js](https://github.com/requirejs/r.js/blob/master/build/example.build.js)

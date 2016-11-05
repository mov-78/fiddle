> r.js = adapter + optimizer

---

```sh
$ r.js -v # 查看版本信息
$ r.js main.js # 适配器模式 http://requirejs.org/docs/node.html
$ r.js -convert path/to/commonjs/dir path/to/output/dir # CommonJS 转 AMD
$ r.js -o [profile.js] [[key=value]...] # 构建模式
```

---

<a href="http://ocv7sq6bh.bkt.clouddn.com/r.js-workflow.pdf"><img src="http://ocv7sq6bh.bkt.clouddn.com/r.js.png" alt="流程图"></a>

---

- [r.js](https://github.com/requirejs/r.js)
- [Optimization](http://requirejs.org/docs/optimization.html)
- [example.build.js](https://github.com/requirejs/r.js/blob/master/build/example.build.js)

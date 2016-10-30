> r.js = adapter + optimizer

---

```sh
$ r.js -v # 查看版本信息
$ r.js main.js # 适配器用例 http://requirejs.org/docs/node.html
$ r.js -convert path/to/commonjs/dir path/to/output/dir # CommonJS 转 AMD
$ r.js -o [[key=value]...] [profile.js] # 项目构建
```

---

两种构建模式：

- 单文件构建模式（由 [out](./out.md) 选项激活）
- 项目构建模式（由 [dir](./dir.md) 选项激活）

---

- [r.js](https://github.com/requirejs/r.js)
- [Optimization](http://requirejs.org/docs/optimization.html)
- [example.build.js](https://github.com/requirejs/r.js/blob/master/build/example.build.js)

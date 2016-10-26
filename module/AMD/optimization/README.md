> r.js = adapter + optimizer

---

```sh
$ r.js -v # 查看版本信息
$ r.js main.js # 适配器用例
$ r.js -convert path/to/commonjs/dir output/dir # CommonJS 转 AMD
$ r.js -o [[key=value]...] [profile.js] # 优化打包用例
```

---

- [r.js](https://github.com/requirejs/r.js)
- [RequireJS Optimizer](http://requirejs.org/docs/optimization.html#basics)
- [example.build.js](https://github.com/requirejs/r.js/blob/master/build/example.build.js)

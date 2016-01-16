该 fiddle 用于演示新增的 [Symbol](http://mzl.la/1qQFuyR) 数据类型

```sh
$ npm install
$ npm run babel-node
```

---

`Symbol` 是 ES6 中新增的一种标量数据类型，同时 `Symbol` 又分为：

- 本地（匿名）`Symbol`（通过 `Symbol([description])` 生成）
- 全局（具名）`Symbol`（通过 `Symbol.for(key)` 注册或获取）

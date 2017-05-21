__context__

指定入口模块（及 loader）所在根目录

```js
module.exports = {
    context: path.resolve(__dirname, 'app')
}
```

> - 必须为绝对路径
> - 默认值为 `process.cwd()`

---

__entry__

指定入口模块

```js
module.exports = {
    entry: Entry
}
```

```js
module.exports = {
    entry() {
        return Entry
    }
}
```

```js
module.exports = {
    entry() {
        return new Promise(function (resolve, reject) {
            resolve(Entry)
        })
    }
}
```

Entry:

- string
- string[]
- { chunkName: string|string[] }

---

- [configuration/entry-context](https://webpack.js.org/configuration/entry-context/)

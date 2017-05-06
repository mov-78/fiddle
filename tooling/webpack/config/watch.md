__watch__

watch 模式相关配置

```js
module.exports = {
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        ignored: /node_modules/,
        poll: 1000
    }
}
```

---

- [configuration/watch](https://webpack.js.org/configuration/watch/)
- [es128/anymatch](https://github.com/es128/anymatch)

__performance__

设置是否开启资源过大提示以及指定资源大小上限

```js
module.exports = {
    performance: {
        hints: false, // boolean | 'warning' | 'error'
        maxEntrypointSize: 400000,
        maxAssetSize: 250000
    }
}
```

---

- [RFC: Webpack Performance Budgets](https://github.com/webpack/webpack/issues/3216)

<p align="center"><img src="http://ocv7sq6bh.bkt.clouddn.com/webpack-resolve.svg" alt="webpack-resolve"></p>

```js
// 默认值
module.exports = {
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json'],
        descriptionFiles: ['package.json'],
        mainFields: ['browser', 'module', 'main'], // 默认值依赖于 target
        mainFiles: ['index']
    },
    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['.js', '.json'],
        mainFields: ['loader', 'main']
    }
}
```

---

- [configuration/resolve](https://webpack.js.org/configuration/resolve/)
- [module-resolution](https://webpack.js.org/concepts/module-resolution/)
- [webpack/enhanced-resolve](https://github.com/webpack/enhanced-resolve)

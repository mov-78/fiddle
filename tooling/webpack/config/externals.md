__externals__

声明外部依赖

```js
externals: string | RegExp | (string | RegExp)[]
```

```js
module.exports = {
    output: {
        libraryTarget: 'umd'
    },
    externals: {
        lodash: {
            amd: 'lodash',
            commonjs2: 'lodash',
            root: '_'
        },
        undash: 'undash'
    }
}
```

---

- [configuration/externals](https://webpack.js.org/configuration/externals/)
- [author-libraries](https://webpack.js.org/guides/author-libraries/)
- [webpack-node-externals](https://www.npmjs.com/package/webpack-node-externals)

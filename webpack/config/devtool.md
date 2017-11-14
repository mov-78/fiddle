__devtool__

设置 [Source Map](https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?hl=en_US&pli=1&pli=1)

```js
module.exports = function (env) {
    return {
        devtool: process.env.NODE_ENV == 'production' ? 'cheap-module-source-map' : 'cheap-module-eval-source-map'
    }
}
```

| devtool | 品质 |
| - | - |
| `eval` | 转换过的代码 |
| `cheap-[eval-]source-map` | 转换过的代码（仅限行） |
| `cheap-module-[eval-]source-map` | 原始代码（仅限行） |
| `[eval-]source-map` | 原始代码 |

---

- [configuration/devtool](https://webpack.js.org/configuration/devtool/)
- [SourceMapDevToolPlugin](https://webpack.js.org/plugins/source-map-dev-tool-plugin/)
- [source-map-loader](https://webpack.js.org/loaders/source-map-loader/)

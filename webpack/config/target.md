__target__

指定部署环境

```js
module.exports = {
    target: 'web'
}
```

> 目前支持如下环境：
> - `web`
> - `webworker`
> - `node`
> - `async-node`
> - `node-webkit`
> - `electron-main`
> - `electron-renderer`

---

- [concepts/targets](https://webpack.js.org/concepts/targets/)
- [configuration/target](https://webpack.js.org/configuration/target/)
- [WebpackOptionsApply](https://github.com/webpack/webpack/blob/v2.5.1/lib/WebpackOptionsApply.js#L70-L185)

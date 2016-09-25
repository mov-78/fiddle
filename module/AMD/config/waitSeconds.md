[waitSeconds](http://requirejs.org/docs/api.html#config-waitSeconds) 选项用于设置模块加载超时间隔（单位为秒）：

```js
// - 默认为 7s
// - waitSeconds = 0 将禁用超时
require.config( {
    waitSeconds : 5
} )
```

可以通过 [data-main](http://requirejs.org/docs/api.html#data-main) 属性来指定「入口模块」：

```html
<script data-main="main" src="path/to/require.js"></script>
```

> `require.js` 将插入一个 `<script async src="main.js"></script>` 标签来异步加载「入口模块」

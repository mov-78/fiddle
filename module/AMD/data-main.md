可以通过 `data-main` 属性来指定「入口模块」：

```html
<script data-main="main" src="path/to/require.js"></script>
```

等同于：

```html
<script src="path/to/require.js"></script>
<script>require( [ 'main' ] )</script>
```

---

- [data-main](http://requirejs.org/docs/api.html#data-main)

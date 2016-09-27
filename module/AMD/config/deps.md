[deps](http://requirejs.org/docs/api.html#config-deps) 选项用于设置配置时依赖项

```html
<script>
var require = {
    // require.js 在处理配置项时即刻异步加载列出的依赖项
    deps : [ 'config' ]
}
</script>
```

> 相关配置项：[callback](http://requirejs.org/docs/api.html#config-callback)

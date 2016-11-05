[callback](http://requirejs.org/docs/api.html#config-callback) 用于设置配置时依赖项加载执行成功回调

```html
<script>
var require = {
    deps : [ 'main' ] ,
    callback : function ( main ) {
    }
}
</script>
```

> 相关配置项：[deps](./deps.md)

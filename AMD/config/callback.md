[callback](http://requirejs.org/docs/api.html#config-callback) 用于设置配置时依赖项执行回调

```html
<script>
var require = {
    deps : [ 'config' ] ,
    callback : function ( config ) {
    }
}
</script>
```

> 相关配置项：[deps](./deps.md)

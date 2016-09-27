[callback](http://requirejs.org/docs/api.html#config-callback) 选项用于设置配置时依赖项加载回调

```html
<script>
var require = {
    deps : [ 'main' ] ,
    callback : function ( main ) {
    }
}
</script>
```

> 相关配置项：[deps](http://requirejs.org/docs/api.html#config-deps)

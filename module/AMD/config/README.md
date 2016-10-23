## 声明配置项

```js
require.config( { /* configuration */ } ) // 合并新增配置项或覆盖已有配置项
require( { /* configuration */ } )
```

或：

```html
<script>var require = { /* configuration */ }</script>
<script src="path/to/require.js"></script>
```

## 分离配置及入口模块的几种常见模式

[via](https://github.com/requirejs/requirejs/wiki/Patterns-for-separating-config-from-the-main-module)

### 1

```html
<script>var require = { /* configuration */ }</script>
<script data-main="main" src="path/to/require.js"></script>
```

### 2

```html
<script src="path/to/require.js"></script>
<script src="path/to/config.js"></script>
<script>
require.config( { /* configuration */ } )
require( [ 'main' ] )
</script>
```

```js
// config.js
require.config( { /* configuration */ } )
```

### 3

```html
<script src="path/to/require.js"></script>
<script>
require( [ 'config' ] , function () {
    require( [ 'main' ] )
} )
</script>
```

### 4

```html
<script data-main="config" src="path/to/require.js"></script>
```

```js
// config.js
require.config( {
    deps : [ 'main' ] ,
    // ...
} )
```

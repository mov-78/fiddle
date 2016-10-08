## 声明配置项

```js
require.config( { /* configuration */ } )
require.config( { /* configuration */ } ) // merged
```

或：

```html
<script>var require = { /* configuration */ }</script>
<script src="path/to/require.js"></script>
```

## 常见配置模式

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

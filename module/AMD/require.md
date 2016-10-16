全局：

```js
var mod = require( 'mod' )
assert( require === requirejs )
```

局部：

```js
define( [ 'require' ] , function factory( require ) {
    var mod = require( 'mod' )
} )
```

---

同步：

> AMD 规范规定，在同步加载尚未加载过的模块时，「必须」抛出异常（包含已定义但尚未加载的情况）

```js
var mod = require( 'mod' ) // 全局同步

define( [ 'require' ] , function factory( require ) {
    var mod = require( 'mod' ) // 局部同步
} )
```

异步：

```js
require( [ 'mod' ] , function ( mod ) {
    // 全局异步
} )

define( [ 'require' ] , function factory( require ) {
    require( [ 'mod' ] , function ( mod ) {
        // 局部异步
    } )
} )
```

---

- [require](https://github.com/amdjs/amdjs-api/blob/master/require.md)
- [context](http://requirejs.org/docs/api.html#config-context)
- [CommonJS Modules/1.1.1](http://wiki.commonjs.org/wiki/Modules/1.1.1#Require)

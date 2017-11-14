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

> 局部 require 接受「相对模块标识」

---

同步：

> AMD 规范规定，在同步加载尚未执行的模块时，必须抛出异常

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

__require.toUrl( id )__

利用模块系统的内部机制来进行路径解析

---

- [require](https://github.com/amdjs/amdjs-api/blob/master/require.md)
- [context](http://requirejs.org/docs/api.html#config-context)
- [CommonJS Modules/1.1.1#Require](http://wiki.commonjs.org/wiki/Modules/1.1.1#Require)

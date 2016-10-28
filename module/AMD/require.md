全局：

```js
var mod = require( 'mod' )
assert( require === requirejs ) // https://github.com/requirejs/requirejs/commit/be45948433b053921dc6a6a57bf06d04e13b3b39
```

局部：

> 局部 require 接受「相对模块标识」

```js
define( [ 'require' ] , function factory( require ) {
    var mod = require( 'mod' )
} )
```

---

同步：

> AMD 规范规定，在同步加载模块定义尚未执行的模块时，必须抛出异常

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
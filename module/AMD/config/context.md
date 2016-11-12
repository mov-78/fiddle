[context](http://requirejs.org/docs/api.html#config-context) 用于指定「加载上下文」：

> 每个「加载上下文」维护了一组独立的配置集及其对应的模块解析记录

```js
var req1 = require.config( {
    // 默认上下文为 '_'
    baseUrl : 'js'
} )
var req2 = require.config( {
    context : 'v2' ,
    baseUrl : 'js/v2'
} )

req1( [ 'main' ] ) // 等同于 require( [ 'main' ] )

req2( [ 'require' , 'alpha' ] , function ( require , alpha ) {
    require( [ 'beta' ] ) // 等同于 req2( [ 'beta' ] )
} )

// alpha.js
define( function factory( require ) {
    // 此处 require 等同于 req2
} )
```

[context](http://requirejs.org/docs/api.html#config-context) 选项用于指定「解析上下文」：

> 每个「解析上下文」维护了一组独立的配置及模块解析记录

```js
var req1 = require.config( {
    // 默认上下文为 '_'
    baseUrl : 'js'
} )
var req2 = require.config( {
    context : 'v2' ,
    baseUrl : 'js/v2'
} )

require( [ 'main' ] ) // 等同于 req1( [ 'main' ] )

req2( [ 'require' , 'alpha' ] , function ( require , alpha ) {
    require( [ 'beta' ] ) // 等同于 req2( [ 'beta' ] )
} )
```

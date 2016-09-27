[context](http://requirejs.org/docs/api.html#config-context) 选项用于指定「加载上下文」：

> 每个「加载上下文」维护了一组独立的配置及模块加载记录

```js
var req1 = require.config( {
    // 默认上下文为 '_'
    baseUrl : 'js'
} )
var req2 = require.config( {
    context : 'v2' ,
    baseUrl : 'js/v2'
} )

require( [ 'main' ] , function ( main ) {
} )
// 等同于：
req1( [ 'main' ] , function ( main ) {
} )

req2( [ 'require' , 'alpha' ] , function ( require , alpha ) {
    require( [ 'beta' ] , function ( beta ) {
    } )
    // 等同于：
    req2( [ 'beta' ] , function ( beta ) {
    } )
} )
```

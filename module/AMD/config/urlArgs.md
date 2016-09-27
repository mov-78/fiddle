[urlArgs](http://requirejs.org/docs/api.html#config-urlArgs) 选项用于设置资源请求查询字符串

```js
require.config( {
    urlArgs : 'bust=' + ( new Date ).getTime()
} )

// v2.2.0+
require.config( {
    urlArgs : function( id , url ) {
        var suffix = 'bust=' + ( new Date ).getTime()
        return ( url.indexOf( '?' ) === -1 ? '?' : '&' ) + suffix
    }
} )
```

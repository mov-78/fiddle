[paths](http://requirejs.org/docs/api.html#config-paths) 选项用于设置路径或模块别名：

> 路径别名仅匹配模块标识前缀

```js
require.config( {
    paths : {
        a : 'lib/a' ,
        b : 'http://example.com/b' ,
        c : '/lib/c' ,
        d : [ // path-fallback
            'http://cdn.com/d' ,    // 1. 首先尝试加载 CDN 版本
            'vendor/d'              // 2. 加载失败时回退至本地版本
        ]
    }
} )
```

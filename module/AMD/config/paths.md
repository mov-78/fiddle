[paths](http://requirejs.org/docs/api.html#config-paths) 用于设置路径/模块别名：

> - 当 `paths` 用于路径别名时，仅匹配模块标识前缀段
> - `paths` 用于设置通用路径/模块别名，而 `map` 则用于设置指定模块（集）下的路径/模块别名

```js
require.config( {
    paths : {
        foo : 'util/foo' ,
        bar : [ // path-fallback
            '//cdn/bar' ,   // 1. 首先尝试加载 CDN 版本
            'vendor/bar'    // 2. 加载失败时回退至本地版本
        ]
    }
} )
```

> 相关配置项：[map](./map.md)

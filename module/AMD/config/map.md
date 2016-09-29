[map](http://requirejs.org/docs/api.html#config-map) 选项用于设置指定模块（集）下的路径/模块别名

> - 当 `map` 用于指定模块集时，仅匹配模块标识前缀段
> - `paths` 用于设置通用路径/模块别名，而 `map` 则用于设置指定模块（集）下的路径/模块别名
> - 不支持 `path-fallback`

```js
require.config( {
    map : {

        // 通用路径/模块别名
        // 此时等同于 paths 配置项
        '*' : {
            foo : 'bar'
        } ,

        // 指定模块（集）下的路径/模块别名
        // 覆盖通用路径/模块别名
        prefix : {
            foo : 'baz'
        }

    }
} )
```

> 相关配置项：[paths](http://requirejs.org/docs/api.html#config-paths)

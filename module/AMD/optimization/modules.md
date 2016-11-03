```js
( {

    // modules 用于在「项目构建模式」下描述多个「构建层」
    modules : [

        {

            // 待编译模块的模块标识；相对于 baseUrl 解析
            // 在描述「构建层」时，name 为唯一的必须选项
            name : 'main' ,

            // 当待编译模块不存在时，是否创建一个空模块
            create : true ,

            // 引入指定模块及其依赖项
            include : [ 'foo' ] ,

            // 移除指定模块及其依赖项
            exclude : [ 'bar' ] ,
            // 移除指定模块的依赖项，不包含指定模块本身
            excludeShallow : [ 'baz' ]

        }

    ] ,

    // 简写格式：上述选项均可以抽离至顶层来描述单一「构建层」（同时适用于「单文件构建模式」及「项目构建模式」）
    name : 'main' ,
    create : true ,
    include : [ 'foo' ] ,
    exclude : [ 'bar' ] ,
    excludeShallow : [ 'baz' ]

} )
```

---

相关选项：

- [appDir](./appDir.md)
- [baseUrl](./baseUrl.md)
- [dir](./dir.md)
- [out](./out.md)
- [optimize](./optimize.md)
- [skipDirOptimize](./skipDirOptimize.md)

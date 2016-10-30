```js
( {

    // modules 选项用于在「项目构建模式」下描述多个「构建层」
    modules : [

        {

            // 待编译模块的模块标识；相对于 baseUrl 解析
            name : 'main' ,

            // 当待编译模块不存在时，是否创建一个空模块
            create : true ,

            // 引入编译时依赖项
            include : [ 'foo' ] ,

            // 从「构建层」中递归移除指定的依赖项
            exclude : [ 'bar' ] ,
            // 从「构建层」中移除指定的依赖项
            excludeShallow : [ 'baz' ]

        }

    ] ,

    // 在「单文件构建模式」下，上述选项均可以抽离至顶层来描述单一「构建层」
    name : 'main' ,
    create : true ,
    include : [ 'foo' ] ,
    exclude : [ 'bar' ] ,
    excludeShallow : [ 'baz' ]

} )
```

> r.js 在生成目标模块对应的「构建层（build-layer）」时，涉及如下步骤：
> 1. 基于静态分析递归找出目标模块所有的依赖项
> 2. 将目标模块及其依赖项转换为标准具名 AMD 模块
> 3. 将目标模块及转换后的依赖项合并至同一个文件
> 4. 压缩该文件以生成对应的构建层

---

相关选项：

- [appDir](./appDir.md)
- [baseUrl](./baseUrl.md)
- [dir](./dir.md)
- [out](./out.md)

```js
( {

    appDir : '.' ,
    baseUrl : 'js' ,

    // dir 选项与 out 选项二者必须指定其一且只能指定其一
    // dir 选项用于指定输出目录，同时激活「项目构建模式」
    // 相对路径相对于构建配置文件解析（作为命令行参数时则相对于工作目录解析）
    dir : '../build'

} )
```

---

相关选项：

- [out](./out.md)
- [keepBuildDir](./keepBuildDir.md)

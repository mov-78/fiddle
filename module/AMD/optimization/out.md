```js
( {

    name : 'main' ,

    // out 选项与 dir 选项二者必须指定其一且只能指定其一
    // out 选项用于指定输出文件，同时激活「单文件构建模式」
    // 相对路径相对于构建配置文件解析（作为命令行参数时则相对于工作目录解析）
    out : 'main.min.js' ,

    // 自 v2.0.12 起，可以设置输出文件为 STDOUT（需要设置 logLevel=4 来屏蔽多余的日志）
    out : 'stdout'

} )
```

---

相关选项：

- [dir](./dir.md)
- [logLevel](./logLevel.md)

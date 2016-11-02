```js
( {

    // - baseUrl 用于设置模块解析根路径
    // - baseUrl 相对于 appDir 解析，若未设置则相对于构建配置文件解析
    // - baseUrl 默认为构建配置文件所在的目录（命令行模式下则为工作目录）
    baseUrl : 'js' ,

    // 在「项目构建模式」下，若未设置 appDir，则 baseUrl 即为构建源目录
    dir : '../build'

} )
```

---

相关选项：

- [appDir](./appDir.md)

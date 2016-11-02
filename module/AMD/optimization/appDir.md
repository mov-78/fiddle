```js
( {

    // appDir 用于设置「项目构建模式」下的构建源目录
    // 相对路径相对于构建配置文件解析（作为命令行参数时则相对于工作目录解析）
    appDir : '.' ,

    // 设置 appDir 时必须同时设置 baseUrl 及 dir 选项
    baseUrl : 'js' ,
    dir : '../build'

} )
```

---

相关选项：

- [baseUrl](./baseUrl.md)
- [dir](./dir.md)

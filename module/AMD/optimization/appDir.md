```js
( {

    // appDir 选项用于构建整个项目 — r.js 会将 appDir 复制至 dir 内，并在 dir 内进行优化操作
    // appDir 相对于构建配置文件解析（作为命令行参数时则相对于工作目录解析）
    appDir : '.' ,

    // 设置 appDir 时必须同时设置 baseUrl 及 dir 选项
    baseUrl : 'js' ,
    dir : 'build'

} )
```

---

相关选项：

- [baseUrl](./baseUrl.md)
- [dir](./dir.md)

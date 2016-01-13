该 fiddle 用于演示字符串类型（[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)）的扩展

```sh
$ npm install
$ npm run babel-node
```

---

- 对原有 Unicode 转义语法进行了扩展：`\u{XXXXXXXX}`
- 对 `String.prototype` 进行了扩展：
  - `String.prototype.repeat(count)`
  - `String.prototype.startsWith(searchString[, position])`
  - `String.prototype.endssWith(searchString[, position])`
  - `String.prototype.includes(searchString[, position])`
- 模板字符串：
  - 使用反引号作为字符串分隔符
  - 允许跨行（保留缩进及换行符）
  - 支持变量插值（任意合法的 JavaScript 表达式）
- 标签模板字符串：
  - tag\`templateString\`
  - function tag(literalStrings, ...cookedSubstitutions) { return 'taggedTemplateString' }

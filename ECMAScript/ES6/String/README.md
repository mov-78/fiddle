该 fiddle 用于演示字符串类型（[String](http://mzl.la/ORU8rA)）的扩展

```sh
$ npm install
$ npm run babel-node
```

---

- 对原有 Unicode 转义语法进行了扩展：`\u{XXXXXXXX}`
- 对 [String.prototype](http://mzl.la/1CzS1vX) 进行了扩展：
  - [String.prototype.repeat(count)](http://mzl.la/1o18Vl3)
  - [String.prototype.startsWith(searchString, position?)](http://mzl.la/1SMJlfc)
  - [String.prototype.endsWith(searchString, position?)](http://mzl.la/1m9LeWm)
  - [String.prototype.includes(searchString, position?)](http://mzl.la/1SAuELT)
- 模板字符串：
  - 使用反引号作为字符串分隔符
  - 允许跨行（保留缩进及换行符）
  - 支持变量插值（任意合法的 JavaScript 表达式）
- 标签模板字符串：
  - tag\`templateString\`
  - function tag(literalStrings, ...cookedSubstitutions) { return 'taggedTemplateString' }

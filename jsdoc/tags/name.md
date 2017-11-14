[@name](http://usejsdoc.org/tags-name.html) 用于命名条目：

```js
/** @name <NAMEPATH> */
```

> - 使用 `@name` 来命名条目会忽略周边代码，将重置从代码中推导出的作用域及条目类别（`@kind`）等信息；因此若只需要给条目赋予别名，应使用 `@alias`（仅变更条目名称）
> - 相关标签：[@alias](http://usejsdoc.org/tags-alias.html)

[@name](http://usejsdoc.org/tags-name.html) 用于命名实体：

```js
/** @name <NAMEPATH> */
```

> - 使用 `@name` 来命名实体会忽略周边代码，将重置从代码中推导出的作用域及实体类别（`@kind`）等信息；因此若只需要给实体赋予别名，应使用 `@alias`（仅变更实体名称）
> - 相关标签：[@alias](http://usejsdoc.org/tags-alias.html)

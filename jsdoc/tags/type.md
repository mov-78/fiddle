[@type](http://usejsdoc.org/tags-type.html) 用于标记条目数据类型：

> - `@kind` 描述的是条目的类别（类、模块等）

```js
/** @type {TYPE_EXPRESSION} */
```

类型表达式支持如下语法：

- `{*}`
- `{Boolean}`
- `{Name.Path}`
- `{Number|String}`
- `{Array<Model>}`
- `{Model[]}`
- `{Object<String, Number>}`
- `{{key:Number, any}}`
- `{?Object}`
- `{!Object}`

> - 类型表达式亦可用于其他标签
> - 相关标签：[@typedef](http://usejsdoc.org/tags-typedef.html) [@callback](http://usejsdoc.org/tags-callback.html) [@kind](http://usejsdoc.org/tags-kind.html)

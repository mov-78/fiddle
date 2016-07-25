[@inheritdoc](http://usejsdoc.org/tags-inheritdoc.html) 用于显式从父类同名属性中继承文档：

```js
/** @inheritdoc */
```

> - 默认情况下会自动从父类同名属性中继承文档，JSDoc 提供该标签主要是为了兼容 [Closure Compiler](https://developers.google.com/closure/compiler/)
> - 若存在 `@inheritdoc` 标签则忽略其他所有标签
> - `@inheritdoc` 暗指 `@override`
> - 相关标签：[@override](http://usejsdoc.org/tags-override.html)

[@override](http://usejsdoc.org/tags-override.html) 用于显式声明当前方法覆盖了父类同名方法：

```js
/** @override */
```

> - 默认情况下会自动推导出覆盖关系，JSDoc 提供该标签主要是为了兼容 [Closure Compiler](https://developers.google.com/closure/compiler/)
> - `@inheritdoc` 暗指 `@override`
> - 相关标签：[@inheritdoc](http://usejsdoc.org/tags-inheritdoc.html)

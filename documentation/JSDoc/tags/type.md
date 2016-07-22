[@type](http://usejsdoc.org/tags-type.html) 用于标记实体类型：

```js
/** @type {TYPE_EXPRESSION} */
```

类型表达式支持如下语法：

- `{Boolean}`
- `{Name.Path}`
- `{Number|String}`
- `{Array<Model>}`
- `{Model[]}`
- `{Object<String, Number>}`
- `{{key:Number, any}}`
- `{?Object}`
- `{!Object}`
- `@param {...String} keys`
- `@param {Boolean} [deep]`
- `@param {Boolean} [deep=false]`
- `@param {Boolean=} deep`

> 相关：[@typedef](http://usejsdoc.org/tags-typedef.html) [@callback](http://usejsdoc.org/tags-callback.html) [@param](http://usejsdoc.org/tags-param.html) [@returns](http://usejsdoc.org/tags-returns.html) [@property](http://usejsdoc.org/tags-property.html)

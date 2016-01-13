该 fiddle 用于演示对象类型（[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object）的扩展

```sh
$ npm install
$ npm run babel-node
```

---

对象类型字面量语法扩展：

```js
let user = {
  name,                 // 属性简写语法；等同于 name: name
  [expression]: 'ANY',  // 属性名支持表达式
  toString() {},        // 方法简写语法；等同于 toString: function() {}
  * generator() {}
}
```

[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor) 对象的扩展：

- Object.assign(target, ...sources)
- Object.is(m, n)
- Object.getPrototypeOf(obj)
- Object.setPrototypeOf(obj, prototype)

属性的遍历：

|语法结构/方法名｜String|Symbol|非枚举属性|继承属性|
|-|-|-|-|-|
|for...in|☑|☒|☒|☑|
|Object.keys|☑|☒|☒|☒|
|Object.getOwnPropertyNames|☑|☒|☑|☒|
|Object.getOwnPropertySymbols|☒|☑|☑|☒|
|Reflect.ownKeys|☑|☑|☑|☒|
|Reflect.enumerate|☑|☒|☒|☑|

该 fiddle 用于演示对象类型（[Object](http://mzl.la/IG0YNC)）的扩展

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

[Object](http://mzl.la/1ZDxvJO) 对象的扩展：

- [Object.assign(target, ...sources)](http://mzl.la/1Mo3l21)
- [Object.is(m, n)](http://mzl.la/1TyV3KR)
- [Object.getPrototypeOf(obj)](http://mzl.la/1vsvEYf)
- [Object.setPrototypeOf(obj, prototype)](http://mzl.la/1JUKAHF)

属性的遍历：

| 遍历方法或遍历结构 | String | Symbol | 非枚举属性 | 继承属性 |
| --- | --- | --- | --- | --- |
| for...in  | Y | - | - | Y |
| Object.keys | Y | - | - | - |
| Object.getOwnPropertyNames | Y | - | Y | - |
| Object.getOwnPropertySymbols | - | Y | Y | - |
| Reflect.ownKeys | Y | Y | Y | - |
| Reflect.enumerate | Y | - | - | Y |

该 fiddle 用于演示[Reflect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect) 反射机制

```sh
$ npm install
$ npm run babel-node
```

---

操作函数化：

- [Reflect.has(target, key)](https://goo.gl/62nZBw)

- [Reflect.deleteProperty(target, key)](https://goo.gl/F3DRf5)

- [Reflect.get(target, key, receiver?)](https://goo.gl/gUQwZp)
- [Reflect.set(target, key, value, receiver?)](https://goo.gl/cmcNEy)

- [Reflect.apply(target, context, arguments)](https://goo.gl/y9ecR0)
- [Reflect.construct(target, arguments)](https://goo.gl/EOz0pf)

将 `Object` 中与反射机制相关的方法逐步移植到 `Reflect` 上（在自动类型转换及返回值处理上有些许区别）：

- [Reflect.defineProperty(target, key, descriptor)](https://goo.gl/LSo1aO)
- [Reflect.getOwnPropertyDescriptor(target, key)](https://goo.gl/HhfhRl)

- [Reflect.isExtensible(target)](https://goo.gl/f74lpa)
- [Reflect.preventExtensions(target)](https://goo.gl/PDZq0p)

- [Reflect.getPrototypeOf(target)](https://goo.gl/7WXYJO)
- [Reflect.setPrototypeOf(target, prototype)](https://goo.gl/B1A6H3)

枚举方法：

- [Reflect.ownKeys(target)](https://goo.gl/djlaCV)
- [Reflect.enumerate(target)](https://goo.gl/nLTSLR)

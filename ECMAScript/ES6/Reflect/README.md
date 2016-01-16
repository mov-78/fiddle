该 fiddle 用于演示[Reflect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect) 反射机制

```sh
$ npm install
$ npm run babel-node
```

---

操作函数化：

- [Reflect.has(target, key)](http://mzl.la/1Piclpz)

- [Reflect.deleteProperty(target, key)](http://mzl.la/1J8VUjd)

- [Reflect.get(target, key, receiver?)](http://mzl.la/1li8AbP)
- [Reflect.set(target, key, value, receiver?)](http://mzl.la/1Ox6Nb5)

- [Reflect.apply(target, context, args)](http://mzl.la/1U2sMdG)
- [Reflect.construct(target, args)](http://mzl.la/1UXegEp)

将 `Object` 中与反射机制相关的方法逐步移植到 `Reflect` 上（在自动类型转换及返回值处理上有些许区别）：

- [Reflect.defineProperty(target, key, descriptor)](http://mzl.la/1UXenQf)
- [Reflect.getOwnPropertyDescriptor(target, key)](http://mzl.la/1li8TU7)

- [Reflect.isExtensible(target)](http://mzl.la/1ZDx7Lg)
- [Reflect.preventExtensions(target)](http://mzl.la/1npMRQK)

- [Reflect.getPrototypeOf(target)](http://mzl.la/1Qdqdq1)
- [Reflect.setPrototypeOf(target, prototype)](http://mzl.la/1ZrzviM)

枚举方法：

- [Reflect.ownKeys(target)](http://mzl.la/1U2t44j)
- [Reflect.enumerate(target)](http://mzl.la/1n8WraX)

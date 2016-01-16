该 fiddle 用于演示 [Proxy](http://mzl.la/1ZCMa84) 反射机制

```sh
$ npm install
$ npm run compile
$ open index.html
$ # make clean
```

---

操作函数化：

- [handler.has(target, key)](http://mzl.la/1nmxjNU)

- [handler.deleteProperty(target, key)](http://mzl.la/1TZ26dS)

- [handler.get(target, key, receiver?)](http://mzl.la/1Zoq0AS)
- [handler.set(target, key, value, receiver?)](http://mzl.la/233rxkK)

- [handler.apply(target, context, args)](http://mzl.la/1ZoT5MC)
- [handler.construct(target, args)](http://mzl.la/1SlU29k)

将 `Object` 中与反射机制相关的方法逐步移植到 `Reflect` 上（在自动类型转换及返回值处理上有些许区别）：

- [handler.defineProperty(target, key, descriptor)](http://mzl.la/1SRxNHE)
- [handler.getOwnPropertyDescriptor(target, key)](http://mzl.la/1Pfhnmx)

- [handler.isExtensible(target)](http://mzl.la/1P41AgA)
- [handler.preventExtensions(target)](http://mzl.la/1Kh0pTM)

- [handler.getPrototypeOf(target)](http://mzl.la/1Pfhwqe) // TODO
- [handler.setPrototypeOf(target, prototype)](http://mzl.la/1RSMNUW) // TODO

枚举方法：

- [handler.ownKeys(target)](http://mzl.la/1RpopeX)
- [handler.enumerate(target)](http://mzl.la/1PvCPnR) // TODO

该 fiddle 用于演示[类语法糖](http://mzl.la/1Pid221)

```sh
$ npm install
$ npm run babel-node
```

---

类声明：

```js
class Parent {
}

class Child extends Parent {

  constructor(...args) {
    super(...args)
  }

  instanceMethod(...args) {
    super.instanceMethod(...args)
  }

  static staticMethod(...args) {
    super.staticMethod(...args)
  }

  get accessor() { /* codes */ }
  set accessor(value) { /* codes */ }

  [Symbol.iterator]() { /* codes */ }

}
```

类表达式：

```js
let obj = new class { /* codes */ }

let Foo = class Bar { /* codes */ }
```

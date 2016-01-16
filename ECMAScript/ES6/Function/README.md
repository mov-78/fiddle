该 fiddle 用于演示函数类型（[Function](http://mzl.la/1SceDhn)）的扩展

```sh
$ npm install
$ npm run babel-node
```

---

形参默认值（不计入 `fn.length` 内）：

- function fn(x, y = 0) // 基本用例
- function fn({ x, y = 0 }) // 解构赋值
- function fn({ x, y = 0 } = { x: 0, y: 0 }) // 形参默认值 + 解构赋值默认值

REST 形参：

```js
function fn(head, ...tail) {}
let [ m, ...n ] = [ 1, 2, 3 ]
```

SPREAD 操作符：

```js
fn(...[ 1, 2, 3 ])
fn(...[ ...[ 1, 2], 3 ])
```

箭头函数：

- (args) => { statements }
- (args) => expression
  - 等同于 (args) => { return expression }
- arg => { statements }   // 只有一个形参时可省略圆括号
- () => { statements }    // 没有形参时不可省略圆括号
- () => ({ foo: 'bar' })  // 特例：函数体为对象字面量表达式
- 支持 REST 形参、解构赋值及形参默认值
- 词法 this 关键字
- `this` 关键字不再自动绑定而是从外围作用域中继承（`lexical this`）

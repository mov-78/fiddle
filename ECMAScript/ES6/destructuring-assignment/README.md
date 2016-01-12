该 fiddle 用于演示变量的解构赋值

```sh
$ npm install
$ npm run babel-node
```

---

```js
let [ foo ] = [ /* Array */ ]
let [ foo = expression(/* 惰性求值 */) ] = [ /* Array */ ]

let { bar } = { /* Object */ }
let { bar = expression(/* 惰性求值 */) }= { /* Object */ }
let { baz : bar } = { /* Object */ }  // baz 仅用于模式匹配
let { baz : bar = expression(/* 惰性求值*/) } = { /* Object */ }
```

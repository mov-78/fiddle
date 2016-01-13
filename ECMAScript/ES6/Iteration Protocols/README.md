该 fiddle 用于演示[迭代协议](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

```sh
$ npm install
$ npm run babel-node
```

---

```js
let iterator = {
  next() {
    return {
      done  : false,
      value : 'ANY'
    }
  }
}

let iterable = {
  [Symbol.iterator]() {
    return iterator
  }
}
```

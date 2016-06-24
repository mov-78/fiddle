该 fiddle 用于演示[迭代协议](http://mzl.la/1SopN1G)

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

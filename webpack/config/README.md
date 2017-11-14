```js
module.exports = { /* config */ }
```

```js
module.exports = function (env) {
    return { /* config */ }
}
```

```js
module.exports = function (env) {
    return new Promise(function (resolve) {
        resolve({ /* config */ })
    })
}
```

```js
module.exports = [{ /* config */ }]
```

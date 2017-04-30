__context__

```js
module.exports = {
    context: path.resolve(__dirname, 'app')
}
```

- 必须为绝对路径
- 默认值为 `process.cwd()`

---

__entry__

```js
module.exports = {
    entry: './index'
}

module.exports = {
    entry: ['./index', './about']
}

module.exports = {
    entry: {
        index: './index',
        about: './about'
    }
}
```

```js
module.exports = {
    entry() {
        return './index'
    }
}

module.exports = {
    entry() {
        return ['./index', './about']
    }
}

module.exports = {
    entry() {
        return {
            index: './index',
            about: './about'
        }
    }
}
```

```js
module.exports = {
    entry() {
        return new Promise(function (resolve, reject) {
            resolve('./index')
        })
    }
}

module.exports = {
    entry() {
        return new Promise(function (resolve, reject) {
            resolve(['./index', './about'])
        })
    }
}

module.exports = {
    entry() {
        return new Promise(function (resolve, reject) {
            resolve({
                index: './index',
                about: './about'
            })
        })
    }
}
```

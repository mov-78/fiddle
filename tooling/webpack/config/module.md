__module.noParse__

```js
module.exports = {
    module: {
        noParse: RegExp | RegExp[]
    }
}
```

__module.rules__

<p align="center"><img src="http://ocv7sq6bh.bkt.clouddn.com/webpack-Rule.svg?1" alt="webpack-Rule"></p>

```js
module.exports = {
    module: {
        rules: Rule[]
    }
}
```

Condition:

- string
- regex
- function: (string) => boolean
- Condition[]
- { and: Condition[] }
- { or: Condition[] }
- { not: Condition[] }
- { test?: Condition, include?: Condition, exclude?: Condition }

UseEntry:

- string
- { loader: string, options?: string|object }

---

- [configuration/module](https://webpack.js.org/configuration/module/)

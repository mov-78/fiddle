__module.noParse__

忽略对特定文件的的静态分析

```js
module.noParse: RegExp | RegExp[]
```

__module.rules__

指定加载器规则

<p align="center"><img src="http://ocv7sq6bh.bkt.clouddn.com/webpack-Rule.svg" alt="webpack-Rule"></p>

```js
module.rules: Rule[]
```

```js
type Rule = {

    issuer?: Condition,

    resource?: Condition,
    resourceQuery?: Condition,

    enforce?: void | 'pre' | 'post',
    use?: UseEntry | UseEntry[],

    rules?: Rule[],
    oneOf?: Rule[]

}
```

```js
type Condition = string | RegExp | ((string) => boolean) | Condition[] | {|

    test?: Condition,

    include?: Condition,
    exclude?: Condition,

    and?: Condition[],
    or?: Condition[],
    not?: Condition[]

|}
```

```js
type UseEntry = string | {
    loader: string,
    options?: string | {[string]: any}
}
```

---

- [configuration/module](https://webpack.js.org/configuration/module/)

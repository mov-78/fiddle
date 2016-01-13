该 fiddle 用于演示数值类型（[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)）的扩展

```sh
$ npm install
$ npm run babel-node
```

---

- 新增了指数操作符：`m ** n`
- 新增了数值的二进制及八进制表示法：`0b1101`，`0o700`
- 新增了更加可靠的 `Number.isNaN` 及 `Number.isFinite`
- `Number.isInteger`：用于判断一个值是否是整数值
- 安全整数：
  - `Number.MIN_SAFE_INTEGER`
  - `Number.MAX_SAFE_INTEGER`
  - `Number.isSafeInteger`
- `Number.EPSILON`

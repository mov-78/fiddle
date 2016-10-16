```js
// define 可以为「自由变量」或「全局变量」
define( [id:String] , [dependencies:String[]] , factory:Object|Function )
```

__id__

模块标识（可选）：

- 必须为字面量
- 若未指定，则默认为模块加载器所请求的指定脚本的绝对路径

__dependencies__

模块依赖项（可选）：

- 必须为字面量
- 依赖项并行加载执行，且仅当所有依赖项执行完毕后才执行当前模块
- 预留模块标识 `require`、`exports`、`module` 走独立的解析流程（遵循 CommonJS 语义）
- 若未指定，则默认为 `[ 'require' , 'exports' , 'module' ]` — 此时将蜕变为 CommonJS 包装模块

__factory__

模块定义，可以为「对象」或「函数」：

- 若为「对象」，则该对象即为模块的「输出值」
- 若为「函数」，则该函数的返回值即为模块的「输出值」
- 模块定义仅执行一次

---

- [AMD 模块规范](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)

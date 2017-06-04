__[this.callback](https://webpack.js.org/api/loaders/#this-callback)__

向 [loader-runner](https://github.com/webpack/loader-runner) 输出转换结果

```js
this.callback(err: Error | null, content: string | Buffer, sourceMap?: SourceMap)
```

> - 可异步调用（`assert(this.callback === this.async())`）
> - 对于同步调用且返回值只有一个（`content: string | Buffer`）的情况下，可以直接 `return` 该值而无需调用 `this.callback`
> - 调用 `this.callback` 后，必须返回 `undefined` 来避免歧义
> - `sourceMap` 实参必须可以被 [mozilla/source-map](https://github.com/mozilla/source-map) 模块解析

---

__[this.async](https://webpack.js.org/api/loaders/#this-async)__

激活异步模式

```js
assert(this.async() === this.callback)
```

---

__[this.data](https://webpack.js.org/api/loaders/#this-data)__

在 pitch 及 normal 阶段之间共享的数据对象

---

__[this.request](https://webpack.js.org/api/loaders/#this-request)__

解析后的模块请求

> `require('./loader!./resource?query')` → `'/path/to/loader.js!/path/to/resource.js?query'`

__[this.resource](https://webpack.js.org/api/loaders/#this-resource)__

模块请求的资源部分

> `require('./loader!./resource?query')` → `'/path/to/resource.js?query'`

__[this.resourcePath](https://webpack.js.org/api/loaders/#this-resourcepath)__

资源本地路径

> `require('./loader!./resource?query')` → `'/path/to/resource.js'`

__[this.resourceQuery](https://webpack.js.org/api/loaders/#this-resourcequery)__

资源查询字符串

> `require('./loader!./resource?query')` → `'?query'`

__[this.context](https://webpack.js.org/api/loaders/#this-context)__

资源所在目录的绝对路径

---

__[this.query](https://webpack.js.org/api/loaders/#this-query)__

获取 loader 参数

> - 对于内联请求，返回对应的查询字符串
> - 否则返回配置文件中对应的配置项对象

---

__[this.loaders](https://webpack.js.org/api/loaders/#this-loaders)__

当前模块请求中涉及到的所有 loader 的元数据

> 在 pitch 阶段可写

__[this.loaderIndex](https://webpack.js.org/api/loaders/#this-loaderindex)__

当前 loader 在 `this.loaders` 数组中的位置索引

---

__[this.target](https://webpack.js.org/api/loaders/#this-target)__

当前配置指定的部署环境

> 依据 [target](../config/target.md) 配置项

__[this.sourceMap](https://webpack.js.org/api/loaders/#this-sourcemap)__

当前配置是否需要生成 SourceMap

> 依据 [devtool](../config/devtool.md) 配置项

---

__[this.emitWarning](https://webpack.js.org/api/loaders/#this-emitwarning)__

触发一个警告

```js
this.emitWarning(message: string)
```

__[this.emitError](https://webpack.js.org/api/loaders/#this-emiterror)__

触发一个错误

```js
this.emitError(message: string)
```

---

__[this.emitFile](https://webpack.js.org/api/loaders/#this-emitfile)__

生成静态资源

```js
this.emitFile(filename: string, content: string | Buffer, sourceMap?: SourceMap)
```

---

__[this.addDependency](https://webpack.js.org/api/loaders/#this-adddependency)__

追加文件监控依赖

```js
this.addDependency(name: string)
this.dependency(name: string) // 简写形式
```

__[this.addContextDependency](https://webpack.js.org/api/loaders/#this-addcontextdependency)__

追加目录监控依赖

```js
this.addContextDependency(name: string)
```

__this.getDependencies__

获取文件监控依赖

```js
this.getDependencies(): string[]
```

__this.getContextDependencies__

获取目录监控依赖

```js
this.getContextDependencies(): string[]
```

__[this.clearDependencies](https://webpack.js.org/api/loaders/#this-cleardependencies)__

清空全部监控依赖

```js
this.clearDependencies()
```

---

__[this.resolve](https://webpack.js.org/api/loaders/#this-resolve)__

以解析 `require` 表达式的方式异步解析一个模块请求

```js
this.resolve(context: string, request: string, callback: (err: Error | null, result: string) => void)
```

---

__[this.loadModule](https://webpack.js.org/api/loaders/#this-loadmodule)__

解析给定的模块请求，在应用所有 loader 后，返回对应的模块信息

```js
this.loadModule(request: string, callback: (err: Error | null, source: string, sourceMap: SourceMap, module: Module) => void)
```

---

- [Loaders](https://webpack.js.org/loaders/)
- [Loader API](https://webpack.js.org/api/loaders/)
- [loader-utils](https://github.com/webpack/loader-utils)

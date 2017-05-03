__output.path__

指定静态资源输出目录

```js
module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist') // 必须为绝对路径
    }
}
```

> 支持 `[hash]` 模板

__output.publicPath__

指定静态资源 URL

```js
module.exports = {
    output: {
        publicPath: '//static.example.com/assets/'
    }
}
```

> - 支持 `[hash]` 模板
> - 可以通过在入口模块中设置 `__webpack_public_path__` 自由变量来在运行时指定静态资源 URL

__output.pathinfo__

控制是否在 bundle/chunk 中（以注释形式）包含原始模块路径信息

```js
module.exports = {
    output: {
        pathinfo: process.env.NODE_ENV != 'production'
    }
}
```

---

__output.filename__

指定 bundle 文件名

```js
module.exports = {
    output: {
        filename: '[name].js'
    }
}
```

__output.chunkFilename__

指定按需加载的 chunk 的文件名

```js
module.exports = {
    output: {
        chunkFilename: '[id].js'
    }
}
```

| 模板 | 描述 |
| - | - |
| [hash] | 构建哈希 |
| [chunkhash] | chunk 内容哈希 |
| [name] | 入口模块名（或 chunk ID） |
| [id] | chunk ID |

> - [TemplatedPathPlugin](https://github.com/webpack/webpack/blob/master/lib/TemplatedPathPlugin.js)
> - `webpack.optimize.CommonsChunkPlugin` 切割的 chunk 应用的是 `output.filename` 选项

---

__output.library__

指定 bundle 输出名称

```js
module.exports = {
    output: {
        library: 'undash'
    }
}
```

__output.libraryTarget__

指定 bundle 输出格式

```js
module.exports = {
    output: {
        libraryTarget: 'umd' // 默认为 var
        umdNamedDefine: true // 控制当 libraryTarget=umd 时，是否使用具名 AMD 模块
    }
}
```

支持的格式：

- var（默认值）
- assign
- this
- window
- global
- commonjs[2]
- amd
- umd
- jsonp

---

- [configuration/output](https://webpack.js.org/configuration/output/)
- [guides/caching](https://webpack.js.org/guides/caching/)
- [guides/author-libraries](https://webpack.js.org/guides/author-libraries/)

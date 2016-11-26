```js
define.cmd // 空对象，可用于判断当前环境中是否存在 CMD 加载器

define( factory )               // 匿名模块
define( id , deps , factory )   // 具名模块
```

## id

模块标识

## deps

模块依赖项

## factory

模块构造函数，执行时会传入三个参数：

__require__

`require` 方法用于加载模块

- `require( id )` — 同步阻塞加载
- `require.async( ids , callback )` — 异步回调加载
- `require.resolve( id )` — 利用模块系统内部的路径解析机制来获取指定模块标识对应的绝对路径

> 在开发阶段，书写 CMD 模块时需要遵循一些简单的[约定](https://github.com/seajs/seajs/issues/259)

__exports__

`exports` 对象用于提供对外接口

> - 亦可以通过 `return` 语句来提供对外接口
> - `exports` 仅为 `module.exports` 对象的一个引用

__module__

`module` 对象用于获取当前模块的元数据

- `module.id` — 当前模块在模块系统内部的唯一标识（等价于 `module.uri`）
- `module.uri` — 利用模块系统内部的路径解析机制得到的当前模块的绝对路径
- `module.dependencies` — 当前模块的依赖项
- `module.exports` — 当前模块对外提供的接口

---

- [模块标识](./id.md)
- [CMD 模块定义规范](https://github.com/seajs/seajs/issues/242)
- [require 书写约定](https://github.com/seajs/seajs/issues/259)
- [为什么要有约定和构建工具](https://github.com/seajs/seajs/issues/426)
- [src/module.js#L300](https://github.com/seajs/seajs/blob/3.0.0/src/module.js#L300)

该 fiddle 用于分析 webpack 在遇到动态 require 请求时自动生成的上下文模块

```js
// dist/bundle.js

// ...

// [0] 号模块对应 scripts/main 模块
// webpack 将 require 请求进行了如下改写：
var message = __webpack_require__(1)('./' + module)
// 其中 [1] 号模块为 [0] 号模块对应的上下文模块

// ...

// [1] 号模块为 [0] 号模块的上下文模块

// map 中缓存了所有可能的请求及它们对应的内部模块 ID
var map = {
  './bar': 2,     // [2] 号模块对应 scripts/lib/bar
  './bar.js': 2,  // [2] 号模块对应 scripts/lib/bar
  './foo': 3,     // [3] 号模块对应 scripts/lib/foo
  './foo.js': 3   // [3] 号模块对应 scripts/lib/foo
}

// webpackContext(req)        => module.exports
// webpackContextResolve(req) => module.exports.resolve
function webpackContext(req) {
  // 用于加载动态请求
  return __webpack_require__(webpackContextResolve(req))
}
function webpackContextResolve(req) {
  // 用于将动态 require 请求转换成对应内部模块 ID 或者抛出异常
  return map[req] || (function() { throw new Error() }())
}

// export.id & export.keys() & export.resolve()
webpackContext.id = 1
webpackContext.resolve = webpackContextResolve
webpackContext.keys = function webpackContextKeys() {
  return Object.keys(map)
}

// __webpack_require__(id)
// __webpack_require__(contextModuleID)(req)
module.exports = webpackContext

// ...
```

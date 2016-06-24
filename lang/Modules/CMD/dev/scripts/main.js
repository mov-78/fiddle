console.log('main:define')

// 模块定义
define(function factory(require, exports, module) {

  // 模块执行（仅执行一次 factory 函数）
  console.log('main:execute')

  //
  // 同步加载依赖
  // require(id)
  //

  console.group('require.resolve(id)')
  console.log(require.resolve('./lib/foo'))         // 相对标识
  console.log(require.resolve('lib/foo'))           // 顶级标识
  console.log(require.resolve('/scripts/lib/foo'))  // 普通路径
  console.groupEnd()

  console.group('同步加载依赖')

  // 相对标识：相对于当前模块解析
  var foo = require('./lib/foo') // 在 require 时才执行（至多一次）对应的 factory 函数
  console.log(foo)

  // 顶级标识：相对于根路径解析（config.base）
  var bar = require('lib/bar') // 在 require 时才执行（至多一次）对应的 factory 函数
  console.dir(bar)

  // 普通路径：相对于当前页面解析
  var baz = require('/scripts/lib/baz') // 在 require 时才执行（至多一次）对应的 factory 函数
  baz.log('baz')

  console.groupEnd()


  //
  // 异步加载依赖
  // require.async(id|ids, callback?)
  //

  require.async(
    [ 'lib/foo', 'lib/bar', 'lib/baz' ],
    function callback(foo, bar, baz) {

      console.group('异步加载依赖')

      console.log(foo)
      console.dir(bar)
      baz.log('baz')

      console.groupEnd()

    }
  )


  //
  // module 自由变量
  //

  module.exports = function fn() {}
  console.group('module 自由变量')
  console.dir(module)
  console.dir(Object.assign({}, module))
  console.groupEnd()

  // 覆盖之前通过 exports 或 module.exports 暴露的接口
  return function noop() {}

})

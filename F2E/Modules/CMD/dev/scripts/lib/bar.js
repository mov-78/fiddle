console.log('bar:define')

// 模块定义
define(function factory(require, exports, module) {

  // 模块执行（仅执行一次 factory 函数）
  console.log('bar:execute')

  return {
    foo: 'bar'
  }

})

// 对于对象模块，也可以这样定义：
// define({ foo: 'bar' })

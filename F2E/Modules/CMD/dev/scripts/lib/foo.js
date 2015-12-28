console.log('foo:define')

// 模块定义
define(function factory(require, exports, module) {

  // 模块执行（仅执行一次 factory 函数）
  console.log('foo:execute')

  return 'template'

})

// 对于字符串模板模块，也可以这样定义：
// define('template')

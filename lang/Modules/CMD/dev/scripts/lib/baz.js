console.log('baz:define')

// 模块定义
define(function factory(require, exports, module) {

  // 模块执行（仅执行一次 factory 函数）
  console.log('baz:execute')

  // [1] 通过 exports 暴露接口
  // exports 仅为 module.exports 对象的一个引用
  exports.log = function log(msg) {
    console.log(msg)
  }

  // [2] 通过 module.exports 暴露接口
  module.exports = {
    log: function log(msg) {
      console.log(msg)
    }
  }

  // [3] 通过 return 暴露接口
  // return mod 等同于 module.exports = mod
  return {
    log: function log(msg) {
      console.log(msg)
    }
  }

})

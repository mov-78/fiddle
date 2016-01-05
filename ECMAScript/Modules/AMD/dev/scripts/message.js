// 字符串模板模块
// 不可以直接：
//    define('Bonjour!')
// 因为这里 require.js 把这个唯一的字符串识别成了 moduleID 而不是 factory

define(function factory() {
  return 'Bonjour!'
})

function syncFallback(content) {
  return content
}

module.exports = function factory(content) {

  // 调用 this.async() 来告知 webpack 这是一个异步加载器
  var callback = this.async()
  var shouldPass = Math.random() > 0.5

  console.log('shouldPass:', shouldPass)
  console.log('this.async() === this.callback:', callback === this.callback)

  if (callback) {
    // 支持异步加载器
    setTimeout(function timeout() {
      if (shouldPass) {
        // 异步加载器需要调用 callback(err, values...) 来传递结果
        callback(null, content)
      } else {
        // 以及抛出异常（直接通过 throw 抛出异常不会被 webpack 捕获）
        callback(new Error('shouldPass === false'))
      }
    }, 3000)
  } else {
    // 不支持异步加载器
    return syncFallback(content)
  }
}

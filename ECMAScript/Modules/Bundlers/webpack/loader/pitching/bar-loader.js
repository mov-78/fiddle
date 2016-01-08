// normal loader 倒序执行
// 如 x!y!z! 的执行顺序为：z -> y -> x
module.exports = function factory(content) {

  console.log('---------------- normal:bar -----------------')
  console.log('content:', content)
  console.log('this.data:', this.data)

  return content

}

// pitching loader 顺序执行，且先于所有 normal loader 执行
module.exports.pitch = function pitch(remainingRequest, precedingRequest, data) {

  console.log('----------------- pitch:bar -----------------')
  console.log('remainingRequest:', remainingRequest)
  console.log('precedingRequest:', precedingRequest)

  // 如果 pitching loader 中有返回值，则 webpack 会忽略掉后续（声明右边）的所有 loader，
  // 以这个返回值为新的 resource，开始倒序逐一调用该 pitching loader 之前的所有 normal loader
  return 'module.exports = "pitched!"'

}

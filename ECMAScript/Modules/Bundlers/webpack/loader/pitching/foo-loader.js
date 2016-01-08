// normal loader 倒序执行
// 如 x!y!z! 的执行顺序为：z -> y -> x
module.exports = function factory(content) {

  console.log('---------------- normal:foo -----------------')
  console.log('content:', content)
  console.log('this.data:', this.data)

  return content

}

// pitching loader 顺序执行，且先于所有 normal loader 执行
module.exports.pitch = function pitch(remainingRequest, precedingRequest, data) {

  console.log('----------------- pitch:foo -----------------')
  console.log('remainingRequest:', remainingRequest)
  console.log('precedingRequest:', precedingRequest)

}

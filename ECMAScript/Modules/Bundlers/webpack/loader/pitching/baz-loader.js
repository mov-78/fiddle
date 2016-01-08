// normal loader 倒序执行
// 如 x!y!z! 的执行顺序为：z -> y -> x
module.exports = function factory(content) {

  console.log('---------------- normal:baz -----------------')
  console.log('content:', content)
  console.log('this.data:', this.data)

  return content

}

// pitching loader 顺序执行，且先于所有 normal loader 执行
module.exports.pitch = function pitch(remainingRequest, precedingRequest, data) {

  console.log('----------------- pitch:baz -----------------')
  console.log('remainingRequest:', remainingRequest)
  console.log('precedingRequest:', precedingRequest)

  // pitching loader 与其对应的 normal loader 之间可以共享数据：
  //  - 在 normal loader 中可以通过 this.data 来获取数据
  //  - 在 pitching loader 中可以通过 data 参数设置数据
  data.message = 'blablabla'

}

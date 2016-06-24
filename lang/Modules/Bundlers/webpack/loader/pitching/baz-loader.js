// exports 用于定义加载器在 normal 阶段的行为
module.exports = function factory(content) {

  console.log('---------------- normal:baz -----------------')
  console.log('content:', content)
  console.log('this.data:', this.data) // 获取该加载器在 pitching 阶段设置的数据

  return content

}

// exports.pitch 用于定义加载器在 pitching 阶段的行为
module.exports.pitch = function pitch(remainingRequest, precedingRequest, data) {

  console.log('--------------- pitching:baz ----------------')
  console.log('remainingRequest:', remainingRequest)
  console.log('precedingRequest:', precedingRequest)

  // 加载器可在 normal 及 pitching 阶段间共享数据：
  //  - 在 normal 阶段可以通过 this.data 来获取共享数据
  //  - 在 pitching 阶段可以通过 data 参数设置共享数据
  data.message = 'blablabla'

}

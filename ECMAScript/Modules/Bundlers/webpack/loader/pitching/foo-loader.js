// exports 用于定义加载器在 normal 阶段的行为
module.exports = function factory(content) {

  console.log('---------------- normal:foo -----------------')
  console.log('content:', content)
  console.log('this.data:', this.data) // 获取该加载器在 pitching 阶段设置的数据

  return content

}

// exports.pitch 用于定义加载器在 pitching 阶段的行为
module.exports.pitch = function pitch(remainingRequest, precedingRequest, data) {

  console.log('--------------- pitching:foo ----------------')
  console.log('remainingRequest:', remainingRequest)
  console.log('precedingRequest:', precedingRequest)

}

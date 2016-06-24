// exports 用于定义加载器在 normal 阶段的行为
module.exports = function factory(content) {

  console.log('---------------- normal:bar -----------------')
  console.log('content:', content)
  console.log('this.data:', this.data) // 获取该加载器在 pitching 阶段设置的数据

  return content

}

// exports.pitch 用于定义加载器在 pitching 阶段的行为
module.exports.pitch = function pitch(remainingRequest, precedingRequest, data) {

  console.log('--------------- pitching:bar ----------------')
  console.log('remainingRequest:', remainingRequest)
  console.log('precedingRequest:', precedingRequest)

  // 如果 exports.pitch 中存在返回值，则 webpack 会忽略掉后续（声明右边）的所有加载器
  // 以这个返回值为新的 resource，开始倒序逐一调用该加载器之前的所有加载器
  return 'module.exports = "pitched!"'

}

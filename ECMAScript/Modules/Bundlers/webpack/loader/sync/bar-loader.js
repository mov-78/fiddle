module.exports = function factory(content) {

  console.log('---------------- loader:bar -----------------')
  console.log('content:', content)
  console.log('---------------------------------------------')

  // 若需要返回多个值，需要调用 this.callback(err, values...) 来返回这些值
  this.callback(null, content.toLowerCase(), new Date())

}

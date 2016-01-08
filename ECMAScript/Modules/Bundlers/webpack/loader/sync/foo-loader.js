module.exports = function factory(content) {

  console.log('---------------- loader:foo -----------------')
  console.log('content:', content)
  console.log('---------------------------------------------')

  // 若只有一个返回值，则可以通过 return 返回该值
  return content.toUpperCase()

}

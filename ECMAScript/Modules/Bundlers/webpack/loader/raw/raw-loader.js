module.exports = function factory(content) {

  // 当 true === module.exports.raw 时
  // webpack 会将参数 content 自动转换为 Buffer 类型
  // 否则 content 为 UTF-8 字符串
  console.assert(content instanceof Buffer)

  // 返回值可以是 String 也可以是 Buffer，webpack 会自动按需进行类型转换
  return content

}

module.exports.raw = true

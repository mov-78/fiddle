//
// Unicode 转义语法扩展：\u{XXXXXXXX}
// 对字符串 Unicode 转义语法进行了扩展，可以表示码点超过 [\u0000, \uFFFF] 区间的字符
//

console.log('\\u1030F: \u1030F')
console.log('\\u{1030F}: \u{1030F}')

console.log(
  '"\\u{1030F}".charCodeAt(0).toString(16):',
  '\u{1030F}'.charCodeAt(0).toString(16)
)
console.log(
  '"\\u{1030F}".codePointAt(0).toString(16):',
  '\u{1030F}'.codePointAt(0).toString(16)
)

console.log('String.fromCharCode(0x1030F):', String.fromCharCode(0x1030F))
console.log('String.fromCodePoint(0x1030F):', String.fromCodePoint(0x1030F))


//
// String.prototype 扩展
//

console.log('h'.repeat(7))

console.log('foobar'.startsWith('foo'))
console.log('foobar'.startsWith('ob', 3))
console.log('foobar'.endsWith('bar'))
console.log('foobar'.endsWith('b', 3))
console.log('foobar'.includes('oba'))
console.log('foobar'.includes('oba', 3))


//
// 模板字符串
//

console.log(`Victoria's Secret`) // 使用反引号作为字符串分隔符

console.log(`<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body></body>
</html>`) // 允许跨行（保留缩进及换行）

let user = { name: 'Pwn' }
console.log(`username: ${user.name}`) // 支持变量插值（任意合法的 JavaScript 表达式）


//
// 标签模板字符串
//

let tag = function tag(literalStrings, ...cookedSubstitutions) {

  // 字符串字面量列表
  console.log('literalStrings:', literalStrings)

  // 处理后（cooked）的插值表达式列表
  console.log('cookedSubstitutions:', cookedSubstitutions)

  return 'tagged template string'

}

console.log(tag`Hello, ${user.name}!`)

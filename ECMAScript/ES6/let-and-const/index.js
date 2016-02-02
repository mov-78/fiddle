// let 用于声明变量（不允许重复声明）
let a = 1, b
console.assert(1 === a)
console.assert(undefined === b)

// const 用于声明常量（不允许重复声明）
// 声明时必须同时赋值
const c = 2
console.assert(2 === c)

// 对于对象数据仅确保引用为常量
const d = [ 'foo', 'bar' ]
console.assert('bar' === d[1])
d[1] = 'baz'
console.assert('baz' === d[1])

// let 及 const 均提供了块级作用域
// e, f 在此均未定义
{
  let e = 3
  const f = 4
  console.assert(3 === e)
  console.assert(4 === f)
}
// e, f 在此均未定义

// let 及 const 均不存在变量提升（但是存在暂时性死区 TDZ）
let g = 5
const h = 6
console.assert(5 === g)
console.assert(6 === h)
{
  // TDZ 开始
  console.assert(undefined === g)
  console.assert(undefined === h)
  // TDZ 结束
  let g = 7
  const h = 8
  console.assert(7 === g)
  console.assert(8 === h)
}
console.assert(5 === g)
console.assert(6 === h)

// let 用于声明变量（不允许重复声明）
let a = 1, b
console.assert(a === 1)
console.assert(b === undefined)

// const 用于声明常量（不允许重复声明）
// 声明时必须同时赋值
const c = 2
console.assert(c === 2)

// 对于对象数据仅确保引用为常量
const d = [ 'foo', 'bar' ]
console.assert(d[1] === 'bar')
d[1] = 'baz'
console.assert(d[1] === 'baz')

// let 及 const 均提供了块级作用域
// e, f 在此均未定义
{
  let e = 3
  const f = 4
  console.assert(e === 3)
  console.assert(f === 4)
}
// e, f 在此均未定义

// let 及 const 均不存在变量提升（但是存在暂时性死区 TDZ）
let g = 5
const h = 6
console.assert(g === 5)
console.assert(h === 6)
{
  // TDZ 开始
  console.assert(undefined === g)
  console.assert(undefined === h)
  // TDZ 结束
  let g = 7
  const h = 8
  console.assert(g === 7)
  console.assert(h === 8)
}
console.assert(g === 5)
console.assert(h === 6)

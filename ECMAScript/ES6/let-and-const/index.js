// let 用于声明变量（不允许重复声明）
let a = 1, b
console.log('a:', a)
console.log('b:', b)

// const 用于声明常量（不允许重复声明）
// 声明时必须同时赋值
const c = 2
console.log('c:', c)

// 对于对象数据仅确保引用为常量
const d = [ 'foo', 'bar' ]
console.log('d:', d)
d[1] = 'baz'
console.log('d:', d)

// let 及 const 均提供了块级作用域
// e, f 在此均未定义
{
  let e = 3
  const f = 4
  console.log('e:', e)
  console.log('f:', f)
}
// e, f 在此均未定义

// let 及 const 均不存在变量提升（但是存在暂时性死区 TDZ）
let g = 5
const h = 6
console.log('g:', g)
console.log('h:', h)
{
  // TDZ 开始
  console.log('g:', g)
  console.log('h:', h)
  // TDZ 结束
  let g = 7
  const h = 8
  console.log('g:', g)
  console.log('h:', h)
}
console.log('g:', g)
console.log('h:', h)

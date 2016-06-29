//
// 形参默认值
//

{

  // 基本用例
  function f1(x, y = 0) {
    console.log(`[f1] x:${x}, y:${y}`)
  }
  console.assert(f1.length === 1) // 形参默认值不计入 fn.length 内

  f1(1, 2)
  f1(1)
  f1()

  // 解构赋值
  function f2({ x, y = 0 }) {
    console.log(`[f2] x:${x}, y:${y}`)
  }
  console.assert(f2.length === 1)

  f2({ x: 1, y: 2 })
  f2({ x: 1 })
  f2({})
  try {
    f2()
  } catch(err) {
    console.assert(err instanceof TypeError)
  }

  // 形参默认值 + 结构赋值默认值
  function f3({ x, y = 0 } = { x: 0, y: 0 }) {
    console.log(`[f3] x:${x}, y:${y}`)
  }
  console.assert(f3.length === 0) // 形参默认值不计入 fn.length 内

  f3({ x: 1, y: 2 })
  f3({ x: 1 })
  f3({})
  f3()

}


//
// REST 形参
//

{

  function fn(head, ...tail) {
    console.log('head:', head)
    console.log('tail:', tail)
    console.assert(Array.isArray(tail))
  }
  console.assert(fn.length === 1) // REST 形参不计入 fn.length 内

  fn('foo', 'bar', 'baz')
  fn('foo', 'bar')
  fn('foo')
  fn()

  // REST「形参」亦可应用于解构赋值解构中
  let [ m, ...n ] = [ 1, 2, 3 ]
  console.assert(Array.isArray(n))
  console.assert(n.length === 2)
  console.assert(n[0] === 2)
  console.assert(n[1] === 3)

}


//
// SPREAD 操作符
//

{

  function fn(x, y, z) {
    console.assert(x === 1)
    console.assert(y === 2)
    console.assert(z === 3)
  }

  // SPREAD 操作符用于「展开」iterable（可以理解为移除两边的方括号）

  fn(...[ 1, 2, 3 ])
  fn(...[ ...[ 1, 2], 3 ])

}


//
// 箭头函数
//

{

  function exec(fn, ...args) { console.log(fn(...args)) }

  // 基本格式
  exec(
    (x, y) => {
      let z = x + y
      return z
    },
    1, 2
  )

  // 简化格式[1]
  exec(
    (x, y) => x + y,  // 等同于 (x, y) => { return x + y }
    1, 2
  )

  // 简化格式[2]
  // - 只有一个形参时可省略圆括号
  // - 没有形参时不可省略圆括号
  exec(v => v, 'foobar')
  exec(() => 'foobar')

  // 特例：函数体为对象字面量表达式
  exec(() => ({ foo: 'bar' }))

  // this 关键字不再自动绑定而是从外围作用域中继承
  let obj = {
    fn1() {
      return function getThis() {
        return this
      }
    },
    fn2() {
      return () => this
    }
  }
  console.assert(!Object.is(obj.fn1()(), obj))
  console.assert(Object.is(obj.fn2()(), obj))

}
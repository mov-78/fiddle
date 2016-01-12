//
// 本地 Symbol
//

{

  // 通过 Symbol([desc]) 函数来生成一个本地 Symbol
  let s1 = Symbol()
  let s2 = Symbol('foo')    // desc 可选；仅作 debug 用
  let s3 = Symbol('foo')    // desc 不是 Symbol 的名字，所有本地 Symbol 都是匿名的
  console.assert(s2 !== s3) // 所有本地 Symbol 都是唯一的，不可变的

  try {
    let s4 = new Symbol()
  } catch(err){
    // Symbol 同 Number，String 等类似，都是标量类型
    // 所以 new Symbol() 主要是用来生成 Symbol 数据的 Wrapper Object
    // 但是从 ES6 开始已经不推荐了这种行为了，所以这里使用 new 会抛出异常
  }

  console.log(s1.toString())
  console.log(s2.toString())
  console.log(s3.toString())

  let obj = {
    [s1] : 'foobar' // Symbol 可用做对象属性名；这时必须要放在 [...] 内
  }
  console.log(obj[s1])

}

//
// 全局 Symbol
//

{

  // 通过 Symbol.for(key) 来生成（注册）或获取一个指定名字的 Symbol
  let s1 = Symbol.for('foo') // 生成 Symbol
  let s2 = Symbol.for('foo') // 获取 Symbol

  console.assert(s1 === s2) // 全局 Symbol 是具名的

  console.log(s1.toString())
  console.log(s2.toString())

  // 通过 Symbol.keyFor(sym) 来获取某个 Symbol 的名字
  console.log('Symbol.keyFor():', Symbol.keyFor(s1))

}

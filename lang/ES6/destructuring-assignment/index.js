const err = function () { throw new Error }

//
// 数组的解构赋值
//
{

  let [ a, b = err(), c = 'c', d = 'd', [ e, f ] ] = [ 'a', 'b', undefined, null, [ 'e' ] ]

  console.assert(a === 'a')       // 匹配成功
  console.assert(b === 'b')       // 匹配成功，忽略默认值；默认值表达式惰性求值，仅在不匹配时才会对其求值
  console.assert(c === 'c')       // 匹配失败，取默认值
  console.assert(d === null)      // 匹配成功（null !== undefined）
  console.assert(e === 'e')       // 匹配成功（递归匹配）
  console.assert(f === undefined) // 匹配失败，默认值为 undefined

}


//
// 对象的解构赋值
//
{

  let { a, b : c, d = 'd', 'e' : f = err() } = { a : 'a', b : 'b', e : 'e' }

  console.assert(a === 'a') // 匹配成功；等同于 let { a: a ... }
  console.assert(c === 'b') // 匹配成功；其中 b 键仅用于匹配
  console.assert(d === 'd') // 匹配失败，取默认值
  console.assert(f === 'e') // 匹配成功，忽略默认值；默认值表达式惰性求值，仅在不匹配时才会对其求值

  try {
    console.log(b)
  } catch (err) {
    console.assert(err instanceof ReferenceError)
  }

}

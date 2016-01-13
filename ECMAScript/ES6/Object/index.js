//
// 字面量语法扩展
//

{

  let name = 'Pwn'
  let emailKey = 'email'

  let author = {
    name,                       // 属性简写语法；等同于 name: name
    [emailKey]: 'hi@pwn.buzz',  // 属性名支持表达式
    toString() {                // 方法简写语法；等同于 toString: function () {}
      return `User ${this.name} <${this[emailKey]}>`
    },
    * generator() {
      yield this.name
      yield this[emailKey]
    }
  }

  console.log(author.toString())

}


//
// Object 对象的扩展
//

// Object.is(m, n)
// 用于判断两个值是否相等
// 语义与 === 基本一致，除了以下两种例外：
//  - Object.is(+0, -0)   # false
//  - Object.is(NaN, NaN) # true

console.log('+0 === -0:', +0 === -0)
console.log('NaN === NaN:', NaN === NaN)
console.log('Object.is(+0, -0):', Object.is(+0, -0))
console.log('Object.is(NaN, NaN):', Object.is(NaN, NaN))

// Object.getPrototypeOf(obj)
// Object.setPrototypeOf(obj, prototype)
// 用于设置或获取 [[Prototype]] 内部属性

{

  let proto = {}

  let obj1 = Object.create(proto)
  console.assert(Object.getPrototypeOf(obj1) === proto)

  let obj2 = Object.setPrototypeOf({}, proto)
  console.assert(Object.getPrototypeOf(obj2) === proto)

  let obj3 = Object.setPrototypeOf({}, null)
  console.assert(!('toString' in obj3))
  console.assert(null === Object.getPrototypeOf(obj3))

}

// Object.assign(target, ...sources)
// 用于将（多个）源对象的（枚举、非继承）属性复制到目标对象中

{

  // 同时支持字符串及符号属性
  let source1 = { a: 'a', [Symbol('b')]: 'Symbol(b)' }

  // 忽略非枚举属性
  Object.defineProperty(source1, 'c', { enumerable: false })

  // 忽略继承属性
  Object.setPrototypeOf(source1, { 'd': 'd' })

  // 同名属性会覆盖之前的定义
  let source2 = { a: 'overriden' }

  let source3 = {
    e: 'source3',
    get f() { return 'f' } // 目标对象中的 getter 会被调用
  }

  let target = {
    set e(value) { // 源对象中的 setter 会被调用
      console.log('setter called with:', value)
    }
  }

  Object.assign(target, source1, source2, source3)
  console.log('Reflect.ownKeys(target):', Reflect.ownKeys(target))
  console.log('target.a:', target.a)

}


//
// 属性的遍历
//  - [ES3+] for...in
//  - [ES5+] Object.keys(obj)
//  - [ES5+] Object.getOwnPropertyNames(obj)
//  - [ES6+] Object.getOwnPropertySymbols(obj)
//  - [ES6+] Reflect.ownKeys(obj)
//  - [ES6+] Reflect.enumerate(obj)
//

{

  let proto = {
    'proto-enumerable-string': '*',
    [Symbol('proto-enumerable-symbol')]: '*'
  }
  Object.defineProperty(proto, 'proto-non-enumerable-string', { enumerable: false })
  Object.defineProperty(proto, Symbol('proto-non-enumerable-symbol'), { enumerable: false })

  let obj = {
    'obj-enumerable-string': '*',
    [Symbol('obj-enumerable-symbol')]: '*'
  }
  Object.defineProperty(obj, 'obj-non-enumerable-string', { enumerable: false })
  Object.defineProperty(obj, Symbol('obj-non-enumerable-symbol'), { enumerable: false })

  Object.setPrototypeOf(obj, proto)

  // for...in
  {
    let keys = []
    for (let key in obj) {
      keys.push(key)
    }
    console.log('for...in:', keys)
  }

  // Object.keys(obj)
  console.log('Object.keys(obj):', Object.keys(obj))

  // Object.getOwnPropertyNames(obj)
  console.log('Object.getOwnPropertyNames(obj):', Object.getOwnPropertyNames(obj))

  // Object.getOwnPropertySymbols(obj)
  console.log('Object.getOwnPropertySymbols(obj):', Object.getOwnPropertySymbols(obj))

  // Reflect.ownKeys(obj)
  console.log('Reflect.ownKeys(obj):', Reflect.ownKeys(obj))

  // Reflect.enumerate(obj)
  console.log('Reflect.enumerate(obj):', [...Reflect.enumerate(obj)])

}

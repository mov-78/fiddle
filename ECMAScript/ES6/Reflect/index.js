//
// Reflect.has(target, key)
// key in target
//

{

  let proto = { foo: 1 }

  let target = Object.create(proto)
  target.bar = 2

  console.assert(Reflect.has(target, 'foo'))
  console.assert(Reflect.has(target, 'bar'))
  console.assert(!Reflect.has(target, 'baz'))

}


//
// Reflect.deleteProperty(target, key)
// delete target[key]
//

{

  let proto = { foo: 1 }
  let target = Object.create(proto)
  target.bar = 2

  console.assert(Reflect.deleteProperty(target, 'foo'))
  console.assert(Reflect.deleteProperty(target, 'bar'))

  console.assert('foo' in target) // 不能删除继承的属性
  console.assert(!('bar' in target))

}


//
// Reflect.get(target, key[, receiver])
// target[key]
//

{

  let foo = { x: 1 }
  console.assert(1 === Reflect.get(foo, 'x'))

  let bar = {
    get y() {
      return this.z
    }
  }
  console.assert(2 === Reflect.get(bar, 'y', { z: 2 }))

}


//
// Reflect.set(target, key, value[, receiver])
// target[key] = value
//

{

  let foo = {}
  Reflect.set(foo, 'x', 1)
  console.assert(1 === foo.x)

  let bar = {
    set y(v) {
      this.z = v
    }
  }
  let baz = {}
  Reflect.set(bar, 'y', 2, baz)
  console.assert(2 === baz.z)
  console.assert(undefined === bar.z)

}


//
// Reflect.apply(target, context, arguments)
// Function.prototype.apply(context, arguments)
//

Reflect.apply(console.assert, console, [ true ])


//
// Reflect.construct(target, arguments)
// new target(...arguments)
//

Reflect.construct(
  class {
    constructor(...args) {
      console.assert(2 === args.length)
      console.assert(1 === args[0])
      console.assert(2 === args[1])
    }
  },
  [ 1, 2 ]
)


//
// Reflect.defineProperty(target, key, descriptor)
// Object.defineProperty(target, key, descriptor)
//

{

  let obj = {}

  Reflect.defineProperty(obj, 'key', { get: function getter(){} })

  // Reflect.defineProperty 与 Object.defineProperty 的区别在于，当操作失败时：
  //  - Reflect.defineProperty 返回 false
  //  - Object.defineProperty 抛出 TypeError 异常

  console.assert(!Reflect.defineProperty(obj, 'key', { value: 'foobar' }))

  try {
    Object.defineProperty(obj, 'key', { value: 'foobar' })
  } catch(error) {
    console.assert(error instanceof TypeError)
  }

}


//
// Reflect.getOwnPropertyDescriptor(target, key)
// Object.getOwnPropertyDescriptor(target, key)
//

{

  let obj = {}
  Object.defineProperty(obj, 'foo', {
    value: 'bar',
    extensible: false,
    enumerable: false
  })

  console.assert('bar' === Reflect.getOwnPropertyDescriptor(obj, 'foo').value)
  console.assert(!Reflect.getOwnPropertyDescriptor(obj, 'foo').extensible)
  console.assert(!Reflect.getOwnPropertyDescriptor(obj, 'foo').enumerable)

  console.assert('bar' === Object.getOwnPropertyDescriptor(obj, 'foo').value)
  console.assert(!Object.getOwnPropertyDescriptor(obj, 'foo').extensible)
  console.assert(!Object.getOwnPropertyDescriptor(obj, 'foo').enumerable)

  // Reflect.getOwnPropertyDescriptor 与 Object.getOwnPropertyDescriptor 的区别在
  // 于，当 target 不是 Object 时：
  //  - Reflect.getOwnPropertyDescriptor 抛出 TypeError 异常
  //  - Object.getOwnPropertyDescriptor 会自动将 target 转换成 Object
  console.assert(undefined === Object.getOwnPropertyDescriptor(1, 'foo'))
  try {
    Reflect.getOwnPropertyDescriptor(1, 'foo')
  } catch(error) {
    console.assert(error instanceof TypeError)
  }

}


//
// Reflect.isExtensible(target)
// Object.isExtensible(target)
// Reflect.preventExtensions(target)
// Object.preventExtensions(target)
//

{

  let foo = {}
  let bar = {}
  Object.freeze(bar)

  console.assert(Reflect.isExtensible(foo))
  console.assert(!Reflect.isExtensible(bar))
  console.assert(Object.isExtensible(foo))
  console.assert(!Object.isExtensible(bar))

  let baz = {}
  let qux = {}

  console.assert(Reflect.isExtensible(baz))
  console.assert(Reflect.isExtensible(qux))
  console.assert(Object.isExtensible(baz))
  console.assert(Object.isExtensible(qux))

  Reflect.preventExtensions(baz)
  Object.preventExtensions(qux)

  console.assert(!Reflect.isExtensible(baz))
  console.assert(!Reflect.isExtensible(qux))
  console.assert(!Object.isExtensible(baz))
  console.assert(!Object.isExtensible(qux))

  // Reflect.isExtensible 与 Object.isExtensible 的区别在于，当 target 不是 Object 时：
  //  - Reflect.defineProperty 抛出 TypeError 异常
  //  - Object.defineProperty 会自动将 target 转换成 Object
  console.assert(!Object.isExtensible('non-object'))
  try {
    Reflect.isExtensible('non-object')
  } catch(error) {
    console.assert(error instanceof TypeError)
  }

  // Reflect.preventExtensions 与 Object.preventExtensions 的区别在于，当 target 不
  // 是 Object 时：
  //  - Reflect.defineProperty 抛出 TypeError 异常
  //  - Object.defineProperty 会自动将 target 转换成 Object
  console.assert('non-object' === Object.preventExtensions('non-object'))
  try {
    Reflect.preventExtensions('non-object')
  } catch(error) {
    console.assert(error instanceof TypeError)
  }

}


//
// Reflect.getPrototypeOf(target)
// Object.getPrototypeOf(target)
// Reflect.setPrototypeOf(target, prototype)
// Object.setPrototypeOf(target, prototype)
//

{

  console.assert(Array.prototype === Reflect.getPrototypeOf([]))
  console.assert(Array.prototype === Object.getPrototypeOf([]))

  let foo = Object.create(null)
  console.assert(null === Reflect.getPrototypeOf(foo))
  console.assert(null === Object.getPrototypeOf(foo))

  let target = {}
  let proto = {}

  Reflect.setPrototypeOf(target, proto)
  console.assert(proto === Reflect.getPrototypeOf(target))
  Reflect.setPrototypeOf(target, null)
  console.assert(null === Reflect.getPrototypeOf(target))

  Object.setPrototypeOf(target, proto)
  console.assert(proto === Object.getPrototypeOf(target))
  Object.setPrototypeOf(target, null)
  console.assert(null === Object.getPrototypeOf(target))

}


//
// Reflect.ownKeys(target)
// Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))
//

{

  let proto = { foo: 1, [Symbol('foo')]: 1 }
  let target = Object.create(proto)
  target.bar = 2
  target[Symbol('bar')] = 2

  let keys1 = Reflect.ownKeys(target)
  let keys2 = Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))

  console.assert(2 === keys1.length)

  console.assert(keys1.length === keys2.length)
  keys1.forEach((key, index) => console.assert(key === keys2[index]))

}


//
// Reflect.enumerate(target)
// for...in
//

{

  let proto = { foo: 1, [Symbol('foo')]: 1 }
  let target = Object.create(proto)
  target.bar = 2
  target[Symbol('bar')] = 2
  Object.defineProperty(target, 'baz', { enumerable: false })

  let iterable = Reflect.enumerate(target)
  console.assert(Symbol.iterator in iterable)
  console.assert('next' in iterable)

  for(let key of iterable) {
    console.log('key:', key)
  }

}

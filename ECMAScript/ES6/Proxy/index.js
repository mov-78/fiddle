//
// trap: has(target, key)
// http://mzl.la/1nmxjNU
//  - key in proxy
//  - key in Object.create(proxy)
//  - Reflect.has(proxy, key)
//

{

  let target = { foo: 'ANY' }

  let handler = {
    has(target, key) {
      return false
    }
  }

  let proxy = new Proxy(target, handler)

  console.assert(!('foo' in proxy))
  console.assert(!('bar' in proxy))
  console.assert(!('foo' in Object.create(proxy)))
  console.assert(!('bar' in Object.create(proxy)))
  console.assert(!Reflect.has(proxy, 'foo'))
  console.assert(!Reflect.has(proxy, 'bar'))

  // 恒等式[1]
  // { configurable: false }
  // handler.has(target, key) === true
  Reflect.defineProperty(target, 'baz', { configurable: false })
  try {
    Reflect.has(proxy, 'baz')
  } catch(error) {
    console.assert(error instanceof TypeError)
  }

  // 恒等式[2]
  // { extensible: false } && Reflect.has(target, key)
  // handler.has(proxy, key) === true
  {

    let target = { foo: 'ANY' }
    Reflect.preventExtensions(target)

    let proxy = new Proxy(target, handler)

    try {
      Reflect.has(proxy, 'foo')
    } catch(error) {
      console.assert(error instanceof TypeError)
    }

  }

}


//
// trap: deleteProperty(target, key)
// http://mzl.la/1TZ26dS
//  - delete proxy[key]
//  - Reflect.deleteProperty(proxy, key)
//

{

  let target = { foo: 'ANY' }

  let handler = {
    deleteProperty(target, key) {
      return true
    }
  }

  let proxy = new Proxy(target, handler)

  console.assert(delete proxy.foo)
  console.assert('foo' in target)

  console.assert(Reflect.deleteProperty(proxy, 'foo'))
  console.assert('foo' in target)

  // 恒等式
  // { configurable: false }
  // handler.deleteProperty(target, key) === false
  Reflect.defineProperty(target, 'bar', { configurable: false })
  try {
    delete proxy.bar
  } catch(error) {
    console.assert(error instanceof TypeError)
  }

}


//
// trap: get(target, key, receiver)
// http://mzl.la/1Zoq0AS
//  - proxy[key]
//  - Object.create(proxy)[key]
//  - Reflect.get(proxy, key, receiver?)
//

{

  let target = { foo: 'ANY' }

  // readonly data property
  Reflect.defineProperty(target, 'bar', { configurable: false,  writable: false })

  // writeonly accessor property
  Reflect.defineProperty(target, 'baz', { configurable: false,  set() {} })

  let handler = {
    get(target, key, receiver) {
      return 'intercepted'
    }
  }

  let proxy = new Proxy(target, handler)

  console.assert('intercepted' === proxy.foo)
  console.assert('intercepted' === proxy.qux)

  console.assert('intercepted' === Object.create(proxy).foo)
  console.assert('intercepted' === Object.create(proxy).qux)

  console.assert('intercepted' === Reflect.get(proxy, 'foo'))
  console.assert('intercepted' === Reflect.get(proxy, 'qux'))
  console.assert('intercepted' === Reflect.get(Object.create(proxy), 'foo'))
  console.assert('intercepted' === Reflect.get(Object.create(proxy), 'qux'))

  console.assert('intercepted' === Reflect.get(proxy, 'foo', {}))
  console.assert('intercepted' === Reflect.get(proxy, 'qux', {}))
  console.assert('intercepted' === Reflect.get(Object.create(proxy), 'foo', {}))
  console.assert('intercepted' === Reflect.get(Object.create(proxy), 'qux', {}))

  // 恒等式[1]
  // { configurable: false, writable: false } (readonly data property)
  // handler.get(target, key, receiver?) === target[key]
  try {
    Reflect.get(proxy, 'bar')
  } catch(error) {
    console.assert(error instanceof TypeError)
  }

  // 恒等式[2]
  // { configurable: false, set() {} } (writeonly accessor property)
  // handler.get(target, key, receiver?) === undefined
  try {
    Reflect.get(proxy, 'baz')
  } catch(error) {
    console.assert(error instanceof TypeError)
  }

}


//
// trap: set(target, key, value, receiver?)
// http://mzl.la/233rxkK
//  - proxy[key] = value
//  - Object.create(proxy)[key] = value
//  - Reflect.set(target, key, value, receiver?)
//


{

  let target = { foo: 'ANY' }

  // readonly data property
  Reflect.defineProperty(target, 'baz', { configurable: false, writable: false, value: 'baz' })

  // readonly accessor property
  Reflect.defineProperty(target, 'qux', { configurable: false, get() {} })

  let handler = {
    set(target, key, value, receiver) {
      console.assert('ANY' === value)
      return true
    }
  }

  let proxy = new Proxy(target, handler)

  proxy.foo = 'ANY'
  proxy.bar = 'ANY'

  Object.create(proxy).foo = 'ANY'
  Object.create(proxy).bar = 'ANY'

  Reflect.set(proxy, 'foo', 'ANY')
  Reflect.set(proxy, 'bar', 'ANY')

  Reflect.set(proxy, 'foo', 'ANY', {})
  Reflect.set(proxy, 'bar', 'ANY', {})

  // 恒等式[1]
  // { configurable: false, writable: false } (readonly data property)
  // handler.set(target, key, VALUE)
  // VALUE === target[key]
  {

    let handler = {
      set(target, key, value, receiver) {
        return true
      }
    }

    let proxy = new Proxy(target, handler)

    Reflect.set(proxy, 'baz', 'baz')
    try {
      Reflect.set(proxy, 'baz', 'ANY')
    } catch(error) {
      console.assert(error instanceof TypeError)
    }

  }

  // 恒等式[2]
  // { configurable: false, get() {} } (readonly accessor property)
  try {
    Reflect.set(proxy, 'qux', 'ANY')
  } catch(error) {
    console.assert(error instanceof TypeError)
  }

}


//
// trap: apply(target, context, args)
// http://mzl.la/1ZoT5MC
//  - proxy(...args)
//  - proxy.apply(context, args)
//  - proxy.call(context, ...args)
//  - Reflect.apply(proxy, context, args)
//

{

  const args = [ 'foo', 'bar' ]

  let target = function noop() {}

  let handler = {
    apply(target, context, args) {

      console.assert('function' === typeof target)
      console.assert(Array.isArray(args))

      let [ foo, bar ] = args
      console.assert('foo' === foo)
      console.assert('bar' === bar)

    }
  }

  let proxy = new Proxy(target, handler)

  proxy(...args)
  proxy.apply(null, args)
  proxy.call(null, ...args)
  Reflect.apply(proxy, null, args)

}


//
// trap: construct(target, args)
// http://mzl.la/1SlU29k
//  - new proxy(...args)
//  - Reflect.construct(proxy, args)
//

{

  const args = [ 'foo', 'bar' ]

  let target = class {}

  let handler = {
    construct(target, args) {

      console.assert('function' === typeof target)
      console.assert(Array.isArray(args))

      let [ foo, bar ] = args
      console.assert('foo' === foo)
      console.assert('bar' === bar)

      return { foo, bar }

    }
  }

  let proxy = new Proxy(target, handler)

  let obj1 = new proxy(...args)
  let obj2 = Reflect.construct(proxy, args)

  // 恒等式
  // let obj = handler.construct(target, args)
  // (null !== obj) && ('object' === typeof obj)
  {

    let handler = {
      construct(target, args) {
        return null
      }
    }

    let proxy = new Proxy(target, handler)

    try {
      Reflect.construct(proxy, args)
    } catch(error) {
      console.assert(error instanceof TypeError)
    }

  }

}


//
// trap: defineProperty(target, key, descriptor)
// http://mzl.la/1SRxNHE
//  - Object.defineProperty(proxy, key, descriptor)
//  - Reflect.defineProperty(proxy, key, descriptor)
//


{

  {

    let target = {
      foo: 'foo',
      bar: 'bar',
      baz: 'baz'
    }

    let handler1 = {
      defineProperty(target, key, descriptor) {
        // forwarding request
        Reflect.defineProperty(target, key, descriptor)
        return true
      }
    }

    let handler2 = {
      defineProperty(target, key, descriptor) {
        // noop
        return true
      }
    }

    let proxy1 = new Proxy(target, handler1)
    let proxy2 = new Proxy(target, handler2)

    console.assert(Reflect.getOwnPropertyDescriptor(target, 'foo').writable)
    Reflect.defineProperty(proxy1, 'foo', { writable: false })
    console.assert(!Reflect.getOwnPropertyDescriptor(target, 'foo').writable)

    console.assert(Reflect.getOwnPropertyDescriptor(target, 'bar').writable)
    Object.defineProperty(proxy2, 'bar', { writable: false })
    console.assert(Reflect.getOwnPropertyDescriptor(target, 'bar').writable)

    console.assert(Reflect.getOwnPropertyDescriptor(target, 'baz').writable)
    Reflect.defineProperty(proxy2, 'baz', { writable: false })
    console.assert(Reflect.getOwnPropertyDescriptor(target, 'baz').writable)

  }

  // 恒等式[1]
  // !Reflect.isExtensible(target) && !Reflect.has(target, key)
  // Reflect.defineProperty(target, key, descriptor }) throws TypeError
  {

    let target = {}
    Reflect.preventExtensions(target)

    let handler = {
      defineProperty(target, key, descriptor) {
        return true
      }
    }

    let proxy = new Proxy(target, handler)

    try {
      Reflect.defineProperty(proxy, 'foo', { writable: true })
    } catch(error) {
      console.assert(error instanceof TypeError)
    }

  }

  // 恒等式[2]
  // !Reflect.has(target, key)
  // Reflect.defineProperty(proxy, key, { configurable: false }) throws TypeError
  {

    let target = {}

    let handler = {
      defineProperty(target, key, descriptor) {
        return true
      }
    }

    let proxy = new Proxy(target, handler)

    Reflect.defineProperty(proxy, 'foo', { configurable: true })
    try {
      Reflect.defineProperty(proxy, 'foo', { configurable: false })
    } catch(error) {
      console.assert(error instanceof TypeError)
    }

  }

  // 恒等式[3]
  // Reflect.has(target, key)
  // let configurable = bool
  // Reflect.defineProperty(target, key, { configurable })
  // Reflect.defineProperty(proxy, key, { configurable: !configurable }) throws TypeError
  {

    let configurable = (Math.random() > 0.5)

    let target = {}
    Reflect.defineProperty(target, 'foo', { configurable })

    let handler = {
      defineProperty(target, key, descriptor) {
        return true
      }
    }

    let proxy = new Proxy(target, handler)

    try {
      Reflect.defineProperty(proxy, 'foo', { configurable: !configurable })
    } catch(error) {
      console.assert(error instanceof TypeError)
    }

  }

}


//
// trap: getOwnPropertyDescriptor(target, key)
// http://mzl.la/1Pfhnmx
//  - Object.getOwnPropertyDescriptor(proxy, key)
//  - Reflect.getOwnPropertyDescriptor(proxy, key)
//

{

  let target = {}

  let handler = {
    getOwnPropertyDescriptor(target, key) {
      return {
        configurable: true,
        value: 'intercepted'
      }
    }
  }

  let proxy = new Proxy(target, handler)

  console.assert('intercepted' === Object.getOwnPropertyDescriptor(proxy, 'foo').value)
  console.assert('intercepted' === Reflect.getOwnPropertyDescriptor(proxy, 'foo').value)

  // 恒等式[1]
  // let descriptor = Reflect.getOwnPropertyDescriptor(proxy, key)
  // undefined === descriptor || ((null !== descriptor) && ('object' === typeof descriptor))

  // 恒等式[2]
  // !Reflect.getOwnPropertyDescriptor(target, key).configurable
  // let descriptor = Reflect.getOwnPropertyDescriptor(proxy, key)
  // (null !== descriptor) && ('object' === typeof descriptor)
  {

    let target = {}
    Reflect.defineProperty(target, 'foo', { configurable: false })

    let handler = {
      getOwnPropertyDescriptor(target, key) {
        return undefined // implies non-existence
      }
    }

    let proxy = new Proxy(target, handler)

    try {
      Reflect.getOwnPropertyDescriptor(proxy, 'foo')
    } catch(error) {
      console.assert(error instanceof TypeError)
    }

  }

  // 恒等式[3]
  // Reflect.has(target, key) && !Reflect.isExtensible(target)
  // let descriptor = Reflect.getOwnPropertyDescriptor(proxy, key)
  // (null !== descriptor) && ('object' === typeof descriptor)
  {

    let target = { foo: 'ANY' }
    Reflect.preventExtensions(target)

    let handler = {
      getOwnPropertyDescriptor(target, key) {
        return undefined // implies non-existence
      }
    }

    let proxy = new Proxy(target, handler)

    try {
      Reflect.getOwnPropertyDescriptor(proxy, 'foo')
    } catch(error) {
      console.assert(error instanceof TypeError)
    }

  }

  // 恒等式[4]
  // !Reflect.has(target, key) && !Reflect.isExtensible(target)
  // let descriptor = Reflect.getOwnPropertyDescriptor(proxy, key)
  // undefined === descriptor
  {

    let target = {}
    Reflect.preventExtensions(target)

    let handler = {
      getOwnPropertyDescriptor(target, key) {
        return { configurable: true } // implies existence
      }
    }

    let proxy = new Proxy(target, handler)

    try {
      Reflect.getOwnPropertyDescriptor(proxy, 'foo')
    } catch(error) {
      console.assert(error instanceof TypeError)
    }

  }

  // 恒等式[5]
  //  [5.1]
  //    Reflect.has(target, key) && Reflect.getOwnPropertyDescriptor(target, key).configurable
  //    let descriptor = Reflect.getOwnPropertyDescriptor(proxy, key)
  //    (null !== descriptor) && ('object' typeof descriptor) && descriptor.configurable
  //  [5.2]
  //    !Reflect.has(target, key)
  //    let descriptor = Reflect.getOwnPropertyDescriptor(proxy, key)
  //    (null !== descriptor) && ('object' typeof descriptor) && descriptor.configurable
  {

    let target = {}
    Reflect.defineProperty(target, 'foo', { configurable: true })

    let handler = {
      getOwnPropertyDescriptor(target, key) {
        return { configurable: false }
      }
    }

    let proxy = new Proxy(target, handler)

    try {
      Reflect.getOwnPropertyDescriptor(proxy, 'foo')
    } catch(error) {
      console.assert(error instanceof TypeError)
    }

    try {
      Reflect.getOwnPropertyDescriptor(proxy, 'bar')
    } catch(error) {
      console.assert(error instanceof TypeError)
    }

  }

}


//
// trap: isExtensible(target)
// http://mzl.la/1P41AgA
//  - Object.isExtensible(proxy)
//  - Reflect.isExtensible(proxy)
//

{

  let target1 = {}
  let target2 = {}
  Reflect.preventExtensions(target2)

  let handler = {
    isExtensible(target) {
      return Reflect.isExtensible(target)
    }
  }

  let proxy1 = new Proxy(target1, handler)
  let proxy2 = new Proxy(target2, handler)

  console.assert(Object.isExtensible(proxy1))
  console.assert(!Object.isExtensible(proxy2))
  console.assert(Reflect.isExtensible(proxy1))
  console.assert(!Reflect.isExtensible(proxy2))

  // 恒等式
  // Reflect.isExtensible(proxy) === Reflect.isExtensible(target)
  {

    let target = {}

    let handler = {
      isExtensible(target) {
        return !Reflect.isExtensible(target)
      }
    }

    let proxy = new Proxy(target, handler)

    try {
      Reflect.isExtensible(proxy)
    } catch(error) {
      console.assert(error instanceof TypeError)
    }

  }

}


//
// trap: preventExtensions(target)
// http://mzl.la/1Kh0pTM
//  - Object.preventExtensions(proxy)
//  - Reflect.preventExtensions(proxy)
//

{

  let target = {}

  let handler = {
    preventExtensions(target) {
      if (Reflect.isExtensible(target)) {
        return Reflect.preventExtensions(target)
      } else {
        return false
      }
    }
  }

  let proxy = new Proxy(target, handler)

  console.assert(Reflect.isExtensible(proxy))
  console.assert(Reflect.preventExtensions(proxy))
  console.assert(!Reflect.isExtensible(proxy))

}


//
// trap: ownKeys(target)
// http://mzl.la/1RpopeX
//  - Object.getOwnPropertyNames(proxy)
//  - Object.getOwnPropertySymbols(proxy)
//  - Object.keys(proxy)
//  - Reflect.ownKeys(proxy)
//

{

  let target = {}

  let handler = {
    ownKeys(target) {
      return [ 'String', Symbol('Symbol') ]
    }
  }

  let proxy = new Proxy(target, handler)
  proxy['foo'] = 'bar' // ignored

  console.log('Object.getOwnPropertyNames(proxy):', Object.getOwnPropertyNames(proxy))
  console.log('Object.getOwnPropertySymbols(proxy):', Object.getOwnPropertySymbols(proxy))
  console.log('Object.keys(proxy):', Object.keys(proxy)) // buggy as of Firefox 43.0.4
  console.log('Reflect.ownKeys(proxy):', Reflect.ownKeys(proxy))

  // 恒等式
  // !Reflect.isExtensible(target)
  // Object.getOwnPropertyNames(proxy) 与 Object.getOwnPropertyNames(target) 必须一致
  // Object.getOwnPropertySymbols(proxy) 与 Object.getOwnPropertySymbols(target) 必须一致
  // Object.keys(proxy) 与 Object.keys(target) 必须一致
  // Reflect.ownKeys(proxy) 与 Reflect.ownKeys(target) 必须一致
  {

    let sym = Symbol()

    let target = { 'String': 'ANY', [sym]: 'ANY' }
    Reflect.preventExtensions(target)

    let handler1 = {
      ownKeys(target) {
        return []
      }
    }
    let handler2 = {
      ownKeys(target) {
        return [ 'String', sym ]
      }
    }

    let proxy1 = new Proxy(target, handler1)
    let proxy2 = new Proxy(target, handler2)

    Reflect.ownKeys(proxy2)
    try {
      Reflect.ownKeys(proxy1)
    } catch(error) {
      console.assert(error instanceof TypeError)
    }

  }

}

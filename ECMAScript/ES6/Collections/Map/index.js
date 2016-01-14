// new Map([iterable])
let map = new Map([ [ 'foo', 1 ], [ 'bar', 2 ] ])

// getter Map.prototype.size
console.assert(2 === map.size)

// Map.prototype.has(key)
console.assert(map.has('foo'))
console.assert(!map.has('baz'))

// Map.prototype.get(key)
console.assert(1 === map.get('foo'))
console.assert(undefined === map.get('baz'))

// Map.prototype.set(key)
map.set('baz', 3).set('qux', 4) // chainable
console.assert(3 === map.get('baz'))
console.assert(4 === map.get('qux'))

// Map.prototype.delete(key)
console.assert(map.delete('qux'))
console.assert(!map.has('qux'))
console.assert(!map.delete('qux'))
console.assert(!map.has('qux'))


//
// 迭代方法
//

// Map.prototype.keys()
console.assert(Symbol.iterator in map.keys())
for (let key of map.keys()) {
  console.log('[map.key]', key)
}

// Map.prototype.values()
console.assert(Symbol.iterator in map.values())
for (let value of map.values()) {
  console.log('[map.value]', value)
}

// Map.prototype.entries()
console.assert(Symbol.iterator in map.entries())
for (let [ key, value ] of map.entries()) {
  console.log(`[map.entry] ${key}:${value}`)
}

// Map 本身亦是 Iterable
console.assert(Symbol.iterator in map)
console.assert(map[Symbol.iterator] === Map.prototype.entries)
for (let [ key, value ] of map) {
  console.log(`[map] ${key}: ${value}`)
}

// Map.prototype.forEach(callback, context?)
map.forEach(function each(value, key) {
  console.log(`[forEach] ${key}:${value}`)
})

// Map.prototype.clear()
map.clear()
console.assert(0 === map.size)

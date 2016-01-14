// new Set([iterable])
let set = new Set([ 1, 2, 2 ])

// getter Set.prototype.size
console.log('set.size:', set.size)

// Set.prototype.add(value)
set.add(1)
console.log('set.size:', set.size)
set.add(2).add(3) // chainable
console.log('set.size:', set.size)

// Set.prototype.delete(value)
console.log('set.delete(1):', set.delete(1))
console.log('set.size:', set.size)
console.log('set.delete(1):', set.delete(1))
console.log('set.size:', set.size)

// Set.prototype.has(value)
console.log('set.has(2):', set.has(2))
console.log('set.has(7):', set.has(7))


//
// 迭代方法
//

// Set.prototype.keys()
// Set.prototype.values()
console.assert(set.keys === set.values)
console.assert(Symbol.iterator in set.keys())
for (let value of set.values()) {
  console.log('set.value:', value)
}

// Set.prototype.entries()
console.assert(Symbol.iterator in set.entries())
for (let entry of set.entries()) {
  console.log('set.entry:', entry)
}

// Set 本身亦是 Iterable
console.assert(Symbol.iterator in set)
for (let member of set) {
  console.log('set:', member)
}

// Set.prototype.forEach(callback, context?)
set.forEach(function each(member) {
  console.log('forEach:', member)
})

// Set.prototype.clear()
set.clear()
console.log('set.size:', set.size)

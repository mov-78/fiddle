// new Set([iterable])
let set = new Set([ 1, 2, 2 ])

// getter Set.prototype.size
console.assert(set.size === 2)

// Set.prototype.add(value)
set.add(1)
console.assert(set.size === 2)
set.add(2).add(3) // chainable
console.assert(set.size === 3)

// Set.prototype.delete(value)
console.assert(set.delete(1))
console.assert(set.size === 2)
console.assert(!set.delete(1))
console.assert(set.size === 2)

// Set.prototype.has(value)
console.assert(set.has(2))
console.assert(!set.has(7))


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
console.assert(set[Symbol.iterator] === Set.prototype.values)
for (let member of set) {
  console.log('set:', member)
}

// Set.prototype.forEach(callback, context?)
set.forEach(function each(member) {
  console.log('forEach:', member)
})

// Set.prototype.clear()
set.clear()
console.assert(set.size === 0)

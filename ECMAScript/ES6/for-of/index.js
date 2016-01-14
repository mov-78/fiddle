console.log('Number:', Symbol.iterator in Number.prototype)
console.log('String:', Symbol.iterator in String.prototype) // iterable
console.log('Boolean:', Symbol.iterator in Boolean.prototype)

console.log('Object:', Symbol.iterator in Object.prototype)
console.log('Array:', Symbol.iterator in Array.prototype) // iterable
console.log('Function:', Symbol.iterator in Function.prototype)

console.log('Symbol:', Symbol.iterator in Symbol.prototype)

console.log('Set:', Symbol.iterator in Set.prototype) // iterable
console.log('WeakSet:', Symbol.iterator in WeakSet.prototype)
console.log('Map:', Symbol.iterator in Map.prototype) // iterable
console.log('WeakMap:', Symbol.iterator in WeakMap.prototype)

// String
for (let ch of 'foobar') {
  console.log('[String]', ch)
}

// Array
for (let element of [ 1, 2, 3 ]) {
  console.log('[Array]', element)
}

// Set
for (let member of new Set([ 1, 2, 3 ])) {
  console.log('[Set]', member)
}

// Map
for (let [ key, value ] of new Map([ [ 'foo', 1 ], [ 'bar', 2 ] ])) {
  console.log(`[Map] ${key}:${value}`)
}

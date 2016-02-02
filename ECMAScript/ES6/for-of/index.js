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
{

  let array = [ 1, 2, 3 ]

  for (let key of array.keys()) {
    console.log(`[Array#key]: ${key}`)
  }

  for (let value of array.values()) {
    console.log(`[Array#value]: ${value}`)
  }

  for (let entry of array.entries()) {
    console.log(`[Array#entry]: ${entry}`)
  }

  console.assert(Array.prototype[Symbol.iterator] === Array.prototype.values)
  for (let item of array) {
    console.log('[Array#for-of]:', item)
  }

}


// Set
{

  let set = new Set([ 1, 2, 3 ])

  for (let key of set.keys()) {
    console.log(`[Set#key]: ${key}`)
  }

  for (let value of set.values()) {
    console.log(`[Set#value]: ${value}`)
  }

  for (let entry of set.entries()) {
    console.log(`[Set#entry]: ${entry}`)
  }

  console.assert(Set.prototype.keys === Set.prototype.values)
  console.assert(Set.prototype[Symbol.iterator] === Set.prototype.values)
  for (let item of set) {
    console.log('[Set#for-of]:', item)
  }

}


// Map
{

  let map = new Map([ [ 'foo', 1 ], [ 'bar', 2 ] ])

  for (let key of map.keys()) {
    console.log(`[Map#key]: ${key}`)
  }

  for (let value of map.values()) {
    console.log(`[Map#value]: ${value}`)
  }

  for (let entry of map.entries()) {
    console.log(`[Map#entry]: ${entry}`)
  }

  console.assert(Map.prototype[Symbol.iterator] === Map.prototype.entries)
  for (let item of map) {
    console.log('[Map#for-of]:', item)
  }

}

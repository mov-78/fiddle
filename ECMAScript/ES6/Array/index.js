//
// Array.of(elements...)
//

{

  let arr1 = new Array(7)
  let arr2 = Array.of(7)
  console.assert(7 === arr1.length)
  console.assert(1 === arr2.length)

  let arr3 = new Array(1, 2, 3)
  let arr4 = Array.of(1, 2, 3)
  console.assert(3 === arr3.length)
  console.assert(3 === arr4.length)

}


//
// Array.from(arrayLikeObject|iterable, mapFn?, context?)
//

{

  let arrayLikeObject = {
    0: 'foo',
    1: 'bar',
    length: 2,
    toString: () => 'arrayLikeObject'
  }

  console.log(
    Array.from(
      arrayLikeObject,
      function mapFn(element) {
        return `[${this.toString()}] ${element}`
      },
      arrayLikeObject
    )
  )

  console.log(Array.from(new Set([1, 2, 3]))) // iterable

}


//
// - Array.find(callback, context?)
// - Array.findIndex(callback, context?)
//

{

  let arr = [ 1, 3, 5, 6, 7 ]

  let m = arr.find((element, index, array) => 0 === element % 2)
  let n = arr.findIndex((element, index, array) => 0 === element % 2)

  console.assert(6 === m)
  console.assert(3 === n)

}


//
// - Array.prototype.keys()
// - Array.prototype.values()
// - Array.prototype.entries()
//

console.assert(Symbol.iterator in [].keys())
console.assert(Symbol.iterator in [].values())
console.assert(Symbol.iterator in [].entries())


//
// - Array.prototype.fill(value, start?, end?)
//

console.log([ 1, 2, 3 ].fill(4))
console.log([ 1, 2, 3 ].fill(4, 1))
console.log([ 1, 2, 3 ].fill(4, 1, 2))
console.log([ 1, 2, 3 ].fill(4, 1, 1))
console.log([ 1, 2, 3 ].fill(4, -3, -2))


//
// Array.prototype.copyWithin(target, start?, end?)
//

console.log([ 1, 2, 3, 4, 5 ].copyWithin(0, 3))
console.log([ 1, 2, 3, 4, 5 ].copyWithin(0, 3, 4))
console.log([ 1, 2, 3, 4, 5 ].copyWithin(0, -2, -1))

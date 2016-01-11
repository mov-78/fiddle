// webpack context
// http://goo.gl/Wt9n7k

let reqT = require.context('./lib/', true, /\.js$/)
let reqF = require.context('./lib/', false, /\.js$/)

console.clear()

console.group('Context#TRUE')
console.log('[keys]', reqT.keys())
console.log('[resolved module ID][./foo.js]', reqT.resolve('./foo.js'))
console.log('[resolved module ID][./bar.js]', reqT.resolve('./bar.js'))
console.log('[resolved module ID][./sub/foo.js]', reqT.resolve('./sub/foo.js'))
console.log('[resolved module ID][./sub/.bar.js]', reqT.resolve('./sub/bar.js'))
console.log('[context module ID]', reqT.id)
console.groupEnd()

console.group('Context#FALSE')
console.log('[keys]', reqF.keys())
console.log('[resolved module ID][./foo.js]', reqF.resolve('./foo.js'))
console.log('[resolved module ID][./bar.js]', reqF.resolve('./bar.js'))
// console.log('[resolved module ID][./sub/foo.js]', reqF.resolve('./sub/foo.js'))
// console.log('[resolved module ID][./sub/.bar.js]', reqF.resolve('./sub/bar.js'))
console.log('[context module ID]', reqF.id)
console.groupEnd()

let fooT = reqT('./foo.js')
let barT = reqT('./bar.js')
let subFooT = reqT('./sub/foo.js')
let subBarT = reqT('./sub/bar.js')
console.log(fooT)
console.log(barT)
console.log(subFooT)
console.log(subBarT)

let fooF = reqF('./foo.js')
let barF = reqF('./bar.js')
// let subFooF = reqF('./sub/foo.js')
// let subBarF = reqF('./sub/bar.js')
console.log(fooF)
console.log(barF)
// console.log(subFooF)
// console.log(subBarF)

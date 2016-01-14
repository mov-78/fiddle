// 新增了指数操作符
console.log(2 ** 10)

// 新增了数值的二进制及八进制表示法
console.log(0b1101)
console.log(0o700)

// 更可靠的 isNaN()
console.log('isNaN("s"):', isNaN('s'))
console.log('Number.isNaN("s"):', Number.isNaN('s'))

Number.isNaN = Number.isNaN || function isNaN(value) {
  return value !== value
}

// 更可靠的 isFinite()
console.log('isFinite("0"):', isFinite('0'))
console.log('Number.isFinite("0"):', Number.isFinite('0'))

Number.isFinite = Number.isFinite || function isFinite(value) {
  return 'number' === typeof value && isFinite(value)
}

// 新增了 Number.isInteger 方法，用于判断一个值是否是整数值
console.log('Number.isInteger("s"):', Number.isInteger('s'))
console.log('Number.isInteger(3.14):', Number.isInteger(3.14))
console.log('Number.isInteger(3):', Number.isInteger(3))

Number.isInteger = Number.isInteger || function isInteger(value) {
  return 'number' === typeof value &&
          isFinite(value) &&
          Math.floor(value) === value
}

// 安全整数 [ -(2^53-1), 2^53-1 ]
console.log(Number.MIN_SAFE_INTEGER)      // 2^53-1
console.log(Number.MAX_SAFE_INTEGER)      // -(2^53-1)
console.log(Number.isSafeInteger(2**53))  // 用于判断数值是否落在安全整数区间
console.log(Number.isSafeInteger(2**53 - 1))

// Number.EPSILON
console.assert((0.1 + 0.2 - 0.3) < Number.EPSILON)

// 其次 ES6 新增了 Number.parseInt 及 Number.parseFloat 方法，行为不变，旨在逐步减少全局方法
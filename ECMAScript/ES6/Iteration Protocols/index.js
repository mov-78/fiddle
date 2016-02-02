//
// iterator 协议
//

let iterator = {

  // iterator 需要实现 next 方法
  next() {
    return {
      // 当 true === done 时，value 为 iterator 的返回值
      // 当 false === done 时，可以忽略 value 属性
      done  : true,
      value : 'ANY'
    }
  }

}


//
// iterable 协议
//

let iterable = {

  // iterable 需要实现 @@iterator 方法
  // @@iterator 方法会被各种迭代结构及迭代方法调用
  [Symbol.iterator]() {
    return iterator
  }

}

'use strict'

const chai = require('chai')
const expect = chai.expect
const should = chai.should()

expect(expect({})).to.be.instanceof(chai.Assertion)
expect(({}).should).to.be.instanceof(chai.Assertion)

// 调用 chai.use(func) 方法来引入插件相关接口
chai.use(function definePlugins(_chai, utils) {

  //
  // _chai: chai exports
  // utils: plugin APIs
  //

  expect(_chai).to.equal(chai)
  expect(utils).to.equal(chai.util)


  //
  // 添加断言属性（于 chai.Assertion.prototype 之上）
  //
  //    - chai.Assertion.addProperty(name, getter)
  //    - chai.util.addProperty(context, name, getter)
  //
  // 基本等同于：
  //
  //    Object.defineProperty(context, name, {
  //      configurable : true,
  //      get() {
  //        let result = getter.call(this)
  //        return result === undefined ? this : result
  //      }
  //    })
  //

  chai.Assertion.addProperty('prop', function _assert() {

    //
    // 每个 chai.Assertion 实例各自维护一组 flags
    // 该 flags 保存在 __flags 属性上，并且可以通过
    //
    //    chai.util.flag(assertion, key, [value])
    //
    // 方法来直接获取或设置 flags；断言方法可以依据不同的 flags 组合来调整其评判策略
    // 其中 object flag 保存了断言主体的引用，并且可以通过 this._obj 来直接访问：
    //
    //    Object.defineProperty(chai.Assertion.prototype, '_obj', {
    //      get() {
    //        return chai.util.flag(this, 'object')
    //      },
    //      set(subject) {
    //        chai.util.flag(this, 'object', subject)
    //      }
    //    })
    //

    expect(this.__flags).to.not.be.undefined
    expect(this.__flags).to.be.an('object')
    expect(this._obj).to.equal(this.__flags.object)
    expect(this._obj).to.equal(utils.flag(this, 'object'))


    //
    // 接下来便可以基于当前 flags 及已有断言来定义新的断言
    //

    let subject = this._obj

    assert.isDefined(subject)           // TDD:assert
    expect(subject).to.not.be.undefined // BDD:expect
    subject.should.not.be.undefined     // BDD:should

    //
    // 如果在该断言中调用了其他断言，则需要将当前断言的 flags 传递给它：
    //
    //    chai.util.transferFlags(assertion, targetAssertion, includeAll=true)
    //
    // 等同于：
    //
    //    includeAll = arguments.length === 3 ? includeAll : true
    //    const flags = assertion.__flags || (assertion.__flags = {})
    //    for(let key in flags) {
    //      if (flags.hasOwnProperty(key)) {
    //        if (includeAll ||
    //            (key !== 'object' && key !== 'ssfi' && key !== 'message')) {
    //          targetAssertion[key] = flags[key]
    //        }
    //      }
    //    }
    //

    const negate = chai.util.flag(this, 'negate')
    let assertion = new chai.Assertion
    utils.transferFlags(this, assertion, true)
    expect(utils.flag(assertion, 'negate')).to.equal(negate)


    // 通用基础断言
    this.assert(

      // [1] 表达式
      negate ? false : true, // always pass

      // [2] 仅当 negate flag 未开启且表达式为假时使用
      // [3] 仅当 negate flag 开启且表达式为真时使用
      // 支持如下插值：
      //    - #{this} 为当前断言主体
      //    - #{exp}  期望值
      //    - #{act}  实际值
      'expected #{this} to be #{exp}, but got #{act}',  // [2]
      'expected #{this} to not be #{act}',              // [3]

      'prop',   // [4] 期望值
      subject,  // [5] 实际值（默认为 this._obj）
      true      // [6] diff 开关
    )

  })
  expect(chai.Assertion.prototype).has.ownProperty('prop')


  //
  // 添加断言方法（于 chai.Assertion.prototype 之上）
  //
  //    - chai.Assertion.addMethod(name, method)
  //    - chai.util.addMethod(context, name, method)
  //
  // 基本等同于：
  //
  //    context[name] = function () {
  //      let result = method.apply(this, arguments)
  //      return result === undefined ? this : result
  //    }
  //

  chai.Assertion.addMethod('method', (/* passed in arguments */) => null)
  expect(chai.Assertion.prototype).has.ownProperty('method')


  //
  // 添加链式断言方法 - Chainable Method（于 chai.Assertion.prototype 之上）
  //
  //    - chai.Assertion.addChainableMethod(name, method, chainingBehavior)
  //    - chai.util.addChainableMethod(context, name, method, chainingBehavior)
  //
  //    - method 仅在「方法调用」时调用
  //    - chainingBehavior 在「链式调用」及「方法调用」时均被调用
  //    - 在 chainingBehavior 中尽量只设置 flags
  //
  // 基本等同于：
  //
  //    if (typeof chainingBehavior !== 'function') {
  //      chainingBehavior = function noop() {}
  //    }
  //    let chainableBehavior = { method, chainingBehavior }
  //
  //    context.__methods = context.__methods || {}
  //    context.__methods[name] = chainableBehavior
  //
  //    Object.defineProperty(context, name, {
  //      configurable : true,
  //      get() {
  //        chainableBehavior.chainingBehavior.call(this)
  //        let assert = function () {
  //          let result = chainableBehavior.method.apply(this, arguments)
  //          return result === undefined ? this : result
  //        }
  //        Reflect.setPrototypeOf(assert, this)
  //        assert.call = Function.prototype.call
  //        assert.apply = Function.prototype.apply
  //        chai.util.transferFlags(this, assert)
  //        return assert
  //      }
  //    })
  //

  chai.Assertion.addChainableMethod(
    'chainableMethod',
    function method(/* passed in arguments */) {},  // 仅在「方法调用」时调用
    function chainingBehavior() {}                  // 在「链式调用」及「方法调用」时均被调用
  )
  expect(chai.Assertion.prototype).has.ownProperty('chainableMethod')


  //
  // 覆盖或扩展（继承）已有断言属性
  //
  //    - chai.Assertion.overwriteProperty(name, getter)
  //    - chai.util.overwriteProperty(context, name, getter)
  //
  // 基本等同于：
  //
  //    let _super = function noop() {}
  //    const descriptor = Object.getOwnPropertyDescriptor(context, name)
  //    if (descriptor && typeof descriptor.get === 'function') {
  //      _super = descriptor.get
  //    }
  //    Object.defineProperty(context, name, {
  //      configurable : true,
  //      get() {
  //        let result = getter(_super).call(this)
  //        return result === undefined ? this : result
  //      }
  //    })
  //

  chai.Assertion.overwriteProperty('prop', function (_super) {
    return function() {
      _super.call(this)
    }
  })


  //
  // 覆盖或扩展（继承）已有断言方法
  //
  //    - chai.Assertion.overwriteMethod(name, method)
  //    - chai.util.overwriteMethod(context, name, method)
  //
  // 基本等同于：
  //
  //    const _method = context[name]
  //    let _super = function noop() { return this }
  //    if (_method && typeof _method === 'function') {
  //      _super = _method
  //    }
  //    context[name] = function () {
  //      let result = method(_super).apply(this, arguments)
  //      return result === undefined ? this : result
  //    }
  //

  chai.Assertion.overwriteMethod('method', function (_super) {
    return function() {
      _super.apply(this, arguments)
    }
  })


  //
  // 覆盖或扩展（继承）已有链式断言方法
  //
  //    - chai.Assertion.overwriteChainableMethod(name, method, chainingBehavior)
  //    - chai.util.overwriteChainableMethod(context, name, method, chainingBehavior)
  //
  // 基本等同于：
  //
  //    let chainableBehavior = context.__methods[name]
  //
  //    const _method = chainableBehavior.method
  //    chainableBehavior.method = function () {
  //      let result = method(_method).apply(this, arguments)
  //      return result === undefined ? this : result
  //    }
  //
  //    const _chainingBehavior = chainableBehavior.chainingBehavior
  //    chainableBehavior.chainingBehavior = function () {
  //      let result = chainingBehavior(_chainingBehavior).call(this)
  //      return result === undefined ? this : result
  //    }
  //

  chai.Assertion.overwriteChainableMethod(
    'chainableMethod',
    function method(_super) {
      return function () {
        _super.apply(this, arguments)
      }
    },
    function chainingBehavior(_super) {
      return function () {
        _super.call(this)
      }
    }
  )

})

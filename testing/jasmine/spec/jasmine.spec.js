'use strict'

const noop = () => {}

// 使用 describe(title, implementation) 来定义「测试套件」
// 一个「测试套件」可以包含多个「测试用例」
describe('A test suite', function () {

  // 使用 it(title, implementation) 来定义「测试用例」
  // 一个「测试用例」可以包含多个「断言」
  //    - 如果「测试用例」内所有「断言」均成立，则该测试通过
  //    - 如果「测试用例」内任意「断言」不成立，则该测试不通过
  it('is composed of zero or more test specs', function () {

    //「正断言」
    // expect(actual).matcher(expected)
    expect(null).toBeNull()

    //「负断言」
    // expect(actual).not.matcher(expected)
    expect(undefined).not.toBeNull()

  })

  //「测试套件」可以嵌套（「测试用例」则不可以嵌套）
  describe('can be nested', function () {
    it('to build a tree of test specs', function () {
      // 使用 fail([reason]) 来强制不通过「测试用例」
      if (false) {
        fail('manually failing with fail([reason])')
      }
    })
  })

})


// 内建断言
describe('Builtin assertion', function () {

  // toBe(value)
  it('toBe(value)', function () {
    expect(1).toBe(1)
    expect(1).not.toBe('1')
  })

  // toEqual(value)
  it('toEqual(value)', function () {
    expect(null).toEqual(null)
    expect(undefined).toEqual(undefined)
    expect(0).toEqual(0)
    expect('').toEqual('')
    expect(true).toEqual(true)
    expect({ 'foo' : 'bar' }).toEqual({ 'foo' : 'bar' })
    expect([ 1, 2 ]).toEqual([ 1, 2 ])
  })

  // toMatch(string|regex)
  it('toMatch(string|regex)', function () {
    expect('foobar').toMatch('foo')
    expect('foobar').toMatch(/^foo/)
  })

  // toBeDefined(value)
  it('toBeDefined(value)', function () {
    expect(null).toBeDefined()
    expect(undefined).not.toBeDefined()
  })
  // toBeUndefined(value)
  it('toBeUndefined(value)', function () {
    expect(undefined).toBeUndefined()
    expect(null).not.toBeUndefined()
  })

  // toBeNull(value)
  it('toBeNull(value)', function () {
    expect(null).toBeNull()
    expect(undefined).not.toBeNull()
  })

  // toBeTruthy(value)
  it('toBeTruthy(value)', function () {
    expect(true).toBeTruthy()
    expect(1).toBeTruthy()
  })
  // toBeFalsy(value)
  it('toBeFalsy(value)', function () {
    expect(false).toBeFalsy()
    expect(0).toBeFalsy()
  })

  // toContain(member)
  it('toContain(member)', function () {
    expect([ 1, 2 ]).toContain(1)
    expect([ [ 1 ], 2 ]).not.toContain(1)
  })

  // toBeLessThan(value)
  it('toBeLessThan(value)', function () {
    expect(1).toBeLessThan(2)
    expect(2).not.toBeLessThan(2)
  })
  // toBeGreaterThan(value)
  it('toBeGreaterThan(value)', function () {
    expect(2).toBeGreaterThan(1)
    expect(2).not.toBeGreaterThan(2)
  })
  // toBeCloseTo(value, [precesion=2])
  it('toBeCloseTo(value, [precesion=2])', function () {
    // 校验标准：|actual - expected| < 10^(-precesion)/2
    expect(0.3 - 0.2).toBeCloseTo(0.1, -(Math.log(2 * Number.EPSILON) / Math.log(10)))
  })

  // toThrow()
  it('toThrow()', function () {
    expect(() => { throw new Error }).toThrow()
    expect(noop).not.toThrow()
  })

  // toThrowError([constructor], [string|regex])
  it('toThrowError([constructor], [string|regex])', function () {

    class Exception extends Error {
      constructor(message) {
        super(message)
      }
    }

    const func = () => { throw new Exception('foobar') }

    expect(func).toThrowError(Exception)
    expect(func).toThrowError(Exception, 'foobar')
    expect(func).toThrowError(Exception, /^foo/)
    expect(func).toThrowError('foobar')
    expect(func).toThrowError(/^foo/)

  })

})


// 临时挂起「测试用例」
// 挂起后，「测试用例」内所有「断言」均暂时不做校验
describe('Pending test spec', function () {

  // [1] 使用 xit(title, [implementation]) 来挂起「测试用例」
  xit('can be specified using xit(title, [implementation])')

  // [2] 使用 pending([reason]) 来挂起「测试用例」
  it('can be specified using pending([reason])', function() {
    pending('Temporarily disabled with pending([reason])')
  })

  // [3] 如果「测试用例」未声明 implementation 参数，则被自动认定为挂起状态
  it('can be specified without giving an implementation')

})
// 临时挂起「测试套件 」
// 挂起后，「测试套件」内所有「测试用例」均自动挂起
xdescribe('Pending test suite', noop)


// Setup & Teardown
describe('Setup & Teardown', function () {

  // 在进入该「测试套件」时，执行该「测试套件」里第一个「测试用例」之前调用
  beforeAll(noop)

  // 在离开该「测试套件」时，执行该「测试套件」里最后一个「测试用例」之后调用
  afterAll(noop)

  // beforeEach 在每个「测试用例」调用之前调用
  // 如果存在父级「测试套件」，则先调用父级「测试套件」里的 beforeEach 方法（递归调用）
  // 同时，每个 beforeEach → it → afterEach 迭代共享同一个上下文对象（this）
  // 该上下文对象在每个迭代开始时（父级「测试套件」的 beforeEach）清空为空对象
  beforeEach(noop)

  // afterEach 在每个「测试用例」调用之后调用
  // 如果存在父级「测试套件」，则在调用该「测试套件」的 afterEach 方法后调用父级「测试套件」里的 afterEach 方法（递归调用）
  afterEach(noop)

})

该 fiddle 用于演示 [jasmine](http://jasmine.github.io/) BDD 测试框架

```sh
$ npm install
$ npm test
```

---

<p align="center"><img alt="jasmine" src="https://raw.githubusercontent.com/pwnn/img/master/jasmine.png"></p>

---

基础断言：

- `toBe( value )`
- `toEqual( value )`
- `toMatch( substring|regex )`
- `toBeDefined( value )`
- `toBeUndefined( value )`
- `toBeNull( value )`
- `toBeTruthy( value )`
- `toBeFalsy( value )`
- `toContain( value )`
- `toBeLessThan( value )`
- `toBeGreaterThan( value )`
- `toBeCloseTo( value , [precision = 2] )`
- `toThrow()`
- `toThrowError( [constructor] , [string|regex] )`

---

钩子:

```js
describe( 'Hooks' , function () {

    // 在进入该「测试套件」时，执行该「测试套件」里第一个「测试用例」之前调用
    beforeAll( /* setup function */ )
    // 在离开该「测试套件」时，执行该「测试套件」里最后一个「测试用例」之后调用
    afterAll( /* teardown function */ )

    // beforeEach 在每个「测试用例」调用之前调用
    // 若存在父级「测试套件」，则先调用父级「测试套件」里的 beforeEach 方法（递归调用）
    beforeEach( /* setup function */ )
    // afterEach 在每个「测试用例」调用之后调用
    // 若存在父级「测试套件」，则在调用该「测试套件」的 afterEach 方法后调用父级「测试套件」里的 afterEach 方法（递归调用）
    afterEach( /* teardown function */ )

    // 同时，每个 beforeEach → it → afterEach 迭代共享同一个上下文对象（this）
    // 该上下文对象在每个迭代开始时（根级「测试套件」的 beforeEach）自动清空为空对象

} )
```

---

挂起操作：

```js
// 临时挂起「测试用例」
// 挂起后，「测试用例」内所有「断言」均暂时不做校验
describe( 'Pending test case' , function () {

    // [1] 使用 xit( title , [implementation] ) 来挂起「测试用例」
    xit( 'can be specified using xit( title , [implementation] )' )

    // [2] 使用 pending( [reason] ) 来挂起「测试用例」
    it( 'can be specified using pending( [reason] )' , function () {
        pending( 'Temporarily disabled with pending( [reason] )' )
    } )

    // [3] 如果「测试用例」未声明 implementation 参数，则被自动认定为挂起状态
    it( 'can be specified without giving an implementation' )

} )

// 临时挂起「测试套件」
// 挂起后，「测试套件」内所有「测试用例」均自动挂起
xdescribe( 'Pending test suite' , () => null )
```

---

创建 `Spy`：

- `spyOn( obj , methodName )`
- `jasmine.createSpy( [identity] )`
- `jasmine.createSpyObj( [identity] , methodNames )`

存根行为：

- `spyOn( obj , methodName ).and.callThrough()`
- `spyOn( obj , methodName ).and.stub()`
- `spyOn( obj , methodName ).and.returnValue( value )`
- `spyOn( obj , methodName ).and.returnValues( ...values )`
- `spyOn( obj , methodName ).and.callFake( func )`
- `spyOn( obj , methodName ).and.throwError( value )`

`Spy` 专属断言：

- `toHaveBeenCalled()`
- `toHaveBeenCalledTimes( n )`
- `toHaveBeenCalledWith( ...args )`

`spy.calls` 记录：

- `calls.any()`
- `calls.count()`
- `calls.argsFor( index )`
- `calls.allArgs()`
- `calls.all()`
- `calls.first()`
- `calls.mostRecent()`
- `calls.reset()`

---

异步支持：

```js
describe( 'Testing async code' , function () {

    const asyncTask = done => { setTimeout( done , 0 ) }

    // Hooks 亦拥有异步支持
    beforeAll( asyncTask )
    beforeEach( asyncTask )
    afterEach( asyncTask )
    afterAll( asyncTask )

    // 配置全局超时间隔（缺省值：5000ms）
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000

    // 在超时间隔内如若未调用 done 方法，则该异步「测试用例」不通过
    // 同时，可以调用 done.fail( [reason] ) 方法来手动不通过该异步「测试用例」

    // it( title , implementation , timeout )
    // 配置「测试用例」级超时间隔（覆盖全局超时间隔）
    it( 'by utilizing the done callback' , asyncTask , 2000 )

} )
```

---

通配符支持：

- `jasmine.any( constructor )`
- `jasmine.anything()`
- `jasmine.objectContaining( schema )`
- `jasmine.arrayContaining( subset )`
- `jasmine.stringMatching( substring|regex )`

---

Jasmine Clock:

- `jasmine.clock().install()`
- `jasmine.clock().uninstall()`
- `jasmine.clock().tick( millisecond )`
- `jasmine.clock().mockDate( [date] )`

```js
describe( 'Manually ticking the Jasmine Clock' , function () {

    beforeEach( function () {
        this.callback = jasmine.createSpy( 'callback' )
        jasmine.clock().install()
    } )

    afterEach( jasmine.clock.uninstall )

    it( 'causes a timeout to be called synchronously' , function () {

        setTimeout( this.callback , 10000 )

        expect( this.callback ).not.toHaveBeenCalled()

        jasmine.clock().tick( 10000 ) // move time forward
        expect( this.callback ).toHaveBeenCalled()

    } )

    it( 'causes an interval to be called synchronously' , function () {

        setInterval( this.callback , 100 )

        jasmine.clock().tick( 99 )
        expect( this.callback ).not.toHaveBeenCalled()

        jasmine.clock().tick( 50 )
        expect( this.callback ).toHaveBeenCalled()
        expect( this.callback ).toHaveBeenCalledTimes( 1 )

        jasmine.clock().tick( 80 )
        expect( this.callback ).toHaveBeenCalledTimes( 2 )

    } )

} )

describe( 'Mocking a Date object' , function () {

    beforeEach( jasmine.clock().install )
    afterEach( jasmine.clock().uninstall )

    it( 'mocks the current date' , function () {

        const baseTime = new Date( 2015 , 3 , 18 )

        // jasmine.clock().mockDate( [date] )
        jasmine.clock().mockDate( baseTime )
        jasmine.clock().tick( 1000 )

        expect( new Date().getTime() ).toEqual( baseTime.getTime() + 1000 )

    } )

} )
```

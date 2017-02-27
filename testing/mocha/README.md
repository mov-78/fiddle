该 fiddle 用于演示 [mocha](http://mochajs.org/) 测试框架

---

```sh
$ mocha -u <interface>
$ mocha --ui <interface>
```

__BDD Style DSL__

```js
describe( 'testSuite' , function () {

    before( noop )
    after( noop )
    beforeEach( noop )
    afterEach( noop )

    it( 'testCase' , function () {
    } )

    context( 'testSuite' , function () {
        specify( 'testCase' , function () {
        } )
    } )

} )
```

__TDD Style DSL__

```js
suite( 'testSuite' , function () {

    suiteSetup( noop )
    suiteTeardown( noop )
    setup( noop )
    teardown( noop )

    test( 'testCase' , function () {
    } )

} )
```

__QUNIT Style DSL__

```js
before( noop )
after( noop )
beforeEach( noop )
afterEach( noop )

suite( 'testSuite' )

test( 'testCase' , function () {
} )
```

---

- [Tagging](https://github.com/mochajs/mocha/wiki/Tagging)
- [Third party UIs](https://github.com/mochajs/mocha/wiki/Third-party-UIs)
- [Third party reporters](https://github.com/mochajs/mocha/wiki/Third-party-reporters)
- [Using mocha programmatically](https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically)

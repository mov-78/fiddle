该 fiddle 用于演示如何实现[自定义断言](http://chaijs.com/guide/helpers/)

---

```js
chai.use( bundle )
```

```js
module.exports = function bundle( chai , utils ) {

    expect( utils ).to.equal( chai.utils )

    chai.Assertion.addProperty( 'arrayLikeObject' , function () {

        expect( this ).to.be.instanceOf( chai.Assertion )

        //
        // 每个 chai.Assertion 实例各自维护一组 flags
        // 该 flags 保存在 __flags 属性之上，并且可以通过
        //
        //    chai.util.flag( assertion , key , [value] )
        //
        //    function flag( assertion , key , value ) {
        //        const flags = assertion.__flags || ( assertion.__flags = Object.create( null ) )
        //        if ( arguments.length === 3 ) {
        //            flags[ key ] = value
        //        } else {
        //            return flags[ key ]
        //        }
        //    }
        //
        // 方法来获取或设置 flags；断言属性或方法可以依据不同的 flags 组合来调整其评判策略
        // 其中 object flag 保存了断言主体的引用，并且可以通过 this._obj 来直接访问：
        //
        //    Reflect.defineProperty(
        //        chai.Assertion.prototype ,
        //        '_obj' ,
        //        {
        //            get() {
        //                return chai.util.flag( this , 'object' )
        //            }
        //            set( object ) {
        //                chai.util.flag( this , 'object' , object )
        //            }
        //        }
        //    )
        //

        expect( this ).to.have.ownProperty( '__flags' ).that.is.an( 'object' )

        expect( this._obj ).to.equal( this.__flags.object )
        expect( this._obj ).to.equal( utils.flag( this , 'object' ) )

        // 接下来便可以基于当前 flags 及已有断言来定义新的断言
        assert.isDefined( this._obj )   // TDD:assert
        expect( this._obj ).to.exist    // BDD:expect
        this._obj.should.exist          // BDD:should

        //
        // 如果在该断言中调用了其他断言，则需要将当前断言的 flags 复制过去：
        //
        //    chai.util.transferFlags( sourceAssertion , targetAssertion , [includeAll=true] )
        //
        // 基本等同于：
        //
        //    includeAll = arguments.length === 3 ? includeAll : true
        //    const flags = sourceAssertion.__flags || ( sourceAssertion.__flags = Object.create( null ) )
        //    for ( let key in flags ) {
        //        if ( flags.hasOwnProperty( key ) ) {
        //            if ( includeAll || ( key !== 'object' && key !== 'ssfi' && key !== 'message' ) ) {
        //                targetAssertion[ key ] = flags[ key ]
        //            }
        //        }
        //    }
        //

        const negate = chai.util.flag( this , 'negate' )
        const assertion = new chai.Assertion

        utils.transferFlags( this , assertion , true )
        expect( utils.flag( assertion , 'negate' ) ).to.equal( negate )

        // 通用基础断言
        this.assert(

            // [1] 表达式
            !negate ,

            // [2] 仅当 negate flag 未开启且表达式为假时使用
            // [3] 仅当 negate flag 开启且表达式为真时使用
            // 同时支持如下插值表达式：
            //    - #{this} 当前断言主体
            //    - #{exp}  期望值（[4]）
            //    - #{act}  实际值（[5]）
            'expected #{this} to be #{exp}, but got #{act}' , // [2]
            'expected #{this} to not be #{exp}' ,             // [3]

            'expected' ,  // [4] 期望值
            'actual' ,    // [5] 实际值（默认为 this._obj）

            true          // [6] diff 开关

        )

    } )

}
```

---

添加断言__属性__：

- [addProperty( name , getter )](http://chaijs.com/api/plugins/#method_addproperty)

```js
// 基本等同于：
Reflect.defineProperty(
    chai.Assertion.prototype ,
    name ,
    {
        configurable : true ,
        get() {
            const result = getter.call( this )
            return result === undefined ? this : result
        }
    }
)
```

覆盖或扩展（继承）已有断言__属性__：

- [overwriteProperty( name , getter )](http://chaijs.com/api/plugins/#method_overwriteproperty)

```js
// 基本等同于：
let _super = function noop() {}
const descriptor = Object.getOwnPropertyDescriptor( chai.Assertion.prototype , name )
if ( descriptor && typeof descriptor.get === 'function' ) {
    _super = descriptor.get
}
Reflect.defineProperty(
    chai.Assertion.prototype ,
    name ,
    {
        configurable : true ,
        get() {
            const result = getter( _super ).call( this )
            return result === undefined ? this : result
        }
    }
)
```

添加断言__方法__：

- [addMethod( name , method )](http://chaijs.com/api/plugins/#method_addmethod)

```js
// 基本等同于：
chai.Assertion.prototype[ name ] = function ( ...args ) {
    const result = method.apply( this , args )
    return result === undefined ? this : result
}
```

覆盖或扩展（继承）已有断言__方法__：

- [overwriteMethod( name， method )](http://chaijs.com/api/plugins/#method_overwritemethod)

```js
// 基本等同于：
let _super = function noop() { return this }
const _method = chai.Assertion.prototype[ name ]
if ( _method && typeof _method === 'function' ) {
    _super = _method
}
chai.Assertion.prototype[ name ] = function ( ...args ) {
    const result = method( _super ).apply( this , args )
    return result === undefined ? this : result
}
```

添加__链式断言方法__：

- [addChainableMethod( name , method , chainingBehavior )](http://chaijs.com/api/plugins/#method_addchainablemethod)

```js
// 基本等同于：
if ( typeof chainingBehavior !== 'function' ) {
    chainingBehavior = function noop() {}
}
const chainableBehavior = { method , chainingBehavior }

chai.Assertion.prototype.__methods = chai.Assertion.prototype.__methods || {}
chai.Assertion.prototype.__methods[ name ] = chainableBehavior

Reflect.defineProperty(
    chai.Assertion.prototype ,
    name ,
    {
        configurable : true ,
        get() {
            chainableBehavior.chainingBehavior.call( this )
            const assert = function ( ...args ) {
                const result = chainableBehavior.method.apply( this , args )
                return result === undefined ? this : result
            }
            Reflect.setPrototypeOf( assert , this )
            assert.apply = Function.prototype.apply
            assert.bind = Function.prototype.bind
            assert.call = Function.prototype.call
            chai.util.transferFlags( this , assert )
            return assert
        }
    }
)
```

覆盖或扩展（继承）已有__链式断言方法__：

- [overwriteChainableMethod( name , method , chainingBehavior )](#)

```js
// 基本等同于：
const chainableBehavior = chai.Assertion.prototype.__methods[ name ]

const _method = chainableBehavior.method
chainableBehavior.method = function ( ...args ) {
    const result = method( _method ).apply( this , args )
    return result === undefined ? this : result
}

const _chainingBehavior = chainableBehavior.chainingBehavior
chainableBehavior.chainingBehavior = function () {
    const result = chainingBehavior( _chainingBehavior ).call( this )
    return result === undefined ? this : result
}
```

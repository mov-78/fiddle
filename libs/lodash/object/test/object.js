let _ = require( 'lodash' )
let chai = require( 'chai' )
let sinon = require( 'sinon' )

before( function () {
    chai.should()
    chai.use( require( 'sinon-chai' ) )
} )

describe( 'lodash/object' , function () {

    // create( prototype , [properties] )
    it( 'create' , function () {

        let proto = {}
        let obj = _.create( proto , { foo : 'bar' } )

        Reflect.getPrototypeOf( obj ).should.equal( proto )
        obj.should.have.ownProperty( 'foo' , 'bar' )

    } )


    //
    // assign( object , ...sources )
    // assignIn|extend( object , ...sources )
    // assignWith( object , ...sources , customizer )
    // assignInWith|extendWith( object , ...sources , customizer )
    // defaults( object , ...sources )
    // defaultsDeep( object , ...sources )
    //

    it( 'assign , assignIn|extend , assignWith , assignInWith|extendWith' , function () {

        _.assign( {} , { a : 0 , b : 1 } , _.create( { a : 2 , c : 3 } ) )
            .should.deep.equal( { a : 0 , b : 1 } )
        _.extend( {} , { a : 0 , b : 1 } , _.create( { a : 2 , c : 3 } ) )
            .should.deep.equal( { a : 2 , b : 1 , c : 3 } )

        _.assignWith(
            {} ,
            { a : 0 , b : 1 } ,
            _.create( { a : 2 , c : 3 } ) ,
            ( objVal , srcVal , key , obj , source ) => srcVal
        ).should.deep.equal( { a : 0 , b : 1 } )
        _.extendWith(
            {} ,
            { a : 0 , b : 1 } ,
            _.create( { a : 2 , c : 3 } ) ,
            ( objVal , srcVal , key , obj , source ) => srcVal
        ).should.deep.equal( { a : 2 , b : 1 , c : 3 } )

    } )
    it( 'defaults , defaultsDeep' , function () {

        // - 考虑继承属性
        // - 仅在 object 中对应属性未定义时才设置，且仅设置一次
        _.defaults( { m : 0 } , _.create( { m : 1 , n : 2 } ) )
            .should.deep.equal( { m : 0 , n : 2 } )

        _.defaults( { a : { b : 0 } } , { a : { b : 1 , c : 2 } } )
            .should.deep.equal( { a : { b : 0 } } )
        _.defaultsDeep( { a : { b : 0 } } , { a : { b : 1 , c : 2 } } )
            .should.deep.equal( { a : { b : 0 , c : 2 } } )

    } )


    //
    // has( object , path )
    // hasIn( object , path )
    //

    it( 'has , hasIn' , function () {

        let obj = _.create( { foo : { bar : 1 } } , { baz : { qux : 2 } } )

        _.has( obj , 'foo.bar' ).should.be.false
        _.has( obj , 'baz.qux' ).should.be.true

        _.hasIn( obj , 'foo.bar' ).should.be.true
        _.hasIn( obj , 'baz.qux' ).should.be.true

    } )


    // get( object , path , [defaultValue] )
    it( 'get' , function () {

        let obj = { foo : { bar : 'baz' } }

        _.get( obj , 'foo.bar' ).should.equal( 'baz' )
        _.get( obj , 'not.exist' , 'qux' ).should.equal( 'qux' )

    } )


    // result( object , path , [defaultValue] )
    it( 'result' , function () {
        _.result( {
            foo : {
                baz : 'qux' ,
                bar() {
                    return this.baz
                }
            }
        } , 'foo.bar' ).should.equal( 'qux' )
    } )


    // at( object , ...paths|paths )
    it( 'at' , function () {

        // at( object , paths )
        _.at( { foo : { bar : 'baz' } } , [ 'foo.bar' ] )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 'baz' ] )

        // at( object , ...paths )
        _.at( { foo : 'bar' , baz : 'qux' } , 'foo' , 'baz' )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 'bar' , 'qux' ] )

    } )


    //
    // set( object , path , value )
    // update( object , path , updater )
    // unset( object , path )
    //

    it( 'set , update , unset' , function () {

        _.set( { foo : { bar : 'baz' } } , 'foo.bar' , 'qux' )
            .should.deep.equal( { foo : { bar : 'qux' } } )

        _.set( {} , 'foo.bar' , 'baz' )
            .should.deep.equal( { foo : { bar : 'baz' } } )
        _.set( {} , '[0][0]' , 'foo' )
            .should.deep.equal( { 0 : [ 'foo' ] } )

        _.update( { foo : { bar : 'baz' } } , 'foo.bar' , value => value )
            .should.deep.equal( { foo : { bar : 'baz' } } )

        _.update( {} , 'foo.bar' , value => 'baz' )
            .should.deep.equal( { foo : { bar : 'baz' } } )
        _.update( {} , '[0][0]' , value => 'foo' )
            .should.deep.equal( { 0 : [ 'foo' ] } )

        let obj = { foo : { bar : 'baz' } }
        _.unset( obj , 'foo.bar' ).should.be.true
        obj.should.deep.equal( { foo : {} } )

    } )


    //
    // keys( object )
    // keysIn( object )
    // values( object )
    // valuesIn( object )
    // functions( object )
    // functionsIn( object )
    //

    it( 'keys , keysIn , values , valuesIn , functions , functionsIn' , function () {

        let obj = _.create( { foo : _.noop } , { bar : _.noop , baz : null } )

        _.keys( obj ).should.have.members( [ 'bar' , 'baz' ] )
        _.keysIn( obj ).should.have.members( [ 'foo' , 'bar' , 'baz' ] )

        _.functions( obj ).should.have.members( [ 'bar' ] )
        _.functionsIn( obj ).should.have.members( [ 'foo' , 'bar' ] )

        obj = _.create( { foo : 'bar' } , { baz : 'qux' } )

        _.values( obj ).should.have.members( [ 'qux' ] )
        _.valuesIn( obj ).should.have.members( [ 'bar' , 'qux' ] )

    } )


    //
    // entries|toPairs( object )
    // entriesIn|toPairsIn( object )
    //

    it( 'entries|toPairs , entriesIn|toPairsIn' , function () {

        let obj = _.create( { foo : 'bar' } , { baz : 'qux' } )

        _.toPairs( obj )
            .should.have.deep.members( [ [ 'baz' , 'qux' ] ] )
        _.toPairsIn( obj )
            .should.have.deep.members( [ [ 'foo' , 'bar' ] , [ 'baz' , 'qux' ] ] )

    } )


    //
    // forIn( object , iteratee )
    // forInRight( object , iteratee )
    // forOwn( object , iteratee )
    // forOwnRight( object , iteratee )
    //

    it( 'forIn , forInRight , forOwn , forOwnRight' , function () {

        let spy = sinon.spy()
        let obj = _.create( { foo : 1 } , { bar : 2 } )

        _.forIn( obj , ( value , key , object ) => spy( key ) )
        spy.should.have.callCount( _.keysIn( obj ).length )
        spy.should.have.been.calledWith( 'foo' )
        spy.should.have.been.calledWith( 'bar' )

        spy.reset()

        _.forOwn( obj , ( value , key , object ) => spy( key ) )
        spy.should.have.callCount( _.keys( obj ).length )
        spy.should.not.have.been.calledWith( 'foo' )
        spy.should.have.been.calledWith( 'bar' )


    } )


    //
    // mapKeys( object , iteratee )
    // mapValues( object , iteratee )
    //

    it( 'mapKeys , mapValues' , function () {

        _.mapKeys( { foo : 'bar' , baz : 'bar' } , ( value , key , object ) => value )
            .should.deep.equal( { bar : 'bar' } )

        _.mapValues( { foo : 'bar' } , ( value , key , object ) => key )
            .should.deep.equal( { foo : 'foo' } )

    } )


    //
    // findKey( object , predicate )
    // findLastKey( object , predicate )
    //

    it( 'findKey , findLastKey' , function () {

        _.findKey(
            { foo : 'qux' , bar : 'qux' } ,
            ( value , key , object ) => value === 'qux'
        ).should.equal( 'foo' )

        _.findLastKey(
            { foo : 'qux' , bar : 'qux' } ,
            ( value , key , object ) => value === 'qux'
        ).should.equal( 'bar' )

    } )


    //
    // pick( object , ...key|keys )
    // pickBy( object , predicate )
    // omit( object , ...key|keys )
    // omitBy( object , predicate )
    //

    it( 'pick , pickBy , omit , omitBy' , function () {

        let obj = { foo : 1 , bar : 2 }
        let predicate = ( value , key ) => value % 2 === 0

        _.pick( obj , 'foo' )
            .should.deep.equal( { foo : 1 } )
        _.pickBy( obj , predicate )
            .should.deep.equal( { bar : 2 } )

        _.omit( obj , 'foo' )
            .should.deep.equal( { bar : 2 } )
        _.omitBy( obj , predicate )
            .should.deep.equal( { foo : 1 } )

    } )


    //
    // invert( object )
    // invertBy( object , iteratee )
    //

    it( 'invert , invertBy' , function () {

        _.invert( { foo : 'qux' , bar : 'qux' } )
            .should.deep.equal( { qux : 'bar' } ) // `invert` 覆盖同名属性

        _.invertBy( { foo : 'qux' , bar : 'qux' } , value => `group:${ value }` )
            .should.deep.equal( { 'group:qux' : [ 'foo' , 'bar' ] } ) // `invertBy` 合并同名属性

    } )


    // invoke( object , path , ...args )
    it( 'invoke' , function () {

        let obj = { foo : { bar : sinon.stub().returns( 'tinted' ) } }

        _.invoke( obj , 'foo.bar' ).should.equal( 'tinted' )
        obj.foo.bar.called.should.be.true

        _.invoke( obj , 'not.exist' ) // 若方法不存在不会抛出异常

    } )

} )

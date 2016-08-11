//
// 创建 Spy
//

describe( 'A spy' , function () {

    let foo = null
    let bar = null
    let setBarCalled

    let args = [ 1 , 2 , 3 ]

    beforeEach( function () {

        foo = {
            setBar( value ) {
                bar = value
                setBarCalled = true
            }
        }

        // spyOn( obj , methodName )
        spyOn( foo , 'setBar' )

        args.forEach( function ( arg ) {
            foo.setBar( arg )
        } )

    } )

    // Spy 专属断言：
    //    - toHaveBeenCalled()
    //    - toHaveBeenCalledTimes( n )
    //    - toHaveBeenCalledWith( ...args )
    it( 'tracks all calls to it' , function () {

        expect( foo.setBar ).toHaveBeenCalled()
        expect( foo.setBar ).toHaveBeenCalledTimes( args.length )

        args.forEach( function ( arg ) {
            expect( foo.setBar ).toHaveBeenCalledWith( arg )
        } )

    } )

    it( 'by default skip the actual implementation' , function () {
        expect( setBarCalled ).toBeFalsy()
        expect( bar ).toBeNull()
    } )

} )


//
// and.callThrough()
//

describe( 'A spy, when configured to call through' , function () {

    let foo = null
    let bar = null
    let fetchedBar
    let setBarCalled

    beforeEach( function () {

        foo = {
            setBar( value ) {
                bar = value
                setBarCalled = true
            } ,
            getBar() {
                return bar
            }
        }

        // and.callThrough()
        spyOn( foo , 'setBar' ).and.callThrough()

        foo.setBar( 'baz' )
        fetchedBar = foo.getBar()

    } )

    it( 'will delegate to the actual implementation' , function () {

        expect( fetchedBar ).toEqual( 'baz' )

        expect( setBarCalled ).toBeTruthy()
        expect( bar ).toEqual( 'baz' )

    } )

} )


//
// and.returnValue( value )
// and.returnValues( ...values )
//

describe( 'A spy,' , function () {

    describe( 'when configured to fake a return value' , function () {

        let foo = null
        let bar = null
        let fetchedBar
        let getBarCalled

        beforeEach( function () {

            foo = {
                setBar( value ) {
                    bar = value
                } ,
                getBar() {
                    getBarCalled = true
                    return bar
                }
            }

            spyOn( foo , 'getBar' ).and.returnValue( 'qux' )

            foo.setBar( 'baz' )
            fetchedBar = foo.getBar()

        } )

        it( 'will skip the actual implementation' , function () {
            expect( getBarCalled ).toBeFalsy()
        } )

        it( 'will return the fake value' , function () {
            expect( bar ).toEqual( 'baz' )
            expect( fetchedBar ).toEqual( 'qux' )
        } )

    } )

    describe( 'when configured to fake a series of return values' , function () {

        let foo = null
        let bar = null
        let getBarCalled

        beforeEach( function () {

            foo = {
                setBar( value ) {
                    bar = value
                } ,
                getBar() {
                    getBarCalled = true
                    return bar
                }
            }

            spyOn( foo , 'getBar' ).and.returnValues( 1 , 2 )

            foo.setBar( 'baz' )

        } )

        it( 'will skip the actual implementation' , function () {
            foo.getBar()
            expect( getBarCalled ).toBeFalsy()
        } )

        it( `will return the fake values in turn until it reaches
        the end, at which point it will return undefined for
        all subsequent calls` , function () {

            expect( bar ).toEqual( 'baz' )

            expect( foo.getBar() ).toEqual( 1 )
            expect( foo.getBar() ).toEqual( 2 )
            expect( foo.getBar() ).toBeUndefined()

        } )

    } )

} )


//
// and.callFake( func )
//

describe( 'A spy, when configured with an alternate implementation' , function () {

    let foo = null
    let bar = null
    let fetchedBar
    let getBarCalled

    beforeEach( function () {

        foo = {
            setBar( value ) {
                bar = value
            } ,
            getBar() {
                getBarCalled = true
                return bar
            }
        }

        spyOn( foo , 'getBar' ).and.callFake( () => 'tinted' )

        foo.setBar( 'baz' )
        fetchedBar = foo.getBar()

    } )

    it( 'will skip the actual implementation' , function () {
        expect( getBarCalled ).toBeFalsy()
    } )

    it( 'will delegate to the alternate implementation' , function () {
        expect( bar ).toEqual( 'baz' )
        expect( fetchedBar ).toEqual( 'tinted' )
    } )

} )


//
// and.throwError( value )
//

describe( 'A spy, when configured to throw an error' , function () {

    beforeEach( function () {
        this.fn = () => { this.fnCalled = true }
        spyOn( this , 'fn' ).and.throwError( 'error' )
    } )

    it( 'will skip the actual implementation' , function () {
        try {
            this.fn()
        } catch ( error ) {
            // noop
        }
        expect( this.fnCalled ).toBeFalsy()
    } )

    it( 'throws the specified value' , function () {
        expect( this.fn ).toThrowError( 'error' )
    } )

} )


//
// and.stub()
//

describe( 'A spy' , function () {

    let foo
    let bar = null
    let setBarCalled

    beforeEach( function () {

        foo = {
            setBar( value ) {
                bar = value
                setBarCalled = true
            }
        }

        spyOn( foo , 'setBar' ).and.callThrough()

    } )

    it( 'can restore the original stubbing behavior' , function () {

        foo.setBar( 'baz' )
        expect( setBarCalled ).toBeTruthy()
        expect( bar ).toEqual( 'baz' )

        foo.setBar.and.stub()
        setBarCalled = bar = null

        foo.setBar( 'baz' )
        expect( setBarCalled ).toBeFalsy()
        expect( bar ).toBeNull()

    } )

} )


//
// spy.calls 记录
//

describe( 'A spy' , function () {

    let foo
    let bar = null

    beforeEach( function () {

        foo = {
            setBar( value ) {
                bar = value
            }
        }

        spyOn( foo , 'setBar' )

    } )

    // calls.any()
    it( 'tracks if it was called at all' , function () {

        expect( foo.setBar.calls.any() ).toBeFalsy()

        foo.setBar( 'baz' )
        expect( foo.setBar.calls.any() ).toBeTruthy()

    } )

    // calls.count()
    it( 'tracks the number of times it was called' , function () {

        expect( foo.setBar.calls.count() ).toEqual( 0 )

        foo.setBar( 'baz' )
        foo.setBar( 'qux' )
        expect( foo.setBar.calls.count() ).toEqual( 2 )

    } )

    // calls.argsFor( index )
    it( 'trakcs the arguments of each call' , function () {

        foo.setBar( 'foo' )
        foo.setBar( 'bar' , 'baz' )

        expect( foo.setBar.calls.argsFor( 0 ) ).toEqual( [ 'foo' ] )
        expect( foo.setBar.calls.argsFor( 1 ) ).toEqual( [ 'bar' , 'baz' ] )

    } )

    // calls.allArgs()
    it( 'trakcs the arguments of all calls' , function () {

        foo.setBar( 'foo' )
        foo.setBar( 'bar' , 'baz' )

        expect( foo.setBar.calls.allArgs() )
            .toEqual( [ [ 'foo' ] , [ 'bar' , 'baz' ] ] )

    } )

    // calls.all()
    // calls.first()
    // calls.mostRecent()
    it( 'tracks the arguments, return value and context of all calls' , function () {

        let ctxt = {}

        foo.setBar( 'foo' )
        foo.setBar.call( ctxt , 'bar' , 'baz' )

        expect( foo.setBar.calls.all() )
            .toEqual( [
                {
                    object : foo ,
                    args : [ 'foo' ] ,
                    returnValue : undefined
                } ,
                {
                    object : ctxt ,
                    args : [ 'bar' , 'baz' ] ,
                    returnValue : undefined
                }
            ] )

        expect( foo.setBar.calls.first() )
            .toEqual( foo.setBar.calls.all()[ 0 ] )

        expect( foo.setBar.calls.mostRecent() )
            .toEqual( foo.setBar.calls.all()[ foo.setBar.calls.count() - 1 ] )

    } )

    // calls.reset()
    it( 'can be reset' , function () {

        foo.setBar( 'baz' )
        expect( foo.setBar ).toHaveBeenCalled()
        expect( foo.setBar.calls.any() ).toBeTruthy()

        foo.setBar.calls.reset()
        expect( foo.setBar ).not.toHaveBeenCalled()
        expect( foo.setBar.calls.any() ).toBeFalsy()

    } )

} )


//
// jasmine.createSpy( [identity] )
//

describe( 'A spy, when created manually' , function () {

    beforeEach( function () {
        this.bareSpy = jasmine.createSpy( 'bareSpy' )
    } )

    it( 'acts as any other spy' , function () {

        expect( this.bareSpy ).not.toHaveBeenCalled()
        expect( this.bareSpy.calls.any() ).toBeFalsy()

        this.bareSpy()

        expect( this.bareSpy ).toHaveBeenCalled()
        expect( this.bareSpy.calls.any() ).toBeTruthy()

    } )

} )


//
// jasmine.createSpyObj( [identity] , methodNames )
//

describe( 'Multiple spies, when created manually' , function () {

    beforeEach( function () {

        this.tape = jasmine.createSpyObj( 'tape' , [ 'play' , 'pause' , 'stop' , 'rewind' ] )

        this.tape.play()
        this.tape.pause()
        this.tape.rewind( 0 )

    } )

    it( 'acts as any other spy' , function () {
        expect( this.tape.play ).toHaveBeenCalled()
        expect( this.tape.pause ).toHaveBeenCalled()
        expect( this.tape.rewind ).toHaveBeenCalled()
        expect( this.tape.rewind ).toHaveBeenCalledWith( 0 )
    } )

} )

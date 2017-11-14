// 基础断言、自定义断言及自定义对称/非对称判等逻辑
describe( 'Base assertion' , function () {

    beforeAll( function () {

        // 加载自定义断言
        jasmine.addMatchers( require( '../helpers/customMatchers' ) )

        // 加载自定义对称判等逻辑
        jasmine.addCustomEqualityTester( require( '../helpers/customSymmetricEqualityTester' ) )

    } )

    // toBe( value )
    it( 'toBe( value )' , function () {

        expect( 1 ).toBe( 1 )
        expect( 1 ).not.toBe( '1' )

        expect( [ 1 , 2 ] ).not.toBe( [ 1 , 2 ] )
        expect( { foo : 'bar' } ).not.toBe( { foo : 'bar' } )

    } )

    // toEqual( value )
    it( 'toEqual( value )' , function () {

        expect( 1 ).toEqual( 1 )
        expect( 1 ).not.toEqual( '1' )

        expect( [ 1 , 2 ] ).toEqual( [ 1 , 2 ] )
        expect( { foo : 'bar' } ).toEqual( { foo : 'bar' } )

        // 自定义对称判等逻辑
        expect( { id : 1 , message : 'foo' } )
            .toEqual( { id : 1 , message : 'bar' } )

        // 自定义非对称判等逻辑
        expect( 'foo|bar|baz|qux' )
            .toEqual( {
                asymmetricMatch( actual ) {
                    return actual.split( '|' )[ 1 ] === 'bar'
                }
            } )

    } )

    // toMatch( substring|regex )
    it( 'toMatch( substring|regex )' , function () {
        expect( 'foobar' ).toMatch( 'foo' )
        expect( 'foobar' ).toMatch( /^foo/ )
    } )

    // toBeDefined( value )
    it( 'toBeDefined( value )' , function () {
        expect( null ).toBeDefined()
        expect( undefined ).not.toBeDefined()
    } )
    // toBeUndefined( value )
    it( 'toBeUndefined( value )' , function () {
        expect( undefined ).toBeUndefined()
        expect( null ).not.toBeUndefined()
    } )

    // toBeNull( value )
    it( 'toBeNull( value )' , function () {
        expect( null ).toBeNull()
        expect( undefined ).not.toBeNull()
    } )

    // toBeTruthy( value )
    it( 'toBeTruthy( value )' , function () {
        expect( true ).toBeTruthy()
        expect( 1 ).toBeTruthy()
    } )
    // toBeFalsy( value )
    it( 'toBeFalsy( value )' , function () {
        expect( false ).toBeFalsy()
        expect( 0 ).toBeFalsy()
    } )

    // toContain( value )
    it( 'toContain( value )' , function () {

        expect( [ 1 , 2 ] ).toContain( 1 )

        expect( [ [ 1 ] , 2 ] ).not.toContain( 1 )
        expect( [ [ { foo : 1 } ] ] ).toContain( [ { foo : 1 } ] )

    } )

    // toBeLessThan( value )
    it( 'toBeLessThan( value )' , function () {
        expect( 1 ).toBeLessThan( 2 )
        expect( 2 ).not.toBeLessThan( 2 )
    } )
    // toBeGreaterThan( value )
    it( 'toBeGreaterThan( value )' , function () {
        expect( 2 ).toBeGreaterThan( 1 )
        expect( 2 ).not.toBeGreaterThan( 2 )
    } )
    // toBeCloseTo( value , [precision = 2] )
    it( 'toBeCloseTo( value , [precesion = 2] )' , function () {
        // 校验标准：| actual - expected | < ( 10^( -precision ) ) / 2
        expect( 0.3 - 0.2 )
            .toBeCloseTo( 0.1 , -( Math.log( 2 * Number.EPSILON ) / Math.log( 10 ) ) )
    } )

    // toThrow()
    it( 'toThrow()' , function () {
        expect( () => { throw new Error() } ).toThrow()
        expect( () => null ).not.toThrow()
    } )

    // toThrowError( [constructor] , [string|regex] )
    it( 'toThrowError( [constructor] , [string|regex] )' , function () {

        class Exception extends Error {}

        const func = () => { throw new Exception( 'foobar' ) }

        expect( func ).toThrowError( Exception )
        expect( func ).toThrowError( Exception , 'foobar' )
        expect( func ).toThrowError( Exception , /^foo/ )
        expect( func ).toThrowError( 'foobar' )
        expect( func ).toThrowError( /^foo/ )

    } )

    // 自定义断言
    it( 'toBeEmpty()' , function () {

        expect( '' ).toBeEmpty()
        expect( 'foobar' ).not.toBeEmpty()

        expect( [] ).toBeEmpty()
        expect( [ 1 ] ).not.toBeEmpty()

        expect( {} ).toBeEmpty()
        expect( { foo : 'bar' } ).not.toBeEmpty()

    } )

} )

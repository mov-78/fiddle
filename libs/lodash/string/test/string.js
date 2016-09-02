const _ = require( 'lodash' )
const chai = require( 'chai' )

before( chai.should )

describe( 'lodash/string' , function () {

    //
    // trim( string , [chars=␣] )
    // trimStart( string , [chars=␣] )
    // trimEnd( string , [chars=␣] )
    //

    it( 'trim , trimStart , trimEnd' , function () {
        _.trim( ' foobar ' ).should.equal( 'foobar' )
        _.trimStart( ' foobar' ).should.equal( 'foobar' )
        _.trimEnd( 'foobar ' ).should.equal( 'foobar' )
    } )


    //
    // pad( string , length , [chars=␣] )
    // padStart( string , length , [chars=␣] )
    // padEnd( string , length , [chars=␣] )
    //

    it( 'pad , padStart , padEnd' , function () {
        _.pad( 'foo' , 5 ).should.equal( ' foo ' )
        _.padStart( 'foo' , 5 ).should.equal( '  foo' )
        _.padEnd( 'foo' , 5 ).should.equal( 'foo  ' )
    } )


    //
    // startsWith( string , target , [position=0] )
    // endsWith( string , target , [length=string.length] )
    //

    it( 'startsWith , endsWith' , function () {

        _.startsWith( 'foobar' , 'foo' ).should.be.true
        _.startsWith( 'foobar' , 'bar' , 3 ).should.be.true

        _.endsWith( 'foobar' , 'bar' ).should.be.true
        _.endsWith( 'foobar' , 'foo' , 3 ).should.be.true

    } )


    //
    // toUpper( string )
    // toLower( string )
    // capitalize( string )
    //

    it( 'toUpper , toLower , capitalize' , function () {
        _.toUpper( 'fOo' ).should.equal( 'FOO' )
        _.toLower( 'fOo' ).should.equal( 'foo' )
        _.capitalize( 'fOo' ).should.equal( 'Foo' )
    } )


    // parseInt( string , [radix=10|16] )
    it( 'parseInt' , function () {
        _.parseInt( '150318' ).should.equal( 150318 )
        _.parseInt( '0x150318' ).should.equal( 0x150318 )
    } )


    // replace( string , pattern , replacement )
    it( 'replace' , function () {
        _.replace( 'foobar' , 'o' , '' ).should.equal( 'fobar' )
        _.replace( 'foobar' , /o/g , '' ).should.equal( 'fbar' )
    } )


    // repeat( string , [n=1] )
    it( 'repeat' , function () {
        _.repeat( 'bla' , 3 ).should.equal( 'blablabla' )
    } )


    //
    // split( string , separator )
    // words( string , pattern )
    //

    it( 'split , words' , function () {

        _.split( 'foo,bar' , ',' )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 'foo' , 'bar' ] )

        _.words( 'foo,bar' , /\w+/g )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 'foo' , 'bar' ] )

    } )


    //
    // template( string , [options] )
    //    - options.interpolate = _.templateSettings.interpolate
    //    - options.escape = _.templateSettings.escape
    //    - options.evaluate = _.templateSettings.evaluate
    //    - options.imports = _.templateSettings.imports
    //

    it( 'template' , function () {

        let compile

        // interpolate
        compile = _.template( '<%= name %>' )
        compile( { name : 'Pwn' } )
            .should.equal( 'Pwn' )

        // escape
        compile = _.template( '<%- value %>' )
        compile( { value : '<script></script>' } )
            .should.equal( '&lt;script&gt;&lt;/script&gt;' )

        // evaluate
        compile = _.template( '<% print( _.toUpper( name ) ) %>' )
        compile( { name : 'Pwn' } )
            .should.equal( 'PWN' )

        // imports
        // 用于引入额外自由变量
        // _.templateSettings.imports 基本上引入了 lodash 全部的方法
        compile = _.template( '<%= up( name ) %>' , { imports : { up : _.toUpper } } )
        compile( { name : 'Pwn' } ).should.equal( 'PWN' )

        // variable
        // 禁止 with 语句
        compile = _.template( '<%= data.name %>' , { variable : 'data' } )
        compile( { name : 'Pwn' } ).should.equal( 'Pwn' )

    } )


    //
    // truncate( string , [options] )
    //    - options.length=30
    //    - options.omission='…'
    //

    it( 'truncate' , function () {
        _.truncate( 'foobar' , { length : 5 } ).should.equal( 'fo...' )
    } )


    //
    // upperCase( string )
    // lowerCase( string )
    // camelCase( string )
    // startCase( string )
    // snakeCase( string )
    // kebabCase( string )
    //

    it( 'upperCase , lowerCase , camelCase , startCase , snakeCase , kebabCase' , function () {

        _.upperCase( 'foo bar' ).should.equal( 'FOO BAR' )
        _.upperCase( 'fooBar' ).should.equal( 'FOO BAR' )
        _.upperCase( '__foo__bar__' ).should.equal( 'FOO BAR' )

        _.lowerCase( 'FOO BAR' ).should.equal( 'foo bar' )
        _.lowerCase( 'fooBar' ).should.equal( 'foo bar' )
        _.lowerCase( '__foo__bar__' ).should.equal( 'foo bar' )

        _.camelCase( 'FOO BAR' ).should.equal( 'fooBar' )
        _.camelCase( 'FooBar' ).should.equal( 'fooBar' )
        _.camelCase( '__foo__bar__' ).should.equal( 'fooBar' )

        _.startCase( 'foo bar' ).should.equal( 'Foo Bar' )
        _.startCase( 'FooBar' ).should.equal( 'Foo Bar' )
        _.startCase( '__foo__bar__' ).should.equal( 'Foo Bar' )

        _.snakeCase( 'foo bar' ).should.equal( 'foo_bar' )
        _.snakeCase( 'fooBar' ).should.equal( 'foo_bar' )
        _.snakeCase( '__foo__bar__' ).should.equal( 'foo_bar' )

        _.kebabCase( 'foo bar' ).should.equal( 'foo-bar' )
        _.kebabCase( 'fooBar' ).should.equal( 'foo-bar' )
        _.kebabCase( '__foo__bar__' ).should.equal( 'foo-bar' )

    } )

} )

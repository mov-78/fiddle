let _ = require( 'lodash' )
let chai = require( 'chai' )

before( chai.should )

describe( 'lodash/number' , function () {

    // clamp( number , [lower] , upper )
    // 区间为：[ lower , upper ]
    it( 'clamp' , function () {

        _.clamp( 0 , 5 ).should.equal( 0 )
        _.clamp( 5 , 5 ).should.equal( 5 )
        _.clamp( 10 , 5 ).should.equal( 5 )

        _.clamp( -5 , 0 , 5 ).should.equal( 0 )
        _.clamp( 1 , 0 , 5 ).should.equal( 1 )
        _.clamp( 10 , 0 , 5 ).should.equal( 5 )

    } )

    // inRange( number , [lower=0] , upper )
    // 区间为：[ lower , upper )
    it( 'inRange' , function () {

        _.inRange( -5 , 5 ).should.be.false
        _.inRange( 0 , 5 ).should.be.true
        _.inRange( 5 , 5 ).should.be.false
        _.inRange( 10 , 5 ).should.be.false

        _.inRange( 0 , 0 , 5 ).should.be.true
        _.inRange( 1 , 0 , 5 ).should.be.true
        _.inRange( 5 , 0 , 5 ).should.be.false

    } )

} )

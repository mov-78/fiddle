const _ = require( 'lodash' )
const chai = require( 'chai' )

before( chai.should )

describe( 'lodash/collection' , function () {

    // size( collection )
    it( 'size' , function () {

        // [1] Array
        _.size( [ 1 , [ 2 ] ] ).should.equal( 2 )

        // [2] Array-Like Object
        _.size( 'foobar' ).should.equal( 6 )

        // [3] Object
        _.size( _.create( { foo : 'bar' } , { baz : 'qux' } ) ).should.equal( 1 )

    } )


    //
    // each|forEach( collection , iteratee )
    // eachRight|forEachRight( collection , iteratee )
    //

    it( 'each|forEach , eachRight|forEachRight' , function () {

        let fetchedValues

        // [1] Array
        fetchedValues = []
        _.each(
            [ 1 , 2 , [ 3 , 4 ] ] ,
            ( value , index , array ) => fetchedValues.push( value )
        )
        fetchedValues.should.deep.equal( [ 1 , 2 , [ 3 , 4 ] ] )

        // [2] Object
        fetchedValues = []
        _.each(
            { foo : 1 , bar : { baz : 2 } } ,
            ( value , key , object ) => fetchedValues.push( value )
        )
        fetchedValues.should.have.deep.members( [ 1 , { baz : 2 } ] )

    } )


    // map( collection , iteratee )
    it( 'map' , function () {

        // [1] Array
        _.map( [ 1 , 2 , [ 3 ] ] , ( value , index , array ) => value )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 1 , 2 , [ 3 ] ] )

        // [2] Object
        // 与 mapValues 类似，区别为：
        //    - mapValues：返回对象 - 保持对象结构
        //    - map：返回数组 - 忽略（打平）对象结构
        _.map( { foo : 1 , bar : { baz : 2 } } , ( value , key , object ) => value )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 1 , { baz : 2 } ] )

    } )


    //
    // filter( collection , predicate )
    // reject( collection , predicate )
    //

    it( 'filter , reject' , function () {

        // [1] Array
        _.filter( [ 1 , 2 , 3 ] , ( value , index , array ) => value % 2 === 0 )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 2 ] )
        _.reject( [ 1 , 2 , 3 ] , ( value , index , array ) => value % 2 === 0 )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 1 , 3 ] )

        // [2] Object
        // 与 pickBy|omitBy 类似，区别为：
        //    - pickBy|omitBy：返回对象 - 保持对象结构
        //    - filter：返回数组 - 忽略（打平）对象结构
        _.filter( { foo : 1 , bar : 2 } , ( value , key , object ) => value % 2 === 0 )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 2 ] )
        _.reject( { foo : 1 , bar : 2 } , ( value , key , object ) => value % 2 === 0 )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 1 ] )

    } )


    //
    // reduce( collection , iteratee , [accumulator] )
    // reduceRight( collection , iteratee , [accumulator] )
    //

    it( 'reduce , reduceRight' , function () {

        // [1] Array
        _.reduce(
            [ 1 , 2 , 3 ] ,
            ( accumulator , value , index , array ) => accumulator + value ,
            0
        ).should.equal( 6 )

        // [2] Object
        _.reduce(
            { foo : 1 , bar : 2 , baz : 3 } ,
            ( accumulator , value , key , object ) => accumulator + value ,
            0
        ).should.equal( 6 )

    } )


    //
    // find( collection , predicate )
    // findLast( collection , predicate )
    //

    it( 'find , findLast' , function () {

        // [1] Array
        _.find(
            [ 1 , 2 , 3 ] ,
            ( value , index , array ) => value % 2 === 0
        ).should.equal( 2 )

        // [2] Object
        _.find(
            { foo : 1 , bar : 2 , baz : 3 } ,
            ( value , key , object ) => value % 2 === 0
        ).should.equal( 2 ) // 返回的是 value 而不是 key

    } )


    //
    // some( collection , predicate )
    // every( collection , predicate )
    //

    it( 'some , every' , function () {

        // [1] Array
        _.some( [ 1 , 2 ] , ( value , index , array ) => value % 2 === 0 )
            .should.be.true
        _.every( [ 1 , 2 ] , ( value , index , array ) => value % 2 === 0 )
            .should.be.false

        // [2] Object
        _.some( { foo : 1 , bar : 2 } , ( value , index , array ) => value % 2 === 0 )
            .should.be.true
        _.every( { foo : 1 , bar : 2 } , ( value , index , array ) => value % 2 === 0 )
            .should.be.false

    } )


    //
    // countBy( collection , iteratee )
    // keyBy( collection , iteratee )
    // groupBy( collection , iteratee )
    //

    it( 'countBy' , function () {

        // [1] Array
        _.countBy( [ 1 , 2 , 3 , 4 ] , value => value % 2 )
            .should.be.an( 'object' )
            .that.is.deep.equal( { 0 : 2 , 1 : 2 } )

        // [2] Object
        _.countBy( { foo : 1 , bar : 2 } , value => value % 2 )
            .should.be.an( 'object' )
            .that.is.deep.equal( { 0 : 1 , 1 : 1 } )

    } )
    it( 'keyBy' , function () {

        // [1] Array
        _.keyBy( [ 1 , 2 , 3 ] , value => value % 2 )
            .should.be.an( 'object' )
            .that.is.deep.equal( { 0 : 2 , 1 : 3 } )

        // [2] Object
        _.keyBy( { foo : 1 , bar : 2 , baz : 3 } , value => value % 2 )
            .should.be.an( 'object' )
            .that.is.deep.equal( { 0 : 2 , 1 : 3 } )

    } )
    it( 'groupBy' , function () {

        // [1] Array
        _.groupBy( [ 1 , 2 , 3 ] , value => value % 2 )
            .should.be.an( 'object' )
            .that.is.deep.equal( { 0 : [ 2 ] , 1 : [ 1 , 3 ] } )

        // [2] Object
        _.groupBy( { foo : 1 , bar : 2 , baz : 3 } , value => value % 2 )
            .should.be.an( 'object' )
            .that.is.deep.equal( { 0 : [ 2 ] , 1 : [ 1 , 3 ] } )

    } )


    // partition( collection , predicate )
    it( 'partition' , function () {

        // [1] Array
        _.partition( [ 1 , 2 , 3 ] , value => value % 2 === 0 )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ [ 2 ] , [ 1 , 3 ] ] )

        // [2] Object
        _.partition( { foo : 1 , bar : 2 , baz : 3 } , value => value % 2 === 0 )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ [ 2 ] , [ 1 , 3 ] ] )

    } )


    //
    // sortBy( collection , iteratees )
    // orderBy( collection , iteratees , [orders=desc|asc] )
    //

    it( 'sortBy , orderBy' , function () {

        // [1] Array
        _.sortBy( [ 5 , 2 , 3 ] , value => value % 3 )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 3 , 5 , 2 ] ) // stable-sort
        _.orderBy( [ 2 , 1 , 3 ] , _.identity , 'desc' )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 3 , 2 , 1 ] ) // stable-sort
        _.orderBy( [ 2 , 1 , 3 ] , _.identity , 'asc' )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 1 , 2 , 3 ] ) // stable-sort

        // [2] Object
        _.sortBy( { foo : 5 , bar : 2 , baz : 3 } , value => value % 3 )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 3 , 5 , 2 ] ) // stable-sort
        _.orderBy( { foo : 2 , bar : 1 , baz : 3 } , _.identity , 'desc' )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 3 , 2 , 1 ] ) // stable-sort
        _.orderBy( { foo : 2 , bar : 1 , baz : 3 } , _.identity , 'asc' )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 1 , 2 , 3 ] ) // stable-sort

    } )


    // includes( collection , value , [fromIndex=0] )
    it( 'includes' , function () {

        // [1] Array
        _.includes( [ 1 , 2 ] , 1 ).should.be.true

        // [2] Object
        _.includes( { foo : 1 , bar : 2 } , 1 ).should.be.true

    } )

} )

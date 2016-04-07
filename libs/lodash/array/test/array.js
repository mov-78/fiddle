'use strict'

const _ = require( 'lodash/array' )
    , chai = require( 'chai' )

before( chai.should )

describe( 'lodash/array'
        , function () {

            //
            // first( array )
            // last( array )
            // initial( array )
            // tail( array )
            //

            it( 'first , last , initial , tail'
              , function () {

                  const array = [ 1 , 2 , 3 ]

                  _.head( array ).should.equal( 1 )
                  _.last( array ).should.equal( 3 )

                  _.initial( array ).should.eql( [ 1 , 2 ] )
                  _.tail( array ).should.eql( [ 2 , 3 ] )

                }
              )


            //
            // indexOf( array , value , [fromIndex=0] )
            // lastIndexOf( array , value , [fromIndex=array.length-1] )
            //

            it( 'indexOf , lastIndexOf'
              , function () {

                  const array = [ 1 , 2 , 2 , 3 ]

                  _.indexOf( array , 2 ).should.equal( 1 )
                  _.indexOf( array , 2 , -2 ).should.equal( 2 )
                  _.indexOf( array , 4 ).should.equal( -1 )

                  _.lastIndexOf( array , 2 ).should.equal( 2 )
                  _.lastIndexOf( array , 2 , -3 ).should.equal( 1 )
                  _.lastIndexOf( array , 4 ).should.equal( -1 )

                }
              )


            //
            // findIndex( array , [predicate=_.identity] )
            // findLastIndex( array , [predicate=_.identity] )
            //

            it( 'findIndex , findLastIndex'
              , function () {

                  const array = [ 1 , 2 , 3 , 4 , 5 ]
                      , predicate = ( value , index , array ) => value % 2 === 0

                  _.findIndex( array , predicate ).should.equal( 1 )
                  _.findLastIndex( array , predicate ). should.equal( 3 )

                }
              )


            //
            // take( array , [n=1] )
            // takeRight( array , [n=1] )
            // takeWhile( array , [predicate=_.identity] )
            // takeRightWhile( array , [predicate=_.identity] )
            //

            it( 'take , takeRight , takeWhile , takeRightWhile'
              , function () {

                  const array = [ 1 , 2 , 3 ]
                      , predicate = ( value , index , array ) => value % 2 !== 0

                  _.take( array ).should.eql( [ 1 ] )
                  _.take( array , 2 ).should.eql( [ 1 , 2 ] )
                  _.takeRight( array ).should.eql( [ 3 ] )
                  _.takeRight( array , 2 ).should.eql( [ 2 , 3 ] )

                  _.takeWhile( array , predicate ).should.eql( [ 1 ] )
                  _.takeRightWhile( array , predicate ).should.eql( [ 3 ] )

                }
              )


            //
            // drop( array , [n=1] )
            // dropRight( array , [n=1] )
            // dropWhile( array , [predicate=_.identity] )
            // dropRightWhile( array , [predicate=_.identity] )
            //

            it( 'drop , dropRight , dropWhile , dropRightWhile'
              , function () {

                  const array = [ 1 , 2 , 3 ]
                      , predicate = ( value , index , array ) => value % 2 !== 0

                  _.drop( array ).should.eql( [ 2 , 3 ] )
                  _.drop( array , 2 ).should.eql( [ 3 ] )
                  _.dropRight( array ).should.eql( [ 1 , 2 ] )
                  _.dropRight( array , 2 ).should.eql( [ 1 ] )

                  _.dropWhile( array , predicate ).should.eql( [ 2 , 3 ] )
                  _.dropRightWhile( array , predicate ).should.eql( [ 1 , 2 ] )

                }
              )


            // without( array , ...values )
            it( 'without'
              , function () {
                  _.without( [ 1 , 2 , 3 , 4 , 5 ] , 2 , 4 )
                    .should.deep.equal( [ 1 , 3 , 5 ] )
                }
              )


            // remove( array , [predicate=_.identity] )
            it( 'remove'
              , function () {

                  const odds = [ 1 , 2 , 3 , 4 , 5 ]
                      , evens = _.remove( odds
                                        , ( value , index , array ) => value % 2 === 0
                                        )

                  odds.should.eql( [ 1 , 3 , 5 ] )
                  evens.should.eql( [ 2 , 4 ] )

                }
              )


            //
            // pull( array , ...values )
            // pullAll( array , other )
            // pullAllBy( array , other , [iteratee=_.identity] )
            // pullAllWith( array , other , comparator )
            //

            it( 'pull , pullAll , pullAllBy , pullAllWith'
              , function () {

                  let array

                  array = [ 1 , 2 , 3 , 4 , 5 ]
                  _.pull( array , 2 , 4 )
                    .should.eql( [ 1 , 3 , 5 ] )

                  array = [ 1 , 2 , 3 , 4 , 5 ]
                  _.pullAll( array , [ 2 , 4 ] )
                    .should.eql( [ 1 , 3 , 5 ] )

                  array = [ 1 , 2 , 3 , 4 , 5 ]
                  _.pullAllBy( array
                             , [ 2 , 4 ]
                             , ( value ) => value
                             )
                  array.should.eql( [ 1 , 3 , 5 ] )

                  array = [ 1 , 2 , 3 , 4 , 5 ]
                  _.pullAllWith( array
                               , [ 2 , 4 ]
                               , ( arrVal , othVal ) => arrVal === othVal
                               )
                  array.should.eql( [ 1 , 3 , 5 ] )

                }
              )


            //
            // uniq( array )
            // uniqBy( array , [iteratee=_.identity] )
            // uniqWith( array , comparator )
            //

            it( 'uniq , uniqBy , uniqWith'
              , function () {

                  const array = [ 1 , 2 , 1 ]

                  _.uniq( array )
                    .should.eql( [ 1 , 2 ] )

                  _.uniqBy( array
                          , ( value ) => value
                          )
                    .should.eql( [ 1 , 2 ] )

                  _.uniqWith( array
                            , ( arrVal , othVal ) => arrVal === othVal
                            )
                    .should.eql( [ 1 , 2 ] )

                }
              )


            // compact( array )
            it( 'compact'
              , function () {
                  _.compact( [ -0 , +0 , Number.NaN , '' , false , null , undefined ] )
                    .should.be.an( 'array' )
                    .that.is.empty
                }
              )


            // chunk( array , [size=0] )
            it( 'chunk'
              , function () {

                  const array = [ 1 , 2 , 3 ]

                  _.chunk( array )
                    .should.be.an( 'array' )
                    .that.is.empty

                  _.chunk( array , 1 )
                    .should.eql( [ [ 1 ] , [ 2 ] , [ 3 ] ] )

                  _.chunk( array , 2 )
                    .should.eql( [ [ 1 , 2 ] , [ 3 ] ] )

                }
              )


            //
            // flatten( array )
            // flattenDeep( array )
            // flattenDepth( array , [depth=1] )
            //

            it( 'flatten , flattenDeep , flattenDepth'
              , function () {

                  _.flatten( [ 1 , [ 2 ] , [ [ 3 ] ] ] )
                    .should.eql( [ 1 , 2 , [ 3 ] ] )

                  _.flattenDeep( [ 1 , [ 2 ] , [ [ [ 3 ] ] ] ] )
                    .should.eql( [ 1 , 2 , 3 ] )

                  _.flattenDepth( [ 1 , [ 2 ] , [ [ [ 3 ] ] ] ] , 2 )
                    .should.eql( [ 1 , 2 , [ 3 ] ] )

                }
              )


            //
            // union( array , ...arrays )
            // unionBy( array , ...arrays , [iteratee=_.identity] )
            // unionWith( array , ...arrays , comparator )
            // intersection( array , ...arrays )
            // intersectionBy( array , ...arrays , [iteratee=_.identity] )
            // intersectionWith( array , ...arrays , comparator )
            // difference( array , ...arrays )
            // differenceBy( array , ...arrays , [iteratee=_.identity] )
            // differenceWith( array , ...arrays , comparator )
            // xor( array , ...arrays )
            // xorBy( array , ...arrays , [iteratee=_.identity] )
            // xorWith( array , ...arrays , comparator )
            //

            it( 'union , unionBy , unionWith'
              , function () {

                  _.union( [ 1 , 2 ] , [ 2 , 3 ] )
                    .should.eql( [ 1 , 2 , 3 ] )

                  _.unionBy( [ 1 , 2 ]
                           , [ 2 , 3 ]
                           , ( value ) => value
                           )
                    .should.eql( [ 1 , 2 , 3 ] )

                  _.unionWith( [ 1 , 2 ]
                             , [ 2 , 3 ]
                             , ( arrVal , othVal ) => arrVal === othVal
                             )
                    .should.eql( [ 1 , 2 , 3 ] )

                }
              )
            it( 'intersection , intersectionBy , intersectionWith'
              , function () {

                  _.intersection( [ 1 , 2 ] , [ 2 , 3 ] )
                    .should.eql( [ 2 ] )

                  _.intersectionBy( [ 1 , 2 ]
                                  , [ 2 , 3 ]
                                  , ( value ) => value
                                  )
                    .should.eql( [ 2 ] )

                  _.intersectionWith( [ 1 , 2 ]
                                    , [ 2 , 3 ]
                                    , ( arrVal , othVal ) => arrVal === othVal
                                    )
                    .should.eql( [ 2 ] )

                }
              )
            it( 'difference , differenceBy , differenceWith'
              , function () {

                  _.difference( [ 1 , 2 ] , [ 2 , 3 ] )
                    .should.eql( [ 1 ] )

                  _.differenceBy( [ 1 , 2 ]
                                , [ 2 , 3 ]
                                , ( value ) => value
                                )
                    .should.eql( [ 1 ] )

                  _.differenceWith( [ 1 , 2 ]
                                  , [ 2 , 3 ]
                                  , ( arrVal , othVal ) => arrVal === othVal
                                  )
                    .should.eql( [ 1 ] )

                }
              )
            it( 'xor , xorBy , xorWith'
              , function () {

                  _.xor( [ 1 , 2 ] , [ 2 , 3 ] )
                    .should.eql( [ 1 , 3 ] )

                  _.xorBy( [ 1 , 2 ]
                         , [ 2 , 3 ]
                         , ( value ) => value
                         )
                    .should.eql( [ 1 , 3 ] )

                  _.xorWith( [ 1 , 2 ]
                           , [ 2 , 3 ]
                           , ( arrVal , othVal ) => arrVal === othVal
                           )
                    .should.eql( [ 1 , 3 ] )

                }
              )


            //
            // zip( ...arrays )
            // zipWith( ...arrays , [iteratee=(...group)=>group] )
            // unzip( array )
            // unzipWith( array , [iteratee=(...group)=>group] )
            //

            it( 'zip , zipWith , unzip , unzipWith'
              , function () {

                  _.zip( [ 1 , 2 ] , [ 3 , 4 ] )
                    .should.eql( [ [ 1 , 3 ] , [ 2 , 4 ] ] )

                  _.zipWith( [ 1 , 2 ]
                           , [ 3 , 4 ]
                           , ( ...group ) => group
                           )
                    .should.eql( [ [ 1 , 3 ] , [ 2 , 4 ] ] )

                  _.unzip( [ [ 1 , 3 ] , [ 2 , 4 ] ] )
                    .should.eql( [ [ 1 , 2 ] , [ 3 , 4 ] ] )

                  _.unzipWith( [ [ 1 , 3 ] , [ 2 , 4 ] ]
                             , ( ...group ) => group
                             )
                    .should.eql( [ [ 1 , 2 ] , [ 3 , 4 ] ] )

                }
              )


            // fromPairs( array )
            it( 'fromPairs'
              , function () {
                  _.fromPairs( [ [ 'foo' , 1 ] , [ 'bar' , 2 ] ] )
                    .should.eql( { foo : 1 , bar : 2 } )
                }
              )


            //
            // zipObject( keys=[] , values=[] )
            // zipObjectDeep( keys=[] , values=[] )
            //

            it( 'zipObject , zipObjectDeep'
              , function () {

                  _.zipObject( [ 'foo' ] , [ 'bar' ] )
                    .should.eql( { foo : 'bar' } )

                  _.zipObjectDeep( [ 'foo.bar' ] , [ 'baz' ] )
                    .should.eql( { foo : { bar : 'baz' } } )

                }
              )


            // concat( array , ...values )
            it( 'concat'
              , function () {
                  _.concat( [ 1 ] , 2 , [ 3 ] , [ [ 4 ] ] )
                    .should.eql( [ 1 , 2 , 3 , [ 4 ] ] )
                }
              )


            // fill( array , value , [start=0] , [end=array.length] )
            it( 'fill'
              , function () {
                  _.fill( [ 1 , 2 , 3 , 4 , 5 ] , 0 , 1 , 3 )
                    .should.eql( [ 1 , 0 , 0 , 4 , 5 ] )
                }
              )


            // join( array , [separator=','] )
            it( 'join'
              , function () {
                  _.join( [ 1 , 2 ] , '~' )
                    .should.equal( '1~2' )
                }
              )


            // reverse( array )
            it( 'reverse'
              , function () {
                  const array = [ 1 , 2 , 3 ]
                  _.reverse( array )
                  array.should.eql( [ 3 , 2 , 1 ] )
                }
              )

          }
        )

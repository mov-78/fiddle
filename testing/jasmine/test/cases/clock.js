describe( 'Manually ticking the Jasmine Clock'
        , function () {

            beforeEach( function () {
                          this.callback = jasmine.createSpy( 'callback' )
                          jasmine.clock().install()
                        }
                      )

            afterEach( function () {
                         jasmine.clock().uninstall()
                       }
                     )

            it( 'causes a timeout to be called synchronously'
              , function () {

                  setTimeout( this.callback , 10000 )

                  expect( this.callback ).not.toHaveBeenCalled()

                  jasmine.clock().tick( 10001 ) // move time forward
                  expect( this.callback ).toHaveBeenCalled()

                }
              )

            it( 'causes an interval to be called synchronously'
              , function () {

                  setInterval( this.callback , 100 )

                  jasmine.clock().tick( 99 )
                  expect( this.callback ).not.toHaveBeenCalled()

                  jasmine.clock().tick( 50 )
                  expect( this.callback ).toHaveBeenCalled()
                  expect( this.callback ).toHaveBeenCalledTimes( 1 )

                  jasmine.clock().tick( 80 )
                  expect( this.callback ).toHaveBeenCalledTimes( 2 )

                }
              )

          }
        )

describe( 'Mocking a Date object'
        , function () {

            beforeEach( function () {
                          jasmine.clock().install()
                        }
                      )

            afterEach( function () {
                         jasmine.clock().uninstall()
                       }
                     )

            it( 'mocks the current date'
              , function () {

                  const baseTime = new Date( 2015 , 3 , 18 )

                  // jasmine.clock().mockDate( [date] )
                  jasmine.clock().mockDate( baseTime )
                  jasmine.clock().tick( 1000 )

                  expect( new Date().getTime() ).toEqual( baseTime.getTime() + 1000 )

                }
              )

          }
        )

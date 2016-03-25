describe( 'Testing async code'
        , function () { // 不要使用 arrow function

            it( 'by utilizing the done callback'
              , function ( done ) { // 不要使用 arrow function
                  setTimeout( done, 0 )
                }
              )

            it( 'by returning a Promise'
              , function () { // 这里必须忽略 done 回调
                  return Promise.resolve()
                }
              )

          }
        )

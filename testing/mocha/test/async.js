describe( 'Testing async code' , function () {

  it( 'by utilizing the done callback' , function ( done ) {
    setTimeout( done , 0 )
  } )

  it( 'by returning a Promise' , function () { // ← 注意这里必须忽略 done 回调
    return Promise.resolve()
  } )

} )

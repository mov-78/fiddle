describe( 'Testing async code' , function () {

  const asyncTask = done => { setTimeout( done , 0 ) }

  // Hooks 亦拥有异步支持
  beforeAll( asyncTask )
  beforeEach( asyncTask )
  afterEach( asyncTask )
  afterAll( asyncTask )

  // 配置全局超时间隔（缺省值：5000ms）
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000

  // 在超时间隔内如若未调用 done 方法，则该异步「测试用例」不通过
  // 同时，可以调用 done.fail( [reason] ) 方法来手动不通过该异步「测试用例」

  // it( title , implementation , timeout )
  // 配置「测试用例」级超时间隔（覆盖全局超时间隔）
  it( 'by utilizing the done callback' , asyncTask , 2000 )

} )

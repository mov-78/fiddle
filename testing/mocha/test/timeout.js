describe( 'Setup'
        , function () {

            // 设置「测试套件」级 slow 阈值（单位：毫秒）
            // 该配置将被递归应用于所有子「测试套件」及「测试用例」之上
            this.slow( 100 )

            // 设置「测试套件」级超时间隔（单位：毫秒）
            // 该配置将被递归应用于所有子「测试套件」及「测试用例」之上
            this.timeout( 20 )

            it( 'suite-level timeout with this.timeout( millisecond )'
              , function ( done ) {
                  setTimeout( done , 10 )
                }
              )

            it( 'case-level timeout with this.timeout( millisecond )'
              , function ( done ) {

                  // 设置「测试用例」级 slow 阈值
                  // 当用时超过该阈值时，reporter 可以选择性标记出此信息
                  this.slow( 20 )

                  // 设置「测试用例」级超时间隔
                  // 当用时超过该间隔时，该「测试用例」将被视为不通过
                  this.timeout( 40 )

                  setTimeout( done , 30 )

                }
              )

          }
        )

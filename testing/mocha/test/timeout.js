describe( 'Setup'
        , function () {

            // 设置 slow 阈值
            // 当某个「测试用例」用时超过该阈值时，reporter 可以选择标记出此信息
            this.slow( 100 )

            // 设置「测试套件」级超时间隔
            // 该配置将被递归应用于所有子「测试套件」及「测试用例」
            this.timeout( 20 )

            it( 'suite-level timeout with this.timeout( millisecond )'
              , function ( done ) {
                  setTimeout( done, 10 )
                }
              )

            it( 'case-level timeout with this.timeout( millisecond )'
              , function ( done ) {

                  // 设置「测试用例」级超时间隔
                  // 覆盖父级「测试套件」里的超时间隔配置
                  this.timeout( 40 )

                  setTimeout( done, 30 )

                }
              )

          }
        )

// 通过 require.config 来对 require.js 的行为进行配置
require.config({

  // 设置根路径
  // 所有的模块标识（非普通路径）均相对于根路径解析
  baseUrl: 'scripts',

  // 设置路径别名集
  // 别名亦相对于根路径解析
  paths: {
    misc: 'app/misc'
  },

  // 设置模块级模块标识别名
  map: {
    'misc/foo': { // 仅应用于 misc/foo 的 define 依赖声明中
      'misc/baz': 'misc/baz-foo'
    },
    'misc/bar': { // 仅应用于 misc/bar 的 define 依赖声明中
      'misc/baz': 'misc/baz-bar'
    },
  },

  // 设置模块级配置
  // 通过 module.config() 来获取模块级配置
  config: {
    'misc/foo': { // 相对于跟路径解析
      name: 'foo'
    },
    'misc/bar': { // 相对于跟路径解析
      name: 'bar'
    }
  },

  // 设置 GET 请求后缀
  urlArgs: 'bust=' + (+(new Date()))

})

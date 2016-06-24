/* -----------------------------------------------------------------------------
  r.js 构建配置文件样例

  该构建配置文件**仅作演示用**，实际构建请使用 require.build-config.js
  $ r.js -o require.build-config.js

  [全部配置](https://goo.gl/z4fYEl)
----------------------------------------------------------------------------- */

({

  /* ---------------------------------------------------------------------------
  [config.appDir]
  设置项目根目录（非必须）
  若存在该配置：
    - config.baseUrl 相对于 config.appDir 解析
    - config.appDir 下所有文件均会被复制到 config.dir 下
  若不存在该配置：
    - 仅在 config.baseUrl 下搜索文件
  --------------------------------------------------------------------------- */
  appDir: '.',


  /* ---------------------------------------------------------------------------
  [config.baseUrl]
  设置解析根路径
  - 若存在该配置，则所有模块均相对于 config.baseUrl 解析
  - 若不存在该配置，则所有模块均相对于构建配置文件所在目录解析
  - 若设置了 config.appDir，则 config.baseUrl 相对于 config.appDir 解析
  --------------------------------------------------------------------------- */
  baseUrl: 'path',


  /* ---------------------------------------------------------------------------
  [config.mainConfigFile]
  设置运行时配置文件路径
  --------------------------------------------------------------------------- */
  mainConfigFile: [
    'require.build-config.1.js',
    'require.build-config.2.js'   // 覆盖之前同名定义
  ],

  map: { /* 运行时配置：config.map */ },
  shim: { /* 运行时配置：config.shim */ },
  paths: { /* 运行时配置：config.paths */ },


  /*
  [config.modules]
  设置需要构建的入口模块集
  */
  modules: [
    {

      // config.modules.name
      // 设置入口模块
      // r.js 会递归静态解析入口模块的所有依赖并最终合并成一个模块文件
      name: 'foobar',

      // config.modules.include
      // 设置需要额外合并进来的依赖（递归）
      include: [ 'foo', 'bar' ],

      // config.modules.exclude
      // 设置需要排除出去的依赖（递归）
      exclude: [ 'foo', 'bar' ],

      // config.modules.excludeShadow
      // 设置需要排除出去的依赖（非递归）
      excludeShadow: [ 'foo', 'bar' ]

    }
  ],

  // config.modules 简写形式：
  name: 'main',
  include: [ 'foo', 'bar' ],
  exclude: [ 'foo', 'bar' ],
  excludeShadow: [ 'foo', 'bar' ],
  out: 'path',


  /*
  [config.dir]
  设置输出目录（默认为 ${path/to/build-config.js}/build）
  */
  dir: '../dist',


  /*
  [config.optimize]
  设置压缩引擎，可选值为：
    - uglify
    - uglify2
    - closure
    - clousure.keepLines
    - none
  */
  optimize: 'uglify2',

  uglify: { /* uglify 引擎配置 */ },
  uglify2: { /* uglify2 引擎配置 */ },
  closure: { /* closure 引擎配置 */ },


  /*
  [config.generateSourceMaps]
  设置是否生成 sourceMaps（默认不生成）
  （目前只有 uglify2 引擎支持 sourceMaps）
  */
  generateSourceMaps: true,


  /*
  [config.useStrict]
  设置是否开启严格模式（默认不开启）
  */
  useStrict: true

})

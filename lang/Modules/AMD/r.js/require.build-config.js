// fiddle/r.js 构建配置文件
// $ r.js -o require.build-config.js

({
  appDir: '.',
  dir: 'dist',
  baseUrl: 'scripts',
  removeCombined: true,
  mainConfigFile: 'scripts/require.config.js', // 导入 paths/shim/config 等
  paths: {
    'requireLib': '../bower_components/requirejs/require'
  },
  modules: [
    {
      name: 'require.config',
      include: [ 'requireLib' ]
    }
  ],
})

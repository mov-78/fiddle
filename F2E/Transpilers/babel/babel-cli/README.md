该 fiddle 用于演示如何使用 [babel-cli](http://babeljs.io/docs/usage/cli/)

```sh
$ # npm uninstall --global babel-cli
$ npm install

# 转码至 stdout
$ ./node_modules/.bin/babel main.js

# 单一文件转码
$ ./node_modules/.bin/babel main.js --out-file main.transpiled.js
$ ./node_modules/.bin/babel main.js --out-file main.transpiled.js --source-maps
$ ./node_modules/.bin/babel main.js --out-file main.transpiled.js --source-maps inline

# 侦测文件变动自动转码
$ ./node_modules/.bin/babel main.js --watch --out-file main.transpiled.js

# 文件夹映射转码
$ ./node_modules/.bin/babel scripts/src --out-dir dist/scripts

# 文件夹转码 + 合并
$ ./node_modules/.bin/babel scripts/src --out-file dist.js

# 从 stdin 中读取源文件
$ ./node_modules/.bin/babel --out-file main.transpiled.js < main.js

$ make clean

#
```

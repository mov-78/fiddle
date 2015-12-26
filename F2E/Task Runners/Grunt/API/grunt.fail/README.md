该 fiddle 用于演示 `grunt.fail` 相关 API

```sh
$ npm install
$ grunt
$ echo $? # 6
$ grunt --force
$ echo $? # 1
```

该 fiddle 用于演示 [grunt.fail](http://bit.ly/1nHfbPf) 相关接口

```sh
$ npm install
$ grunt
$ echo $? # 6
$ grunt --force
$ echo $? # 1
```

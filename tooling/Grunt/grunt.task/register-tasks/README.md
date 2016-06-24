该 fiddle 用于演示如何注册任务

```sh
$ npm install
$ npm test
```

---

> Function-Task 与 Multi-Task 的区别在于：
> - Multi-Task 可以为每个 target 设置独立的选项（options），Function-Task 只存在任务级选项
> - Multi-Task `taskFunction` 内部可以访问 `this.files`，`this.filesSrc` 等额外属性

注册 Function-Task/Alias-Task：

- [grunt.registerTask( name , [description] , taskFunction|taskList )](http://gruntjs.com/api/grunt.task#grunt.task.registertask)
- [grunt.task.registerTask( name , [description] , taskFunction|taskList )](http://gruntjs.com/api/grunt.task#grunt.task.registertask)

注册 Multi-Task：

- [grunt.registerMultiTask( name , [description] , taskFunction )](http://gruntjs.com/api/grunt.task#grunt.task.registermultitask)
- [grunt.task.registerMultiTask( name , [description] , taskFunction )](http://gruntjs.com/api/grunt.task#grunt.task.registermultitask)

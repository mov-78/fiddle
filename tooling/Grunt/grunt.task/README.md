该 fiddle 用于演示 [grunt.task](http://gruntjs.com/api/grunt.task) 相关接口

```sh
$ npm install
$ npm test
```

---

- [grunt.task.registerTask( name , [description] , taskList|taskFunction  )](http://gruntjs.com/api/grunt.task#grunt.task.registertask)
- [grunt.task.registerMultiTask( name , [description] , taskFunction )](http://gruntjs.com/api/grunt.task#grunt.task.registermultitask)
- [grunt.task.exists( taskName )](http://gruntjs.com/api/grunt.task#grunt.task.exists)
- [grunt.task.requires( taskList )](http://gruntjs.com/api/grunt.task#grunt.task.requires)

加载外部任务：

- [grunt.task.loadTasks( path )](http://gruntjs.com/api/grunt.task#grunt.task.loadtasks)
- [grunt.task.loadNpmTasks( name )](http://gruntjs.com/api/grunt.task#grunt.task.loadnpmtasks)

任务队列管理：

- [grunt.task.run( taskList )](http://gruntjs.com/api/grunt.task#grunt.task.run)
- [grunt.task.clearQueue()](http://gruntjs.com/api/grunt.task#grunt.task.clearqueue)

---

> 在 taskFunction 内部可以通过 `this` 或 `grunt.task.current` 来获取任务实例

任务实例属性/方法（通用）：

- [this.async()](http://gruntjs.com/api/inside-tasks#this.async)
- [this.requires( taskList )](http://gruntjs.com/api/inside-tasks#this.requires)
- [this.requiresConfig( ...path )](http://gruntjs.com/api/inside-tasks#this.requiresconfig)
- [this.name](http://gruntjs.com/api/inside-tasks#this.name)
- [this.nameArgs](http://gruntjs.com/api/inside-tasks#this.nameargs)
- [this.args](http://gruntjs.com/api/inside-tasks#this.args)
- [this.flags](http://gruntjs.com/api/inside-tasks#this.flags)
- [this.errorCount](http://gruntjs.com/api/inside-tasks#this.errorcount)
- [this.options( [defaults] )](http://gruntjs.com/api/inside-tasks#this.options)

任务实例属性/方法（多目标任务专属）：

- [this.target](http://gruntjs.com/api/inside-tasks#this.target)
- [this.files](http://gruntjs.com/api/inside-tasks#this.files)
- [this.filesSrc](http://gruntjs.com/api/inside-tasks#this.filessrc)
- [this.data](http://gruntjs.com/api/inside-tasks#this.data)

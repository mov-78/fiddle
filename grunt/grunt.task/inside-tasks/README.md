该 fiddle 用于演示任务实例的属性及方法 [#](http://gruntjs.com/api/inside-tasks)

```sh
$ npm install
$ npm test
```

---

获取当前任务实例：

- `this` 关键字
- `grunt.task.current`

---

通用属性及方法：

- [this.async()](http://gruntjs.com/api/inside-tasks#this.async)
- [this.requires( ...taskName )](http://gruntjs.com/api/inside-tasks#this.requires)
- [this.requiresConfig( ...path )](http://gruntjs.com/api/inside-tasks#this.requiresconfig)
- [this.options( [defaults] )](http://gruntjs.com/api/inside-tasks#this.options)
- [this.name](http://gruntjs.com/api/inside-tasks#this.name) , [this.nameArgs](http://gruntjs.com/api/inside-tasks#this.nameargs) , [this.args](http://gruntjs.com/api/inside-tasks#this.args) , [this.flags](http://gruntjs.com/api/inside-tasks#this.flags)

> 相关方法：
> - `grunt.task.exists( taskName )`
> - `grunt.task.requires( ...taskName )`
> - `grunt.config.requires( ...path )`

---

Multi-Task 专属属性：

- [this.target](http://gruntjs.com/api/inside-tasks#this.target)
- [this.files](http://gruntjs.com/api/inside-tasks#this.files)
- [this.filesSrc](http://gruntjs.com/api/inside-tasks#this.filessrc)
- [this.data](http://gruntjs.com/api/inside-tasks#this.data)

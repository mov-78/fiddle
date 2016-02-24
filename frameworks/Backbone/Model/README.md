该 fiddle 用于演示 [Backbone.Model](http://backbonejs.org/#Model)

```sh
$ bower install
$ open index.html
```

---

模型类工厂：

- [Backbone.Model.extend(protoProps?, staticProps?)](http://backbonejs.org/#Model-extend)

CRUD 方法：

- [Backbone.Model.prototype.has(key)](http://backbonejs.org/#Model-has)
- [Backbone.Model.prototype.get(key)](http://backbonejs.org/#Model-get)
- [Backbone.Model.prototype.escape(key)](http://backbonejs.org/#Model-escape)
- [Backbone.Model.prototype.set(attrs, options?)](http://backbonejs.org/#Model-set)
- [Backbone.Model.prototype.unset(key, options?)](http://backbonejs.org/#Model-unset)
- [Backbone.Model.prototype.clear(options?)](http://backbonejs.org/#Model-clear)

数据备份（仅保存最近一个版本）与变更记录查询/预测：

- [Backbone.Model.prototype.hasChanged(key?)](http://backbonejs.org/#Model-hasChanged)
- [Backbone.Model.prototype.changedAttributes(attrs)](http://backbonejs.org/#Model-changedAttributes)
- [Backbone.Model.prototype.previous(key)](http://backbonejs.org/#Model-previous)
- [Backbone.Model.prototype.previousAttributes()](http://backbonejs.org/#Model-previousAttributes)

JSON （伪）序列化：

- [Backbone.Model.prototype.toJSON()](http://backbonejs.org/#Model-toJSON)

浅拷贝：

- [Backbone.Model.prototype.clone()](http://backbonejs.org/#Model-clone)

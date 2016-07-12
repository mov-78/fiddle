该 fiddle 用于演示 [Backbone.Model](http://backbonejs.org/#Model) 模块

---

__Backbone.Model.extend( [protoProps] , [staticProps] )__ [#](http://backbonejs.org/#Model-extend)

类工厂，用于创建 `Backbone.Model` 子类。

```js
Backbone.Model.extend( {

  // 用于声明默认 attributes，可以为字面量或函数
  defaults : {} ,

  // 自定义构造函数
  constructor : function ( ...args ) {
    Backbone.Model.apply( this , args )
  } ,

  // 自定义初始化函数
  initialize : function ( attrs , opts ) {} ,

  // 自定义校验逻辑
  // - set(option.validate=true) 及 save 操作均会自动触发校验逻辑
  // - 可以调用 Backbone.Model.prototype.isValid() 方法来主动触发校验逻辑
  validate : function ( attrs , opts ) {
    // - 返回任意真值来告知 Backbone 校验失败
    // - model.validationError 保存了最近一次失败校验的返回值
  }

  // ...更多实例方法

} )

// new Backbone.Model( [attrs] , [opts] )
```

---

- __Backbone.Model.prototype.has( key )__ [#](http://backbonejs.org/#Model-has)
- __Backbone.Model.prototype.get( key )__ [#](http://backbonejs.org/#Model-get)
- __Backbone.Model.prototype.escape( key )__ [#](http://backbonejs.org/#Model-escape)
- __Backbone.Model.prototype.set( attrs , [opts] )__ [#](http://backbonejs.org/#Model-set)
- __Backbone.Model.prototype.set( key , value , [opts] )__ [#](http://backbonejs.org/#Model-set)
- __Backbone.Model.prototype.unset( key , [opts] )__ [#](http://backbonejs.org/#Model-unset)
- __Backbone.Model.prototype.clear( [opts] )__ [#](http://backbonejs.org/#Model-clear)

> 可以通过 `model.attributes` 属性来直接访问/操作原始数据，但是不会触发任何事件

---

- __Backbone.Model.prototype.hasChanged( [key] )__ [#](http://backbonejs.org/#Model-hasChanged)
- __Backbone.Model.prototype.changedAttributes( [attrs] )__ [#](http://backbonejs.org/#Model-changedAttributes)
- __Backbone.Model.prototype.previous( key )__ [#](http://backbonejs.org/#Model-previous)
- __Backbone.Model.prototype.previousAttributes()__ [#](http://backbonejs.org/#Model-previousAttributes)

> 可以通过 `model.changed` 属性来直接访问自上次 `set` 操作后的所有数据变更集

---

__Backbone.Model.prototype.toJSON()__ [#](http://backbonejs.org/#Model-toJSON)

```js
toJSON : function () {
  return _.clone( this.attributes )
}
```

---

__Backbone.Model.prototype.clone()__ [#](http://backbonejs.org/#Model-clone)

```js
clone : function () {
  return new this.constructor( this.attributes )
}
```

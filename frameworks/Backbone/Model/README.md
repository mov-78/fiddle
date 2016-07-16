该 fiddle 用于演示 [Backbone.Model](http://backbonejs.org/#Model) 模块

---

__Backbone.Model.extend( [protoProps] , [staticProps] )__ [#](http://backbonejs.org/#Model-extend)

类工厂，用于创建 `Backbone.Model` 子类：

```js
Backbone.Model.extend( {

  // 用于声明默认 attributes，可以为字面量或函数
  defaults : {} ,

  // 自定义构造函数
  constructor( attrs , opts ) {

    this.cid = _.uniqueId( this.cidPrefix ) // 自增 ID
    this.attributes = {} // 核心属性

    if ( opts.collection ) {
      this.collection = opts.collection
    }
    if ( opts.parse ) {
      attrs = this.parse( attrs , opts )
    }

    attrs = _.defaults( attrs , _.result( 'defaults' ) )
    this.set( attrs , opts )

    this.changed = {}

    this.initialize.apply( this , arguments )

  } ,

  // 自定义初始化函数
  initialize( ...args ) {} ,

  // 自定义校验逻辑
  // - set(option.validate=true) 及 save 操作均会自动触发校验逻辑
  // - 可以调用 Backbone.Model.prototype.isValid() 方法来主动触发校验逻辑
  validate( attrs , opts ) {
    // - 返回任意真值来告知 Backbone 校验失败
    // - model.validationError 保存了最近一次失败校验的返回值
  } ,

  idAttribute : 'id' ,
  cidPrefix : 'c' ,

  // ...更多实例方法

} )

// new Backbone.Model( [attrs] , [opts] )
```

---

> 可以通过 `model.attributes` 属性来直接访问/操作原始数据，但是不会触发任何事件

__Backbone.Model.prototype.has( key )__ [#](http://backbonejs.org/#Model-has)

```js
has( key ) {
  return this.get( key ) != null
}
```

__Backbone.Model.prototype.get( key )__ [#](http://backbonejs.org/#Model-get)

```js
get( key ) {
  return this.attributes[ key ]
}
```

__Backbone.Model.prototype.escape( key )__ [#](http://backbonejs.org/#Model-escape)

```js
escape( key ) {
  return _.escape( this.get( key ) )
}
```

__Backbone.Model.prototype.set( attrs , [opts] )__ [#](http://backbonejs.org/#Model-set)
__Backbone.Model.prototype.set( key , value , [opts] )__ [#](http://backbonejs.org/#Model-set)

追加、更改或删除（`opt.unset=true`）键值对；对于每一个变更的键值对都会触发一次 `change:key` 事件，若有任意变更则最后还会触发一次 `change` 事件：

> - 可以通过 `opts.validate=true` 来开启属性校验
> - 可以通过 `opts.silent=false` 来禁止触发事件

```js
model.on( 'change:key' , function ( model , currentValue , options ) {} )
model.on( 'change' , function ( model , options ) {} )
```

> - `model._previousAttributes:Object` 保存了上一个版本的副本（浅拷贝）
> - `model.changed:Object` 保存了本次 `set` 操作的 diff

__Backbone.Model.prototype.unset( key , [opts] )__ [#](http://backbonejs.org/#Model-unset)

```js
unset( key , opts ) {
  return this.set( key , null , _.extend( {} , opts , { unset : true } ) )
}
```

__Backbone.Model.prototype.clear( [opts] )__ [#](http://backbonejs.org/#Model-clear)

```js
clear( opts ) {
  let attrs = {}
  for ( let key in this.attributes ) {
    attrs[ key ] = null
  }
  return this.set( attrs , _.extend( {} , opts , { unset : true } ) )
}
```

---

- __Backbone.Model.prototype.hasChanged( [key] )__ [#](http://backbonejs.org/#Model-hasChanged)

```js
hasChanged( key ) {
  if ( key == null ) {
    return !_.isEmpty( this.changed )
  } else {
    return _.has( this.changed , key )
  }
}
```

- __Backbone.Model.prototype.changedAttributes( [attrs] )__ [#](http://backbonejs.org/#Model-changedAttributes)

```js
changedAttributes( attrs ) {

  // 获取已有的变更集
  if ( !attrs ) {
    return this.hasChanged() ? _.clone( this.changed ) : false
  }

  // 获取可能的变更集
  let prev = this._changing ? this._previousAttributes : this.attributes
  let changed = {}

  for ( let key in attrs ) {
    let val = attrs[ key ]
    if ( !_.isEqual( prev[ key ] , val ) ) {
      changed[ key ] = val
    }
  }

  return _.size( changed ) ? changed : false

}
```

- __Backbone.Model.prototype.previous( key )__ [#](http://backbonejs.org/#Model-previous)

```js
previous( key ) {
  return this._previousAttributes[ key ]
}
```

- __Backbone.Model.prototype.previousAttributes()__ [#](http://backbonejs.org/#Model-previousAttributes)

```js
previousAttributes() {
  return _.clone( this._previousAttributes )
}
```

> - `model._previousAttributes:Object` 保存了上一个版本的副本（浅拷贝）
> - `model.changed:Object` 保存了最近一次 `set` 操作的 diff

---

__Backbone.Model.prototype.toJSON()__ [#](http://backbonejs.org/#Model-toJSON)

```js
toJSON() {
  return _.clone( this.attributes )
}
```

---

__Backbone.Model.prototype.clone()__ [#](http://backbonejs.org/#Model-clone)

```js
clone() {
  return new this.constructor( this.attributes )
}
```

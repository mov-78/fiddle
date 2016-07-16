该 fiddle 用于演示 [Backbone.Collection](http://backbonejs.org/#Collection) 模块

> Collection ::= List&lt;Model&gt; | Map

---

__Backbone.Collection.extend( [protoProps] , [staticProps] )__ [#](http://backbonejs.org/#Collection-extend)

类工厂，用于创建 `Backbone.Collection` 子类：

```js
Backbone.Collection.extend( {

  // 自定义构造函数
  constructor( models , options ) {

    if ( options.model ) {
      this.model = options.model
    }
    if ( options.comparator ) {
      this.comparator = options.comparator
    }

    this.models = []  // 可以通过 this.models 直接访问 models
    this.length = 0   // models 长度

    this._byId = {}

    this.initialize.apply( this , arguments )

    if ( models ) {
      this.reset( models , _.extend( { silent : true } , options ) )
    }

  } ,

  // 自定义初始化函数
  initialize( ...args ) {} ,

  // model 构造函数；默认为 Backbone.Model
  model : Backbone.Model ,

  // 唯一标识生成器
  modelId( attrs ) {
    return attrs[ this.model.prototype.idAttribute || 'id' ]
  }

} )
```

---

__Backbone.Collection.prototype.set( models , [options] )__ [#](http://backbonejs.org/#Collection-set)

> Collection 内部对于 model 有两套唯一标识：一是 `model.cid` 自增 ID，另外一个是 `collection.modelId( model.attributes )` 计算属性；ID 到 model 的映射保存在 `collection._byId` 私有属性上

Backbone.Collection 核心方法，同时支持三种操作（通过 `options` 参数来控制，默认情况下开启全部三种操作）：

- 增（`options.add=true`）：对于每一个新增的 model 都会触发一次 `add` 事件（于涉及到的 model 之上）：

```js
model.on( 'add' , function ( addedModel , collection , setOptions ) {} )
collection.on( 'add' , function ( addedModel , collection , setOptions ) {} ) // proxied
```

- 删（`options.remove=true`）：对于每一个删除的 model 都会触发一次 `remove` 事件（于涉及到的 model 之上）：

```js
model.on( 'remove' , function ( removedModel , collection , setOptions ) {} )
collection.on( 'remove' , function ( removedModel , collection , setOptions ) {} ) // proxied
```

- 改（`options.merge=true`）；对于每一个变更的 model 都会触发一次 `change:key` 及 `change` 事件（于涉及到的 model 之上）：

```js
model.on( 'change:key' , function ( model , newValue , setOptions ) {} )
model.on( 'change' , function ( model , setOptions ) {} )
collection.on( 'change:key' , function ( model , newValue , setOptions ) {} ) // proxied
collection.on( 'change' , function ( model , setOptions ) {} ) // proxied
```

若增/删/改事件之中至少有一个触发，则最后会触发一个 `update` 事件（仅于 collection 之上）：

```js
collection.on( 'update' , function ( collection , setOptions ) {} )
```

> `models` 可以包含原生 JavaScript 对象（`set` 方法内部会自动将其转换为 `this.model` 的实例）或 `Backbone.Model` 及其子类的实例

---

__Backbone.Collection.prototype.get( id|cid|attrs|model )__ [#](http://backbonejs.org/#Collection-get)

获取指定 model：

```js
get : function ( obj ) {
  return this._byId[ obj ] ||
         this._byId[ this.modelId( obj.attributes || obj ) ] ||
         obj.cid && this._byId[ obj.cid ]
}
```

__Backbone.Collection.prototype.add( models , [options] )__ [#](http://backbonejs.org/#Collection-add)

添加新的 model，触发 `add` 事件：

```js
add : function ( models , options ) {
  return this.set( models , _.extend( { merge : false } , options , { add : true, remove : false } ) )
}
```

__Backbone.Collection.prototype.remove( models , options )__ [#](http://backbonejs.org/#Collection-remove)

移除指定 model，触发 `remove` 事件

---

__Backbone.Collection.prototype.at( index )__ [#](http://backbonejs.org/#Collection-at)

获取指定位置上的 model：

```js
at : function ( index ) {
  return this.models[ index < 0 ? index + this.length : index ]
}
```

__Backbone.Collection.prototype.push( model , [options] )__ [#](http://backbonejs.org/#Collection-push)

尾部追加新的 model，触发 `add` 事件：

```js
push : function ( model , options ) {
  return this.add( model , _.extend( options , { at : this.length } ) )
}
```

__Backbone.Collection.prototype.pop( [options] )__ [#](http://backbonejs.org/#Collection-pop)

移除并返回最后一个 model，触发 `remove` 事件：

```js
pop : function ( options ) {
  var model = this.at( this.length - 1 )
  return this.remove( model , options )
}
```

__Backbone.Collection.prototype.unshift( model , [options] )__ [#](http://backbonejs.org/#Collection-unshift)

头部追加新的 model，触发 `add` 事件：

```js
unshift : function ( model , options ) {
  return this.add( model , _.extend( options , { at : 0 } ) )
}
```


__Backbone.Collection.prototype.shift( [options] )__ [#](http://backbonejs.org/#Collection-shift)

移除并返回第一个 model，触发 `remove` 事件：

```js
shift : function ( options ) {
  var model = this.at( 0 )
  return this.remove( model , options )
}
```

__Backbone.Collection.prototype.slice()__ [#](http://backbonejs.org/#Collection-slice)

获取子列：

```js
slice : function ( ...args ) {
  return Array.from( this.models ).slice( args )
}
```

---

__Backbone.Collection.prototype.reset( models , [options] )__ [#](http://backbonejs.org/#Collection-reset)

批量更新；与 `set` 方法不同的是，`reset` 首先清空 `this.models` ，然后调用 `add` 方法一次性添加所有 models，期间不触发 `add` 及 `remove` 事件，仅在操作完成后触发一次 `reset` 事件（仅于 collection 之上）：

```js
collection.on( 'reset' , function ( collection , options ) {
  // options.previousModels 保存了批量更新前的 this.models 的副本
} )
```

---

__Backbone.Collection.prototype.pluck( key )__ [#](http://backbonejs.org/#Collection-pluck)

```js
pluck : function ( key ) {
  return this.map( key )
}
```

__Backbone.Collection.prototype.where( attrs )__ [#](http://backbonejs.org/#Collection-where)

```js
where : function ( attrs ) {
  return this.filter( attrs )
}
```

__Backbone.Collection.prototype.findWhere( attrs )__ [#](http://backbonejs.org/#Collection-findWhere)

```js
findWhere : function ( attrs ) {
  return this.find( attrs )
}
```

---

__Backbone.Collection.prototype.toJSON()__ [#](http://backbonejs.org/#Collection-toJSON)

```js
toJSON : function () {
  return this.map( model => model.toJSON() )
}
```

---

__Backbone.Collection.prototype.clone()__ [#](http://backbonejs.org/#Collection-clone)

```js
clone : function () {
  return new this.constructor(
    this.models ,
    { model : this.model , comparator : this.comparator }
  )
}
```

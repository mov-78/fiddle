该 fiddle 用于演示 [Backbone.Collection](http://backbonejs.org/#Collection) 模块

> Collection ::= List&lt;Model&gt; | Hash

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

        // [1] as List
        this.models = []  // 可以通过 this.models 直接访问 models
        this.length = 0   // models 长度

        // [2] as Hash
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
    } ,

    // [1] sortAttr
    comparator : 'id' ,
    // [2] sort
    comparator( model , other ) {
        let rank1 = this.modelId( model.attributes )
        let rank2 = this.modelId( other.attributes )
        return rank1 > rank2 ? 1 : ( rank1 < rank2 ? : -1 : 0 )
    } ,
    // [3] sortBy
    comparator( model ) {
        return this.modelId( model.attributes )
    } ,

    // ...更多实例方法

} )
```

---

__Backbone.Collection.prototype.set( models , [options] )__ [#](http://backbonejs.org/#Collection-set)

> Collection 内部对于 model 有两套唯一标识：一是 `model.cid` 自增 ID，另外一个是 `collection.modelId( model.attributes )` 计算属性；ID 到 model 的映射保存在 `collection._byId` 私有属性上

Backbone.Collection 核心方法，同时支持三种操作（通过 `options` 参数来控制，默认情况下开启全部三种操作）：

- 增（`options.add=true`）：对于每一个新增的 model 都会触发一次 `add` 事件（于涉及到的 model 之上）：

```js
model.on( 'add' , function ( addedModel , collection , setOptions ) {
    // setOptions.index - 新增 model 的位置
} )
collection.on( 'add' , function ( addedModel , collection , setOptions ) {} ) // proxied
```

- 删（`options.remove=true`）：对于每一个删除的 model 都会触发一次 `remove` 事件（于涉及到的 model 之上）：

```js
model.on( 'remove' , function ( removedModel , collection , setOptions ) {
    // setOptions.index - 被删除的 model 的位置
} )
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
collection.on( 'update' , function ( collection , setOptions ) {
    // setOptions.changes.added - 新增的 models
    // setOptions.changes.removed - 移除的 models
    // setOptions.changes.merged - 变更的 models
} )
```

> - `models` 实参可以为原生 JavaScript 对象（`set` 方法内部会自动将其转换为 `this.model` 的实例）或 `Backbone.Model` 及其子类的实例
> - 可以通过声明 `options.at` 来设置插入（`options.add=true`）的位置
> - 若 `options.sort=true` 且 `!!collection.comparator`，则在 `set` 过程中自动维护顺序

---

__Backbone.Collection.prototype.has( id|cid|attrs|model )__ [#](#)

判断是否存在指定 model：

```js
has( obj ) {
    return this.get( obj ) != null
}
```

__Backbone.Collection.prototype.get( id|cid|attrs|model )__ [#](http://backbonejs.org/#Collection-get)

获取指定 model：

```js
get( obj ) {
    return this._byId[ obj ] ||
           this._byId[ this.modelId( obj.attributes || obj ) ] ||
           obj.cid && this._byId[ obj.cid ]
}
```

__Backbone.Collection.prototype.add( models , [options] )__ [#](http://backbonejs.org/#Collection-add)

添加新的 model，触发 `add` 事件及 `update` 事件：

```js
add( models , options ) {
    return this.set( models , _.extend( { merge : false } , options , { add : true, remove : false } ) )
}
```

__Backbone.Collection.prototype.remove( models , options )__ [#](http://backbonejs.org/#Collection-remove)

移除指定 model，触发 `remove` 及 `update` 事件：

```js
remove( models , options ) {

    let removed = []
    this.models.forEach( ( model , index ) = > {

        model = this.get( model )
        if ( !model ) {
            return
        }

        index = this.models.indexOf( model )
        this.models.splice( index , 1 )
        this.length -= 1

        delete this._byId[ model.cid ]
        let id = this.modelId( model.attributes )
        if ( id ) {
            delete this._byId[ id ]
        }

        if ( !options.silent ) {
            options.index = index
            model.trigger( 'remove' , model , this , options )
        }

        removed.push( model )
        model.off( 'all' , this._onModelEvent , this )

    } )

    if ( !options.silent && removed.length ) {
        options.changes = { added : [] , merged : [] , removed }
        this.trigger( 'update' , this , options )
    }

    return removed

}
```

---

__Backbone.Collection.prototype.at( index )__ [#](http://backbonejs.org/#Collection-at)

获取指定位置上的 model：

```js
at( index ) {
    return this.models[ index < 0 ? index + this.length : index ]
}
```

__Backbone.Collection.prototype.push( model , [options] )__ [#](http://backbonejs.org/#Collection-push)

尾部追加新的 model，触发 `add` 及 `update` 事件：

```js
push( models , options ) {
    return this.add( models , _.extend( { at : this.length } , options ) )
}
```

__Backbone.Collection.prototype.pop( [options] )__ [#](http://backbonejs.org/#Collection-pop)

移除并返回最后一个 model，触发 `remove` 及 `update` 事件：

```js
pop( options ) {
    return this.remove( this.at( this.length - 1 ) , options )
}
```

__Backbone.Collection.prototype.unshift( model , [options] )__ [#](http://backbonejs.org/#Collection-unshift)

头部追加新的 model，触发 `add` 及 `update` 事件：

```js
unshift( models , options ) {
    return this.add( models , _.extend( { at : 0 } , options ) )
}
```


__Backbone.Collection.prototype.shift( [options] )__ [#](http://backbonejs.org/#Collection-shift)

移除并返回第一个 model，触发 `remove` 及 `update` 事件：

```js
shift( options ) {
    return this.remove( this.at( 0 ) , options )
}
```

__Backbone.Collection.prototype.slice()__ [#](http://backbonejs.org/#Collection-slice)

获取子列：

```js
slice( ...args ) {
    return this.models.slice( args )
}
```

---

__Backbone.Collection.prototype.reset( models , [options] )__ [#](http://backbonejs.org/#Collection-reset)

批量更新；与 `set` 方法不同的是，`reset` 首先清空 `this.models` ，然后调用 `add` 方法一次性添加所有 models，期间不触发 `add` 及 `remove` 事件（`options.silent=true`），仅在操作完成后触发一次 `reset` 事件（仅于 collection 之上）：

```js
collection.on( 'reset' , function ( collection , options ) {
    // options.previousModels - 批量更新前 this.models 的副本
} )
```

---

__Backbone.Collection.prototype.pluck( key )__ [#](http://backbonejs.org/#Collection-pluck)

```js
pluck( key ) {
    return this.map( key )
}
```

__Backbone.Collection.prototype.where( attrs )__ [#](http://backbonejs.org/#Collection-where)

```js
where( attrs ) {
    return this.filter( attrs )
}
```

__Backbone.Collection.prototype.findWhere( attrs )__ [#](http://backbonejs.org/#Collection-findWhere)

```js
findWhere( attrs ) {
    return this.find( attrs )
}
```

---

__Backbone.Collection.prototype.toJSON()__ [#](http://backbonejs.org/#Collection-toJSON)

```js
toJSON() {
    return this.map( model => model.toJSON() )
}
```

---

__Backbone.Collection.prototype.clone()__ [#](http://backbonejs.org/#Collection-clone)

```js
clone() {
    return new this.constructor(
        this.models ,
        { model : this.model , comparator : this.comparator }
    )
}
```

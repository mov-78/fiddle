该 fiddle 用于演示 [Backbone.View](http://backbonejs.org/#View) 模块

---

__Backbone.View.extend( [protoProps] , [staticProps] )__ [#](http://backbonejs.org/#View-extend)

类工厂，用于创建 `Backbone.View` 子类。

```js
Backbone.View.extend( {

  // 自定义构造函数
  constructor : function ( ...args ) {
    Backbone.View.apply( this , args )
  } ,

  // 自定义初始化函数
  initialize : function ( ...args ) {
    this.listenTo( this.model , 'change' , this.render )
  } ,

  // 用于声明视图的根节点
  el : document.body ,

  // 或依据以下属性创建视图的根节点
  id : 'id' , // 覆盖 attributes.id
  tagName : 'div' , // 覆盖 attributes.class
  className : 'className' ,
  attributes : { title : 'title' } ,

  // 配置事件代理集
  events : {
    'click .inc' : 'inc' , // [1] 指定方法名
    'click .dec' : function () {} , // [2] 内联事件句柄
  } ,

  // 「约定」指定模板方法
  template : _.template( '...' ) ,

  // 「约定」指定渲染方法
  render : function () {
    this.$el.html( this.template( this.model.toJSON() ) )
    return this
  }

} )

// new Backbone.View( [opts] )
// 其中 opts 支持如下字段（直接设为实例属性）：
//    - model
//    - collection
//    - el
//    - tagName
//    - id
//    - className
//    - attributes
//    - events
```

---

__Backbone.View.prototype.$( selector )__ [#](http://backbonejs.org/#View-dollar)

```js
$ : function ( selector ) {
  return this.$el.find( selector )
}
```

---

__Backbone.View.prototype.setElement( element )__ [#](http://backbonejs.org/#View-setElement)

变更视图根节点，重新配置事件代理。

```js
setElement : function ( el ) {
  this.undelegateEvents()
  this._setElement( el )
  this.delegateEvents()
  return this
} ,
_setElement : function ( el ) {
  this.$el = el instanceof Backbone.$ ? el : Backbone.$( el )
  this.el = this.$el[ 0 ]
}
```

---

__Backbone.View.prototype.remove()__ [#](http://backbonejs.org/#View-remove)

将视图根节点从 DOM 中移除，同时调用 `stopListening` 来停止监听其他对象上的事件。

```js
remove : function () {
  this.$el.remove()
  this.stopListening()
  return this
}
```

---

配置事件代理：

> 视图首次创建时会自动配置一次事件代理

- __Backbone.View.prototype.delegate( type , selector , listener )__ [#](http://backbonejs.org/#View-delegateEvents)

```js
delegate : function ( type , selector , listener ) {
  this.$el.on( type + '.delegateEvents' + this.cid , selector , listener )
  return this
}
```

- __Backbone.View.prototype.delegateEvents( [events] )__ [#](http://backbonejs.org/#View-delegateEvents)

```js
delegateEvents : function( events ) {
  var key
  var method
  var match
  events || ( events = _.result( this , 'events' ) )
  if ( !events ) {
    return this
  }
  for ( key in events ) {
    method = events[ key ]
    if ( !_.isFunction( method ) ) {
      method = this[ method ]
    }
    if ( !method ) {
      continue
    }
    match = key.match( /^(\S+)\s*(.*)$/ )
    this.delegate( match[ 1 ] , match[ 2 ] , _.bind( method , this ) )
  }
  return this
}
```

- __Backbone.View.prototype.undelegate( type , selector , listener )__ [#](http://backbonejs.org/#View-undelegateEvents)

```js
undelegate : function ( type , selector , listener ) {
  this.$el.off( type + '.delegateEvents' + this.cid , selector , listener )
  return this
}
```

- __Backbone.View.prototype.undelegateEvents()__ [#](http://backbonejs.org/#View-undelegateEvents)

```js
undelegateEvents : function () {
  if ( this.$el ) {
    this.$el.off( '.delegateEvents' + this.cid )
  }
  return this
}
```

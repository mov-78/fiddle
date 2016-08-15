该 fiddle 用于演示 [Backbone.Events](http://backbonejs.org/#Events) 模块

> Event = name + target

```js
// Backbone.Events 可以被任意对象 mixin 进来以提供注册/触发具名事件的能力

let obj = {}
_.extend( obj , Backbone.Events )

obj.on( 'notify' , msg => console.log( msg ) )
obj.trigger( 'notify' , 'offline' )
```

> 关于事件名：
> - 习惯上用 `:` 来模拟命名空间，比如 `change:title`
> - 支持利用空格作为分隔符来同时声明多个事件，比如 `change:title change:content`

---

__Backbone.Events.on( name , callback , [context] )__ [#](http://backbonejs.org/#Events-on)

> 别名：`bind`

用于注册事件句柄。

可以同时声明多个事件句柄：

```js
model.on( {
    event1 : callback1,
    event2 : callback2
  // ...
} , optionalContext )
```

Backbone 内部在触发任意事件后都会触发一个特殊的 `all` 事件：

```js
let proxy = {}
_.extend( proxy , Backbone.Events )

proxy.on( 'all' , function ( name , ...args ) {
    other.trigger( name , ...args )
} )
```

__Backbone.Events.off( [name] , [callback] , [context] )__ [#](http://backbonejs.org/#Events-off)

> 别名：`unbind`

用于移除事件句柄。

```js
// 移除指定事件及指定上下文的指定句柄
model.off( name , callback , context )

// 移除指定上下文的指定句柄
model.off( null , callback , context )

// 移除指定事件及指定上下文的所有句柄
model.off( name , null , context )

// 移除指定事件的指定句柄
model.off( name , callback )

// 移除指定上下文的所有句柄
model.off( null , null , context )

// 移除指定事件的所有句柄
model.off( name )

// 移除指定句柄
model.off( null , callback )

// 移除全部句柄
model.off()
```

__Backbone.Events.trigger( name , ...args )__ [#](http://backbonejs.org/#Events-trigger)

用于触发事件。

__Backbone.Events.listenTo( other , name , callback )__ [#](http://backbonejs.org/#Events-listenTo)

用于监听其他对象上的事件。

```js
view.listenTo( model , 'change' , view.render )
```

__Backbone.Events.stopListening( [other] , [name] , [callback] )__ [#](http://backbonejs.org/#Events-stopListening)

停止监听其他对象上的事件。

```js
view.stopListening( model )
```

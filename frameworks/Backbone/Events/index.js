var _ = require('underscore')
var Events = require('backbone').Events

//
// Backbone.Events
// Backbone.Events.on(event, callback, [context])
// Backbone.Events.on(events, [context])
// Backbone.Events.off([event], [callback], [context])
// Backbone.Events.trigger(event, [*args])
// Backbone.Events.listenTo(other, event, callback)
// Backbone.Events.stopListening([other], [event], [callback])
//

var obj
var listener

// Backbone.Events 模块可以被任意模块 mixin 进来
obj = _.extend({}, Events)
console.assert(obj.on === Events.on)
console.assert(obj.off === Events.off)
console.assert(obj.trigger === Events.trigger)
console.assert(obj.listenTo === Events.listenTo)
console.assert(obj.stopListening === Events.stopListening)
console.assert(obj.once === Events.once)
console.assert(obj.listenToOnce === Events.listenToOnce)

// [1] Backbone.Events.on(event, callback, [context])
obj.on(
  'change', // 支持同时注册多个事件，其中各个事件用空格符分隔开来
  function onChange() {
    console.log('obj.onChange:', _.toArray(arguments))
  }
)
// [2] Backbone.Events.on(events, [context])
obj.on(
  {
    // 特殊的 catch-all 事件
    'all' : function onAll(event) {
      console.log('obj.onAll[' + event + ']:', _.toArray(arguments).slice(1))
    }
  }
)

// Backbone.Events.trigger(event, [*args])
obj.trigger('change')
obj.trigger('remove')

// Backbone.Events.off([event], [callback], [context])
//    off()                           移除全部回调
//    off(null, null, context)        移除指定上下文的所有回调
//    off(null, callback)             移除指定回调
//    off(null, callback, context)    移除指定上下文的指定回调
//    off(event)                      移除指定事件的所有回调
//    off(event, null, context)       移除指定事件及指定上下文的所有回调
//    off(event, callback)            移除指定事件的指定回调
//    off(event, callback, context)   移除指定事件及指定上下文的指定回调

// Backbone.Events.listenTo(other, event, callback)
listener = _.extend({}, Events)
listener.listenTo(
  obj,
  'all',
  function (event) {
    console.assert(this === listener)
    console.log('listener.onAll[' + event + ']:', _.toArray(arguments).slice(1))
  }
)
obj.trigger('foo bar')

// Backbone.Events.stopListening([other], [event], [callback])
//    stopListening()                         移除全部回调
//    stopListening(null, null, callback)     移除指定回调
//    stopListening(null, event)              移除指定事件的所有回调
//    stopListening(null, event, callback)    移除指定事件的指定回调
//    stopListening(other)                    移除指定对象的所有回调
//    stopListening(other, null, callback)    移除指定对象的指定回调
//    stopListening(other, event)             移除指定对象及指定事件的所有回调
//    stopListening(other, event, callback)   移除指定对象及指定事件的指定回调

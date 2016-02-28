console.assert(Backbone.View.extend === Backbone.Model.extend)
console.assert(Backbone.View.extend === Backbone.Collection.extend)
console.assert(Backbone.View.extend === Backbone.Router.extend)
console.assert(Backbone.View.extend === Backbone.History.extend)

// Backbone.View.extend([protoProps], [staticProps])
var CounterView = Backbone.View.extend({

  // el 有两个作用：
  //  - 在实例化之前，用于获取/生成 DOM 节点
  //  - 在实例化之后，用于保存 DOM 节点
  // 等同于：
  //  this.$el = el instanceof Backbone.$ ? el : Backbone.$(el)
  //  this.el = this.$el[0]
  // 因而 $el 可以看做 view 上的计算属性
  // 同时支持字符串及函数类型（_.result(this, 'el')）
  'el' : 'main',

  // tagName/id/className/attributes 组合用于生成 DOM 节点
  // this.el 优先级高于 tagName/id/className/attributes 组合
  // 同时支持字符串及函数类型（_.result(this, 'tagName|id|className|attributes')）
  'tagName' : 'tagName',
  'attributes' : { 'attrName' : 'attrValue' },
  'id' : 'id',                // 覆盖 attributes.id
  'className' : 'className',  // 覆盖 attributes.class

  // events 用于声明事件代理集（该事件代理集会在 View 实例化时自动配置）
  // 同时支持字符串及函数类型（_.result(this, 'events')）
  'events' : {
    // 事件声明格式为：'event selector'
    'click .inc' : function onInc() {
      var count = this.model.get('count')
      this.model.set('count', count + 1)
    },
    'click .dec' : function onDec() {
      var count = this.model.get('count')
      this.model.set('count', count - 1)
    },
    'click .reset' : function onReset() {
      this.model.set('count', 0)
    },
    'click .remove' : function onRemove() {
      // Backbone.View.prototype.remove() 做了两件事：
      //  1: this.$el.remove()
      //  2: this.stopListening()
      console.assert(this.remove === Backbone.View.prototype.remove)
      this.remove()
    }
  },

  // initialize 方法在 DOM 节点获取/生成后、事件代理集配置完毕时调用
  'initialize' : function initialize() {
    this.listenTo(this.model, 'change:count', this.render)
    this.render()
  },

  // [约定] 保存对应的 model 及/或 collection
  'model' : new Backbone.Model({ 'count' : 0 }),
  'collection' : new Backbone.Collection(),

  // [约定] 保存模板函数
  'template' : _.template(Backbone.$('#tpl').html()),

  // [约定] 定义 render 方法来渲染模板
  'render' : function render() {
    this.$el.html(this.template(this.model.toJSON()))
    return this // [约定] 支持链式调用
  }

})

// new View([options])
// 有效字段：tagName|id|className|attributes|el|events|model|collection
var counter = new CounterView()

// Backbone.View.prototype.$(selector)
// 等同于：this.$el.find(selector)
console.assert(counter.$ === Backbone.View.prototype.$)

// Backbone.View.prototype.delegateEvents([events])
// 配置事件代理集（在 View 实例化时自动调用）
//  1. 若未传递 events，则令 events = _.result(this, 'events')
//  2. 移除旧的事件代理集（this.undelegateEvents()）并配置新的事件代理集
console.assert(counter.delegateEvents === Backbone.View.prototype.delegateEvents)

// Backbone.View.prototype.undelegateEvents()
// 移除事件代理集
console.assert(counter.undelegateEvents === Backbone.View.prototype.undelegateEvents)

// Backbone.View.prototype.setElement(element)
// 重置 DOM 节点及事件代理集
// 等同于：
//    this.undelegateEvents()
//    this.$el = element instanceof Backbone.$ ? element : Backbone.$(element)
//    this.el = this.$el[0]
//    this.delegateEvents()
console.assert(counter.setElement === Backbone.View.prototype.setElement)

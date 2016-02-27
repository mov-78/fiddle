var _ = require('underscore')
var Backbone = require('backbone')

//
// Backbone.Model.extend([protoProps], [staticProps])
// [[model.attributes]]
//

;(function () {

  var Model = Backbone.Model.extend(

    // 原型属性：保存在 Model.prototype 上
    {

      'protoProp' : _.noop,

      // 原型上的 initialize 方法会在实例化 Model 时（attrs 设置后）调用
      'initialize' : function initialize(attrs) {
        console.log('initialize:', attrs)
      }

    },

    // 类属性：保存在 Model 上
    { 'staticProp' : _.noop }

  )

  // new Model([attrs], [options])
  var model = new Model({ 'attr' : _.noop })
  console.log('model:', model)

  console.assert(model instanceof Model)
  console.assert(model.constructor === Model)
  console.assert(Model.prototype.isPrototypeOf(model))

  // 原型属性
  console.assert('protoProp' in model)
  console.assert('protoProp' in Model.prototype)
  console.assert(!_.has(model, 'protoProp'))
  console.assert(_.has(Model.prototype, 'protoProp'))

  // 类属性
  console.assert(_.has(Model, 'staticProp'))

  // attributes 属性：保存在 model 的 attributes 字段上
  console.assert(!_.has(model, 'attr'))
  console.assert(_.has(model.attributes, 'attr'))

  // 通过 _.extend() 方法复制静态方法
  console.assert(Model.extend === Backbone.Model.extend)
  // 通过原型链继承实例方法
  console.assert(Backbone.Model.prototype.isPrototypeOf(Model.prototype))

  // [1] model.defaults
  Model = Backbone.Model.extend({
    // protoProp 上的 defaults 属性可以为 model.attributes 指定默认值
    'defaults': {
      'foo' : 'default'
    }
  })
  model = new Model()
  console.assert(model.has('foo'))
  console.assert(model.get('foo') === 'default')
  model = new Model({ 'foo' : 'bar' })
  console.assert(model.has('foo'))
  console.assert(model.get('foo') === 'bar')

  // [2] model.defaults()
  Model = Backbone.Model.extend({
    // protoProp 上的 defaults 方法可以为 model.attributes 指定默认值
    'defaults': function defaults() {
      return {
        'foo' : 'default'
      }
    }
  })
  model = new Model()
  console.assert(model.has('foo'))
  console.assert(model.get('foo') === 'default')
  model = new Model({ 'foo' : 'bar' })
  console.assert(model.has('foo'))
  console.assert(model.get('foo') === 'bar')

})()


//
// Backbone.Model.prototype.get(key)
// Backbone.Model.prototype.escape(key)
// Backbone.Model.prototype.set(attrs, [options])
// Backbone.Model.prototype.set(key, value, [options])
// Backbone.Model.prototype.unset(key, [options])
// Backbone.Model.prototype.has(key)
// Backbone.Model.prototype.clear([options])
//

;(function () {

  var data = {}
  var model = new (Backbone.Model.extend())

  console.assert(model.get === Backbone.Model.prototype.get)
  console.assert(model.escape === Backbone.Model.prototype.escape)
  console.assert(model.set === Backbone.Model.prototype.set)
  console.assert(model.unset === Backbone.Model.prototype.unset)
  console.assert(model.has === Backbone.Model.prototype.has)
  console.assert(model.clear === Backbone.Model.prototype.clear)

  // has(key)
  console.assert(!model.has('foo'))
  console.assert(!model.has('bar'))
  console.assert(!_.has(model.attributes, 'foo'))
  console.assert(!_.has(model.attributes, 'bar'))

  model.set('foo', 'foo')       // [1] set(key, value, [options])
  model.set({ 'bar' : data })   // [2] set(attrs, [options])

  console.assert(model.has('foo'))
  console.assert(model.has('bar'))
  console.assert(_.has(model.attributes, 'foo'))
  console.assert(_.has(model.attributes, 'bar'))

  // get(key)
  console.assert(model.get('foo') === 'foo')
  console.assert(model.get('bar') === data)
  console.assert(model.get('foo') === model.attributes.foo)
  console.assert(model.get('bar') === model.attributes.bar)

  // escape(key)
  model.set('baz', '&<>"\'`')
  console.assert(model.escape('baz') === _.escape(model.get('baz')))

  // unset(key, [options])
  model.unset('baz')
  console.assert(!model.has('baz'))
  console.assert(!_.has(model.attributes, 'baz'))

  // clear([options])
  model.clear()
  console.assert(_.isEmpty(model.attributes))

})()


//
// Backbone.Model.prototype.toJSON()
//

;(function () {

  var Model = Backbone.Model.extend({ 'protoProp' : '*' })
  var model = new Model({ 'foo' : _.noop, 'bar' : new Date() })

  // toJSON() 实际上等价于 _.clone(model.attributes)
  // 因而不会忽略不可序列化属性（如 Date、Function 等）
  console.assert(model.toJSON === Backbone.Model.prototype.toJSON)

  console.log('model.toJSON():', model.toJSON())

})()


//
// [[model.changed]]
// Backbone.Model.prototype.hasChanged([key])
// Backbone.Model.prototype.changedAttributes([attrs])
// Backbone.Model.prototype.previous(key)
// Backbone.Model.prototype.previousAttributes()
//

;(function () {

  var model = new (Backbone.Model.extend())

  // hasChanged([key])
  // 通过检测 [[changed]] 内部属性来判断是否存在（指定）字段更新
  console.assert(model.hasChanged === Backbone.Model.prototype.hasChanged)

  // changedAttributes([attrs])
  // 返回当前或预期（模拟 set(attrs) 操作之后）的字段变更信息
  // [[changed]] 内部属性用于记录上一次 set/unset/clear 操作导致的字段变更信息
  console.assert(model.changedAttributes === Backbone.Model.prototype.changedAttributes)

  // previous(key)
  // [[_previousAttributes]][key]
  // 获取旧版本备份指定字段值；旧版本备份保存在 [[_previousAttributes]] 内部属性中
  console.assert(model.previous === Backbone.Model.prototype.previous)

  // previousAttributes()
  // _.clone([[_previousAttributes]])
  // 获取旧版本备份；旧版本备份保存在 [[_previousAttributes]] 内部属性中
  console.assert(model.previousAttributes === Backbone.Model.prototype.previousAttributes)

  console.assert(_.isEmpty(model.changed))
  console.assert(!model.hasChanged('foo'))
  console.assert(_.isUndefined(model.previous('foo')))
  console.assert(_.isEmpty(model.previousAttributes()))

  model.set('foo', 1)
  console.assert(!(_.isEmpty(model.changed)) && model.changed.foo === 1)
  console.assert(model.hasChanged('foo'))
  console.assert(_.isUndefined(model.previous('foo')))
  console.assert(_.isEmpty(model.previousAttributes()))

  model.set('foo', 1)
  console.assert(_.isEmpty(model.changed))
  console.assert(!model.hasChanged('foo')) // 仅当 attr 真正变更时才会更新字段变更信息
  console.assert(model.previous('foo') === 1)
  console.assert(_.isEqual(model.previousAttributes(), { 'foo' : 1 }))

  model.set('foo', 2)
  console.assert(!(_.isEmpty(model.changed)) && model.changed.foo === 2)
  console.assert(model.hasChanged('foo'))
  console.assert(model.previous('foo') === 1)
  console.assert(_.isEqual(model.previousAttributes(), { 'foo' : 1 }))

  // unset() 及 clear() 方法内部调用了 set() 方法，因此也会更新字段变更信息
  model.unset('foo')
  console.assert(!(_.isEmpty(model.changed)) && _.isUndefined(model.changed.foo))
  console.assert(model.hasChanged('foo'))
  console.assert(model.previous('foo') === 2)
  console.assert(_.isEqual(model.previousAttributes(), { 'foo' : 2 }))

})()


//
// Backbone.Model.prototype.clone()
//

;(function () {

  var Model = Backbone.Model.extend({ 'protoProp' : _.noop })

  var model = new Model({ 'attr' : _.noop })
  var clone = model.clone() // new model.constructor(model.attributes)

  console.assert(model.clone === Backbone.Model.prototype.clone)

  console.assert(!_.isEqual(model, clone)) // 仅 [[attributes]] 相同，其他元数据不同
  console.assert(_.isEqual(model.attributes, clone.attributes))

})()

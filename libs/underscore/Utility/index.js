var assert = console.assert
var _ = require('underscore')

//
// _.identity(value)
//

;(function _identity() {

  var obj = {}
  var array = []

  assert(_.identity(0) === 0)
  assert(_.identity('') === '')
  assert(_.identity(true) === true)
  assert(_.identity(obj) === obj)
  assert(_.identity(array) === array)
  assert(_.identity(_.noop) === _.noop)

})()


//
// _.constant(value)
//

;(function _constant() {

  var obj = {}
  var array = []

  assert(_.constant(0)() === 0)
  assert(_.constant('')() === '')
  assert(_.constant(true)() === true)
  assert(_.constant(obj)() === obj)
  assert(_.constant(array)() === array)
  assert(_.constant(_.noop)() === _.noop)

})()


//
// _.noop()
//

;(function _noop() {

  assert(_.isUndefined(_.noop()))

})()


//
// _.times(n, iteratee, [context])
//

;(function _times() {

  assert(
    _.isEqual(
      _.times(
        3,
        function iteratee(index) {
          return index
        }
      ),
      [ 0, 1, 2 ]
    )
  )

})()


//
// _.random([min], max)
//

;(function _random() {

  _.times(
    1024,
    function iteratee() {
      var rand = _.random(1, 100)
      assert(rand >= 1 && rand <= 100)
    }
  )

})()


//
// _.mixin(object)
//

;(function _mixin() {

  assert(_.isUndefined(_.capitalize))

  _.mixin({
    'capitalize': function capitalize(s) {
      return s.charAt(0).toUpperCase() + s.substring(1).toLowerCase()
    }
  })

  assert(!_.isUndefined(_.capitalize))
  assert(_.capitalize('underscore') === 'Underscore')

})()


//
// _.uniqueId([prefix])
//

;(function _uniqueId() {

  var prefix = '_'

  assert(_.uniqueId(prefix) === prefix + 1)

})()


//
// _.escape(string)
// _.unescape(string)
//

;(function _escapeAndUnescape() {

  assert(_.escape('&<>"\'`') === '&amp;&lt;&gt;&quot;&#x27;&#x60;')
  assert(_.unescape('&amp;&lt;&gt;&quot;&#x27;&#x60;') === '&<>"\'`')

})()


//
// _.result(object, key, [defaultValue])
//

;(function _result() {

  var object = {
    'foo' : 1,
    'bar' : function bar() {
      return 2
    }
  }

  assert(_.result(object, 'foo') === 1)
  assert(_.result(object, 'bar') === 2)
  assert(_.result(object, 'baz', 3) === 3)

})()


//
// _.template(templateString, [settings])
//

;(function _template() {

  var compile

  // <%= expression %>
  compile = _.template('<%= name %>')
  assert(compile({ 'name' : 'Pwn' }) === 'Pwn')
  compile = _.template('<% print(name) %>') // print(expr) <=> <%= expr %>
  assert(compile({ 'name' : 'Pwn' }) === 'Pwn')

  // <%- expression %>
  compile = _.template('<%= html %>')
  assert(compile({ 'html' : '&<>"\'`' }) === '&<>"\'`')
  compile = _.template('<%- html %>')
  assert(compile({ 'html' : '&<>"\'`' }) === '&amp;&lt;&gt;&quot;&#x27;&#x60;')

  // <% statement %>
  compile = _.template('<% print(_.range(1, n + 1)) %>')
  assert(compile({ 'n' : 5 }) === '1,2,3,4,5')

})()

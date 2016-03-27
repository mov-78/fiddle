该 fiddle 用于演示 [BDD](http://chaijs.com/api/bdd/) 风格断言

```sh
$ npm install
$ npm test
```

---

链式调用语法糖（noop），通过 `chai.Assertion.addProperty` 添加：

> to, be, been, is, that, which, and, has, have, with, at, of, same

---

内置 flags：

- [not](http://chaijs.com/api/bdd/#method_not): 开启 `negate` flag（全局通用）
- [deep](http://chaijs.com/api/bdd/#method_deep): 开启 `deep` flag
- [any](http://chaijs.com/api/bdd/#method_any): 开启 `any` flag；关闭 `all` flag
- [all](http://chaijs.com/api/bdd/#method_all): 开启 `all` flag；关闭 `any` flag

---

- [a( type, [message] )](http://chaijs.com/api/bdd/#method_a)
- [an( type, [message] )](http://chaijs.com/api/bdd/#method_a)

---

- [include( value, [message] )](http://chaijs.com/api/bdd/#method_include)
- [contain( value, [message] )](http://chaijs.com/api/bdd/#method_include)

---

- [ok](http://chaijs.com/api/bdd/#method_ok)
- [true](http://chaijs.com/api/bdd/#method_true)
- [false](http://chaijs.com/api/bdd/#method_false)

---

- [null](http://chaijs.com/api/bdd/#method_null)
- [undefined](http://chaijs.com/api/bdd/#method_undefined)
- [exist](http://chaijs.com/api/bdd/#method_exist)
- [NaN](http://chaijs.com/api/bdd/#method_nan)

---

- [empty](http://chaijs.com/api/bdd/#method_empty)

---

- [arguments](http://chaijs.com/api/bdd/#method_arguments)

---

- [equal( value, [message] )](http://chaijs.com/api/bdd/#method_equal)
- [eql( value, [message] )](http://chaijs.com/api/bdd/#method_eql)

---

- [gt|greaterThan|above( value, [message] )](http://chaijs.com/api/bdd/#method_above)
- [lt|lessThan|below( value, [message] )](http://chaijs.com/api/bdd/#method_below)
- [gte|least( value, [message] )](http://chaijs.com/api/bdd/#method_least)
- [lte|most( value, [message] )](http://chaijs.com/api/bdd/#method_most)
- [within( min, max, [message] )](http://chaijs.com/api/bdd/#method_within)

---

- [instanceof|instanceOf( constructor, [message] )](http://chaijs.com/api/bdd/#method_instanceof)

---

- [property( key, [value], [message] )](http://chaijs.com/api/bdd/#method_property)
- [ownProperty( key, [message] )](http://chaijs.com/api/bdd/#method_ownproperty)
- [ownPropertyDescriptor( key, [descriptor], [message] )](http://chaijs.com/api/bdd/#method_ownpropertydescriptor)

---

- [length( value, [message] )](http://chaijs.com/api/bdd/#method_length)
- [lengthOf( value, [message] )](http://chaijs.com/api/bdd/#method_lengthof)

---

- [match|matches( regex, [message] )](http://chaijs.com/api/bdd/#method_match)
- [string( substring, [message] )](http://chaijs.com/api/bdd/#method_string)

---

- [key|keys( [key], [key]... )](http://chaijs.com/api/bdd/#method_keys)

---

- [throw|throws|Throw( ... )](http://chaijs.com/api/bdd/#method_throw)

---

- [respondTo( method, [message] )](http://chaijs.com/api/bdd/#method_respondto)

---

- [satisfy|satisfies( func, [message] )](http://chaijs.com/api/bdd/#method_satisfy)

---

- [closeTo|approximately( expected, delta, [message] )](http://chaijs.com/api/bdd/#method_closeto)

---

- [members( subset, [message] )](http://chaijs.com/api/bdd/#method_members)

---

- [oneOf( list, [message] )](http://chaijs.com/api/bdd/#method_oneof)

---

- [change( object, key, [message] )](http://chaijs.com/api/bdd/#method_change)
- [increase( object, key, [message] )](http://chaijs.com/api/bdd/#method_increase)
- [decrease( object, key, [message] )](http://chaijs.com/api/bdd/#method_decrease)

---

- [extensible](http://chaijs.com/api/bdd/#method_extensible)
- [sealed](http://chaijs.com/api/bdd/#method_sealed)
- [frozen](http://chaijs.com/api/bdd/#method_frozen)

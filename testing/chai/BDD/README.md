该 fiddle 用于演示 [BDD](http://chaijs.com/api/bdd/) 风格断言

```sh
$ npm install
$ npm test
```

---

![BDD 断言类型](https://raw.githubusercontent.com/pwnn/img/master/chai-BDD-assertion-types.png)

---

链式调用语法糖（noop），通过 `chai.Assertion.addProperty` 添加：

> to , be , been , is , that , which , and , has , have , with , at , of , same

---

内置 flags：

- [not](http://chaijs.com/api/bdd/#method_not): 开启 `negate` flag（全局通用）
- [deep](http://chaijs.com/api/bdd/#method_deep): 开启 `deep` flag
- [any](http://chaijs.com/api/bdd/#method_any): 开启 `any` flag；关闭 `all` flag
- [all](http://chaijs.com/api/bdd/#method_all): 开启 `all` flag；关闭 `any` flag

---

- [a( type , [message] )](http://chaijs.com/api/bdd/#method_a)
- [an( type , [message] )](http://chaijs.com/api/bdd/#method_a)

> - 判断依据：Object.prototype.toString
> - 类型：chainableMethod（chainingBehavior 为 noop）

---

- [include( value , [message] )](http://chaijs.com/api/bdd/#method_include)
- [contain( value , [message] )](http://chaijs.com/api/bdd/#method_include)

> 类型：chainableMethod（chainingBehavior 设置 contains flag）

---

- [ok](http://chaijs.com/api/bdd/#method_ok)
- [true](http://chaijs.com/api/bdd/#method_true)
- [false](http://chaijs.com/api/bdd/#method_false)

> 类型：property

---

- [null](http://chaijs.com/api/bdd/#method_null)
- [undefined](http://chaijs.com/api/bdd/#method_undefined)
- [exist](http://chaijs.com/api/bdd/#method_exist)
- [NaN](http://chaijs.com/api/bdd/#method_nan)

> 类型：property

---

- [empty](http://chaijs.com/api/bdd/#method_empty)

> 类型：property

---

- [arguments](http://chaijs.com/api/bdd/#method_arguments)

> 类型：property

---

- [equal( value , [message] )](http://chaijs.com/api/bdd/#method_equal)
- [eql( value , [message] )](http://chaijs.com/api/bdd/#method_eql)

> - 类型：method
> - 相关 flag：deep

---

- [gt|greaterThan|above( value , [message] )](http://chaijs.com/api/bdd/#method_above)
- [lt|lessThan|below( value , [message] )](http://chaijs.com/api/bdd/#method_below)
- [gte|least( value , [message] )](http://chaijs.com/api/bdd/#method_least)
- [lte|most( value , [message] )](http://chaijs.com/api/bdd/#method_most)
- [within( min , max , [message] )](http://chaijs.com/api/bdd/#method_within)

> - 相关 flag：doLength
> - 类型：method

---

- [instanceof|instanceOf( constructor , [message] )](http://chaijs.com/api/bdd/#method_instanceof)

> 类型：method

---

- [property( key , [value] , [message] )](http://chaijs.com/api/bdd/#method_property)
- [ownProperty( key , [message] )](http://chaijs.com/api/bdd/#method_ownproperty)
- [ownPropertyDescriptor( key , [descriptor] , [message] )](http://chaijs.com/api/bdd/#method_ownpropertydescriptor)

> - 相关 flag：deep
> - 类型：method

---

- [length( value , [message] )](http://chaijs.com/api/bdd/#method_length)

> 类型：chainableMethod（chainingBehavior 设置 doLength flag）

- [lengthOf( value , [message] )](http://chaijs.com/api/bdd/#method_lengthof)

> 类型：method

---

- [match|matches( regex , [message] )](http://chaijs.com/api/bdd/#method_match)
- [string( substring , [message] )](http://chaijs.com/api/bdd/#method_string)

> 类型：method

---

- [key|keys( [key] , [key]... )](http://chaijs.com/api/bdd/#method_keys)

> - 相关 flag：any|all|contain，其中 any 及 all 互斥（默认使用 all）
> - 类型：method

---

- [throw|throws|Throw( ... )](http://chaijs.com/api/bdd/#method_throw)

> 类型：method

---

- [respondTo( method , [message] )](http://chaijs.com/api/bdd/#method_respondto)

> - 相关 flag：itself
> - 类型：method

---

- [satisfy|satisfies( func , [message] )](http://chaijs.com/api/bdd/#method_satisfy)

> 类型：method

---

- [closeTo|approximately( expected , delta , [message] )](http://chaijs.com/api/bdd/#method_closeto)

> 类型：method

---

- [members( subset , [message] )](http://chaijs.com/api/bdd/#method_members)

> - 相关 flag：include , deep
> - 类型：method

---

- [oneOf( list , [message] )](http://chaijs.com/api/bdd/#method_oneof)

> 类型：method

---

- [change( object , key , [message] )](http://chaijs.com/api/bdd/#method_change)
- [increase( object , key , [message] )](http://chaijs.com/api/bdd/#method_increase)
- [decrease( object , key , [message] )](http://chaijs.com/api/bdd/#method_decrease)

> 类型：chainableMethod（chainingBehavior 为 noop）

---

- [extensible](http://chaijs.com/api/bdd/#method_extensible)
- [sealed](http://chaijs.com/api/bdd/#method_sealed)
- [frozen](http://chaijs.com/api/bdd/#method_frozen)

> 类型：property

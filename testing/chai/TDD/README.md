该 fiddle 用于演示 [TDD](http://chaijs.com/api/assert/) 风格断言

```sh
$ npm install
$ npm test
```

---

- [assert(expression, [message])](http://chaijs.com/api/assert/#method_assert)
- [assert.fail(actual, expected, [message], [operator])](http://chaijs.com/api/assert/#method_fail)

---

- [assert.isOk(expression, [message])](http://chaijs.com/api/assert/#method_isok)
- [assert.isNotOk(expression, [message])](http://chaijs.com/api/assert/#method_isnotok)
- [assert.isTrue(expression, [message])](http://chaijs.com/api/assert/#method_istrue)
- [assert.isNotTrue(expression, [message])](http://chaijs.com/api/assert/#method_isnottrue)
- [assert.isFalse(expression, [message])](http://chaijs.com/api/assert/#method_isfalse)
- [assert.isNotFalse(expression, [message])](http://chaijs.com/api/assert/#method_isnotfalse)

---

- [assert.equal(actual, expected, [message])](http://chaijs.com/api/assert/#method_equal)
- [assert.notEqual(actual, expected, [message])](http://chaijs.com/api/assert/#method_notequal)
- [assert.strictEqual(actual, expected, [message])](http://chaijs.com/api/assert/#method_strictequal)
- [assert.notStrictEqual(actual, expected, [message])](http://chaijs.com/api/assert/#method_notstrictequal)
- [assert.deepEqual(actual, expected, [message])](http://chaijs.com/api/assert/#method_deepequal)
- [assert.notDeepEqual(actual, expected, [message])](http://chaijs.com/api/assert/#method_notdeepequal)

---

- [assert.isAbove(valueToCheck, valueToBeAbove, [message])](http://chaijs.com/api/assert/#method_isabove)
- [assert.isBelow(valueToCheck, valueToBeBelow, [message])](http://chaijs.com/api/assert/#method_isbelow)
- [assert.isAtLeast(valueToCheck, valueToBeAtLeast, [message])](http://chaijs.com/api/assert/#method_isatleast)
- [assert.isAtMost(valueToCheck, valueToBeAtMost, [message])](http://chaijs.com/api/assert/#method_isatmost)

---

- [assert.isNull(expression, [message])](http://chaijs.com/api/assert/#method_isnull)
- [assert.isNotNull(expression, [message])](http://chaijs.com/api/assert/#method_isnotnull)
- [assert.isUndefined(expression, [message])](http://chaijs.com/api/assert/#method_isundefined)
- [assert.isDefined(expression, [message])](http://chaijs.com/api/assert/#method_isdefined)
- [assert.isNumber(expression, [message])](http://chaijs.com/api/assert/#method_isnumber)
- [assert.isNotNumber(expression, [message])](http://chaijs.com/api/assert/#method_isnotnumber)
- [assert.isNaN(expression, [message])](http://chaijs.com/api/assert/#method_isnan)
- [assert.isNotNaN(expression, [message])](http://chaijs.com/api/assert/#method_isnotnan)
- [assert.isString(expression, [message])](http://chaijs.com/api/assert/#method_isstring)
- [assert.isNotString(expression, [message])](http://chaijs.com/api/assert/#method_isnotstring)
- [assert.isBoolean(expression, [message])](http://chaijs.com/api/assert/#method_isboolean)
- [assert.isNotBoolean(expression, [message])](http://chaijs.com/api/assert/#method_isnotboolean)
- [assert.isObject(expression, [message])](http://chaijs.com/api/assert/#method_isobject)
- [assert.isNotObject(expression, [message])](http://chaijs.com/api/assert/#method_isnotobject)
- [assert.isArray(expression, [message])](http://chaijs.com/api/assert/#method_isarray)
- [assert.isNotArray(expression, [message])](http://chaijs.com/api/assert/#method_isnotarray)
- [assert.isFunction(expression, [message])](http://chaijs.com/api/assert/#method_isfunction)
- [assert.isNotFunction(expression, [message])](http://chaijs.com/api/assert/#method_isnotfunction)

---

- [assert.typeOf(expression, typeName, [message])](http://chaijs.com/api/assert/#method_typeof)
- [assert.notTypeOf(expression, typeName, [message])](http://chaijs.com/api/assert/#method_nottypeof)
- [assert.instanceOf(object, constructor, [message])](http://chaijs.com/api/assert/#method_instanceof)
- [assert.notInstanceOf(object, constructor, [message])](http://chaijs.com/api/assert/#method_notinstanceof)

---

- [assert.include(haystack, needle, [message])](http://chaijs.com/api/assert/#method_include)
- [assert.notInclude(haystack, needle, [message])](http://chaijs.com/api/assert/#method_notinclude)
- [assert.oneOf(needle, haystack, [message])](http://chaijs.com/api/assert/#method_oneof)

---

- [assert.match(expression, regex, [message])](http://chaijs.com/api/assert/#method_match)
- [assert.notMatch(expression, regex, [message])](http://chaijs.com/api/assert/#method_notmatch)

---

- [assert.property(object, key, [message])](http://chaijs.com/api/assert/#method_property)
- [assert.notProperty(object, key, [message])](http://chaijs.com/api/assert/#method_notproperty)
- [assert.deepProperty(object, key, [message])](http://chaijs.com/api/assert/#method_deepproperty)
- [assert.notDeepProperty(object, key, [message])](http://chaijs.com/api/assert/#method_notdeepproperty)
- [assert.propertyVal(object, key, value, [message])](http://chaijs.com/api/assert/#method_propertyval)
- [assert.propertyNotVal(object, key, value, [message])](http://chaijs.com/api/assert/#method_propertynotval)
- [assert.deepPropertyVal(object, key, value, [message])](http://chaijs.com/api/assert/#method_deeppropertyval)
- [assert.deepPropertyNotVal(object, key, value, [message])](http://chaijs.com/api/assert/#method_deeppropertynotval)

---

- [assert.lengthOf(value, length, [message])](http://chaijs.com/api/assert/#method_lengthof)

---

- [assert.throws(func, [constructor|string|regex], [string|regex], [message])](http://chaijs.com/api/assert/#method_throws)
- [assert.doesNotThrow(func, [constructor|string|regex], [string|regex], [message])](http://chaijs.com/api/assert/#method_doesnotthrow)

---

- [assert.operator(operand1, operator, operand2, [message])](http://chaijs.com/api/assert/#method_operator)

---

- [assert.closeTo(actual, expected, delta, [message])](http://chaijs.com/api/assert/#method_closeto)
- [assert.approximately(actual, expected, delta, [message])](http://chaijs.com/api/assert/#method_approximately)

---

- [assert.sameMembers(set1, set2, [message])](http://chaijs.com/api/assert/#method_samemembers)
- [assert.sameDeepMembers(set1, set2, [message])](http://chaijs.com/api/assert/#method_samedeepmembers)
- [assert.includeMembers(superset, subset, [message])](http://chaijs.com/api/assert/#method_includemembers)
- [assert.includeDeepMembers(superset, subset, [message])](http://chaijs.com/api/assert/#method_includedeepmembers)

---

- [assert.changes(func, object, key)](http://chaijs.com/api/assert/#method_changes)
- [assert.increases(func, object, key)](http://chaijs.com/api/assert/#method_increases)
- [assert.doesNotIncrease(func, object, key)](http://chaijs.com/api/assert/#method_doesnotincrease)
- [assert.decreases(func, object, key)](http://chaijs.com/api/assert/#method_decreases)
- [assert.doesNotDecrease(func, object, key)](http://chaijs.com/api/assert/#method_doesnotdecrease)

---

- [assert.ifError(expression)](http://chaijs.com/api/assert/#method_iferror)

---

- [assert.isExtensible(object)](http://chaijs.com/api/assert/#method_isextensible)
- [assert.isNotExtensible(object)](http://chaijs.com/api/assert/#method_isnotextensible)
- [assert.isSealed(object)](http://chaijs.com/api/assert/#method_issealed)
- [assert.isNotSealed(object)](http://chaijs.com/api/assert/#method_isnotsealed)
- [assert.isFrozen(object)](http://chaijs.com/api/assert/#method_isfrozen)
- [assert.isNotFrozen(object)](http://chaijs.com/api/assert/#method_isnotfrozen)

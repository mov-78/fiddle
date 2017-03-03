该 fiddle 用于演示 `lodash/collection` 模块

```sh
$ npm install
$ npm test
```

> Collection = Array + Object

---

- [size( collection )](https://lodash.com/docs#size)

---

- [each|forEach( collection , iteratee )](https://lodash.com/docs#forEach)
- [eachRight|forEachRight( collection , iteratee )](https://lodash.com/docs#forEachRight)

> 可以通过 `return false` 来提前终止迭代

---

- [map( collection , iteratee )](https://lodash.com/docs#map)

> 与 mapValues 类似，区别为：
> - mapValues：返回对象 – 保持对象结构
> - map：返回数组 – 忽略对象结构

---

- [filter( collection , predicate )](https://lodash.com/docs#filter)
- [reject( collection , predicate )](https://lodash.com/docs#reject)

> 与 pickBy|omitBy 类似，区别为：
> - pickBy|omitBy：返回对象 – 保持对象结构
> - filter：返回数组 – 忽略对象结构

---

- [reduce( collection , iteratee , [accumulator] )](https://lodash.com/docs#reduce)
- [reduceRight( collection , iteratee , [accumulator] )](https://lodash.com/docs#reduceRight)

---

- [find( collection , predicate )](https://lodash.com/docs#find)
- [findLast( collection , predicate )](https://lodash.com/docs#findLast)

> 类似方法：
> - findKey|findLastKey
> - findIndex|findLastIndex

---

- [some( collection , predicate )](https://lodash.com/docs#some)
- [every( collection , predicate )](https://lodash.com/docs#every)

---

- [countBy( collection , iteratee )](https://lodash.com/docs#countBy)
- [keyBy( collection , iteratee )](https://lodash.com/docs#keyBy)
- [groupBy( collection , iteratee )](https://lodash.com/docs#groupBy)

---

- [partition( collection , predicate )](https://lodash.com/docs#partition)

---

- [sortBy( collection , iteratees )](https://lodash.com/docs#sortBy)
- [orderBy( collection , iteratees , [orders=desc|asc] )](https://lodash.com/docs#orderBy)

---

- [includes( collection , value , [fromIndex=0] )](https://lodash.com/docs#includes)

---

- [sample( collection )](https://lodash.com/docs#sample)
- [shuffle( collection )](https://lodash.com/docs#shuffle)

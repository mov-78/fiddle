```ts
class Collection<K, V> extends ValueObject
```

```ts
Collection<I>(collection: I): I
Collection<T>(collection: Iterable<T>): Collection.Indexed<T>
Collection<V>(obj: {[key: string]: V}): Collection.Keyed<string, V>
```

---

- [get](https://facebook.github.io/immutable-js/docs/#/Collection/get)
- [has](https://facebook.github.io/immutable-js/docs/#/Collection/has)
- [includes](https://facebook.github.io/immutable-js/docs/#/Collection/includes)
- [first](https://facebook.github.io/immutable-js/docs/#/Collection/first)
- [last](https://facebook.github.io/immutable-js/docs/#/Collection/last)

```ts
get(key: K): V | undefined
get<NSV>(key: K, notSetValue: NSV): V | NSV
```

```ts
has(key: K): boolean
includes(value: V): boolean
```

> `includes` 别名：`contains`

```ts
first(): V | undefined
last(): V | undefined
```

---

- [getIn](https://facebook.github.io/immutable-js/docs/#/Collection/getIn)
- [hasIn](https://facebook.github.io/immutable-js/docs/#/Collection/hasIn)

```ts
getIn(searchKeyPath: Iterable<any>, notSetValue?: any): any
```

```ts
hasIn(searchKeyPath: Iterable<any>): boolean
```

---

- [update](https://facebook.github.io/immutable-js/docs/#/Collection/update)

```ts
update<R>(updater: (value: this) => R): R
```

---

- [toObject](https://facebook.github.io/immutable-js/docs/#/Collection/toObject)
- [toArray](https://facebook.github.io/immutable-js/docs/#/Collection/toArray)
- [toJS](https://facebook.github.io/immutable-js/docs/#/Collection/toJS)
- [toJSON](https://facebook.github.io/immutable-js/docs/#/Collection/toJSON)

```ts
toObject(): {[key: string]: V}
toArray(): Array<V> | Array<[K, V]>
```

```ts
toJS(): Array<any> | {[key: string]: any}
```

```ts
toJSON(): Array<V> | {[key: string]: V}
```

---

- [toMap](https://facebook.github.io/immutable-js/docs/#/Collection/toMap)
- [toOrderedMap](https://facebook.github.io/immutable-js/docs/#/Collection/toOrderedMap)
- [toSet](https://facebook.github.io/immutable-js/docs/#/Collection/toSet)
- [toOrderedSet](https://facebook.github.io/immutable-js/docs/#/Collection/toOrderedSet)
- [toList](https://facebook.github.io/immutable-js/docs/#/Collection/toList)
- [toStack](https://facebook.github.io/immutable-js/docs/#/Collection/toStack)

```ts
toMap(): Map<K, V>
toOrderedMap(): OrderedMap<K, V>
toSet(): Set<V>
toOrderedSet(): OrderedSet<V>
toList(): List<V>
toStack(): Stack<V>
```

- [toSeq](https://facebook.github.io/immutable-js/docs/#/Collection/toSeq)
- [toKeyedSeq](https://facebook.github.io/immutable-js/docs/#/Collection/toKeyedSeq)
- [toIndexedSeq](https://facebook.github.io/immutable-js/docs/#/Collection/toIndexedSeq)
- [toSetSeq](https://facebook.github.io/immutable-js/docs/#/Collection/toSetSeq)

```ts
toSeq(): Seq<K, V>
toKeyedSeq(): Seq.Keyed<K, V>
toIndexedSeq(): Seq.Indexed<V>
toSetSeq(): Seq.Set<V>
```

---

- [keys](https://facebook.github.io/immutable-js/docs/#/Collection/keys)
- [values](https://facebook.github.io/immutable-js/docs/#/Collection/values)
- [entries](https://facebook.github.io/immutable-js/docs/#/Collection/entries)
- [keySeq](https://facebook.github.io/immutable-js/docs/#/Collection/keySeq)
- [valueSeq](https://facebook.github.io/immutable-js/docs/#/Collection/valueSeq)
- [entrySeq](https://facebook.github.io/immutable-js/docs/#/Collection/entrySeq)

```ts
keys(): IterableIterator<K>
values(): IterableIterator<V>
entries(): IterableIterator<[K, V]>
```

```ts
keySeq(): Seq.Indexed<K>
valueSeq(): Seq.Indexed<V>
entrySeq(): Seq.Indexed<[K, V]>
```

---

- [map](https://facebook.github.io/immutable-js/docs/#/Collection/map)
- [filter](https://facebook.github.io/immutable-js/docs/#/Collection/filter)
- [filterNot](https://facebook.github.io/immutable-js/docs/#/Collection/filterNot)
- [reverse](https://facebook.github.io/immutable-js/docs/#/Collection/reverse)
- [sort](https://facebook.github.io/immutable-js/docs/#/Collection/sort)
- [sortBy](https://facebook.github.io/immutable-js/docs/#/Collection/sortBy)
- [groupBy](https://facebook.github.io/immutable-js/docs/#/Collection/groupBy)

```ts
map<M>(
mapper: (value: V, key: K, iter: this) => M,
context?: any
): Collection<K, M>
```

```ts
filter(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any
): this

filterNot(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any
): this
```

```ts
reverse(): this
```

```ts
sort(comparator?: (valueA: V, valueB: V) => number): this

sortBy<C>(
comparatorValueMapper: (value: V, key: K, iter: this) => C,
comparator?: (valueA: C, valueB: C) => number
): this
```

> 对无序容器排序，将返回对应的有序容器（如：`Set` → `OrderedSet`）

---

- [forEach](https://facebook.github.io/immutable-js/docs/#/Collection/forEach)

```ts
forEach(
sideEffect: (value: V, key: K, iter: this) => any,
context?: any
): number
```

> `sideEffect` 可通过返回 `false` 来提前终止迭代

---

- [slice](https://facebook.github.io/immutable-js/docs/#/Collection/slice)
- [rest](https://facebook.github.io/immutable-js/docs/#/Collection/rest)
- [butLast](https://facebook.github.io/immutable-js/docs/#/Collection/butLast)
- [skip](https://facebook.github.io/immutable-js/docs/#/Collection/skip)
- [skipLast](https://facebook.github.io/immutable-js/docs/#/Collection/skipLast)
- [skipWhile](https://facebook.github.io/immutable-js/docs/#/Collection/skipWhile)
- [skipUntil](https://facebook.github.io/immutable-js/docs/#/Collection/skipUntil)
- [take](https://facebook.github.io/immutable-js/docs/#/Collection/take)
- [takeLast](https://facebook.github.io/immutable-js/docs/#/Collection/takeLast)
- [takeWhile](https://facebook.github.io/immutable-js/docs/#/Collection/takeWhile)
- [takeUntil](https://facebook.github.io/immutable-js/docs/#/Collection/takeUntil)

```ts
slice(begin?: number, end?: number): this
```

```ts
rest(): this
butLast(): this
```

```ts
skip(amount: number): this
skipLast(amount: number): this

skipWhile(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any
): this

skipUntil(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any
): this
```

```ts
take(amount: number): this
takeLast(amount: number): this

takeWhile(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any
): this

takeUntil(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any
): this
```

---

- [concat](https://facebook.github.io/immutable-js/docs/#/Collection/concat)
- [flatten](https://facebook.github.io/immutable-js/docs/#/Collection/flatten)
- [flatMap](https://facebook.github.io/immutable-js/docs/#/Collection/flatMap)

```ts
concat(...valuesOrCollections: Array<any>): Collection<any, any>
```

```ts
flatten(depth?: number): Collection<any, any>
flatten(shallow?: boolean): Collection<any, any>
```

> `flatten` 仅处理 `Immutable.Collection`，不处理原生 `Object` 及 `Array`

```ts
flatMap<M>(
mapper: (value: V, key: K, iter: this) => Iterable<M>,
context?: any
): Collection<K, M>

flatMap<KM, VM>(
mapper: (value: V, key: K, iter: this) => Iterable<[KM, VM]>,
context?: any
): Collection<KM, VM>
```

---

- [reduce](https://facebook.github.io/immutable-js/docs/#/Collection/reduce)
- [reduceRight](https://facebook.github.io/immutable-js/docs/#/Collection/reduceRight)
- [every](https://facebook.github.io/immutable-js/docs/#/Collection/every)
- [some](https://facebook.github.io/immutable-js/docs/#/Collection/some)
- [join](https://facebook.github.io/immutable-js/docs/#/Collection/join)
- [isEmpty](https://facebook.github.io/immutable-js/docs/#/Collection/isEmpty)
- [count](https://facebook.github.io/immutable-js/docs/#/Collection/count)
- [countBy](https://facebook.github.io/immutable-js/docs/#/Collection/countBy)

```ts
reduce<R>(
reducer: (reduction: R, value: V, key: K, iter: this) => R,
initialReduction: R,
context?: any
): R

reduce<R>(reducer: (reduction: V | R, value: V, key: K, iter: this) => R): R

reduceRight<R>(
reducer: (reduction: R, value: V, key: K, iter: this) => R,
initialReduction: R,
context?: any
): R

reduceRight<R>(reducer: (reduction: V | R, value: V, key: K, iter: this) => R): R
```

```ts
every(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any
): boolean

some(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any
): boolean
```

```ts
join(separator?: string): string
```

```ts
isEmpty(): boolean
```

```ts
count(): number

count(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any
): number

countBy<G>(
grouper: (value: V, key: K, iter: this) => G,
context?: any
): Map<G, number>
```

---

- [find](https://facebook.github.io/immutable-js/docs/#/Collection/find)
- [findLast](https://facebook.github.io/immutable-js/docs/#/Collection/findLast)
- [findKey](https://facebook.github.io/immutable-js/docs/#/Collection/findKey)
- [findLastKey](https://facebook.github.io/immutable-js/docs/#/Collection/findLastKey)
- [findEntry](https://facebook.github.io/immutable-js/docs/#/Collection/findEntry)
- [findLastEntry](https://facebook.github.io/immutable-js/docs/#/Collection/findLastEntry)
- [keyOf](https://facebook.github.io/immutable-js/docs/#/Collection/keyOf)
- [lastKeyOf](https://facebook.github.io/immutable-js/docs/#/Collection/lastKeyOf)
- [max](https://facebook.github.io/immutable-js/docs/#/Collection/max)
- [maxBy](https://facebook.github.io/immutable-js/docs/#/Collection/maxBy)
- [min](https://facebook.github.io/immutable-js/docs/#/Collection/min)
- [minBy](https://facebook.github.io/immutable-js/docs/#/Collection/minBy)

```ts
find(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any,
notSetValue?: V
): V | undefined

findLast(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any,
notSetValue?: V
): V | undefined
```

```ts
findKey(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any
): K | undefined

findLastKey(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any
): K | undefined
```

```ts
findEntry(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any,
notSetValue?: V
): [K, V] | undefined

findLastEntry(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any,
notSetValue?: V
): [K, V] | undefined
```

```ts
keyOf(searchValue: V): K | undefined
lastKeyOf(searchValue: V): K | undefined
```

```ts
max(comparator?: (valueA: V, valueB: V) => number): V | undefined

maxBy<C>(
comparatorValueMapper: (value: V, key: K, iter: this) => C,
comparator?: (valueA: C, valueB: C) => number
): V | undefined

min(comparator?: (valueA: V, valueB: V) => number): V | undefined

minBy<C>(
comparatorValueMapper: (value: V, key: K, iter: this) => C,
comparator?: (valueA: C, valueB: C) => number
): V | undefined
```

---

- [isSubset](https://facebook.github.io/immutable-js/docs/#/Collection/isSubset)
- [isSuperset](https://facebook.github.io/immutable-js/docs/#/Collection/isSuperset)

```ts
isSubset(iter: Iterable<V>): boolean
isSuperset(iter: Iterable<V>): boolean
```

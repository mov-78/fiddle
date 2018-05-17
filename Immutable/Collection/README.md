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

```ts
get(key: K): V | undefined
get<NSV>(key: K, notSetValue: NSV): V | NSV
```

- [has](https://facebook.github.io/immutable-js/docs/#/Collection/has)
- [includes](https://facebook.github.io/immutable-js/docs/#/Collection/includes)

```ts
has(key: K): boolean
includes(value: V): boolean
```

> `includes` 别名：`contains`

- [first](https://facebook.github.io/immutable-js/docs/#/Collection/first)
- [last](https://facebook.github.io/immutable-js/docs/#/Collection/last)

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

```ts
toObject(): {[key: string]: V}
toArray(): Array<V> | Array<[K, V]>
```

- [toJS](https://facebook.github.io/immutable-js/docs/#/Collection/toJS)

```ts
toJS(): Array<any> | {[key: string]: any}
```

- [toJSON](https://facebook.github.io/immutable-js/docs/#/Collection/toJSON)

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

```ts
keys(): IterableIterator<K>
values(): IterableIterator<V>
entries(): IterableIterator<[K, V]>
```

- [keySeq](https://facebook.github.io/immutable-js/docs/#/Collection/keySeq)
- [valueSeq](https://facebook.github.io/immutable-js/docs/#/Collection/valueSeq)
- [entrySeq](https://facebook.github.io/immutable-js/docs/#/Collection/entrySeq)

```ts
keySeq(): Seq.Indexed<K>
valueSeq(): Seq.Indexed<V>
entrySeq(): Seq.Indexed<[K, V]>
```

---

- [map](https://facebook.github.io/immutable-js/docs/#/Collection/map)

```ts
map<M>(
    mapper: (value: V, key: K, iter: this) => M,
    context?: any
): Collection<K, M>
```

- [filter](https://facebook.github.io/immutable-js/docs/#/Collection/filter)
- [filterNot](https://facebook.github.io/immutable-js/docs/#/Collection/filterNot)

```ts
filter<F>(
    predicate: (value: V, key: K, iter: this) => boolean,
    context?: any
): Collection<K, F>

filter(
    predicate: (value: V, key: K, iter: this) => any,
    context?: any
): this

filterNot(
    predicate: (value: V, key: K, iter: this) => boolean,
    context?: any
): this
```

- [reverse](https://facebook.github.io/immutable-js/docs/#/Collection/reverse)

```ts
reverse(): this
```

- [sort](https://facebook.github.io/immutable-js/docs/#/Collection/sort)
- [sortBy](https://facebook.github.io/immutable-js/docs/#/Collection/sortBy)

```ts
sort(
    comparator?: (valueA: V, valueB: V) => number
): this

sortBy<C>(
    comparatorValueMapper: (value: V, key: K, iter: this) => C,
    comparator?: (valueA: C, valueB: C) => number
): this
```

> 对无序容器排序，将返回对应的有序容器（如：`Set` → `OrderedSet`）

- [groupBy](https://facebook.github.io/immutable-js/docs/#/Collection/groupBy)

```ts
groupBy<G>(
    grouper: (value: V, key: K, iter: this) => G,
    context?: any
): Seq.Keyed<G, Collection<K, V>>
```

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

```ts
slice(begin?: number, end?: number): this
```

- [rest](https://facebook.github.io/immutable-js/docs/#/Collection/rest)
- [butLast](https://facebook.github.io/immutable-js/docs/#/Collection/butLast)

```ts
rest(): this
butLast(): this
```

- [skip](https://facebook.github.io/immutable-js/docs/#/Collection/skip)
- [skipLast](https://facebook.github.io/immutable-js/docs/#/Collection/skipLast)
- [skipWhile](https://facebook.github.io/immutable-js/docs/#/Collection/skipWhile)
- [skipUntil](https://facebook.github.io/immutable-js/docs/#/Collection/skipUntil)

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

- [take](https://facebook.github.io/immutable-js/docs/#/Collection/take)
- [takeLast](https://facebook.github.io/immutable-js/docs/#/Collection/takeLast)
- [takeWhile](https://facebook.github.io/immutable-js/docs/#/Collection/takeWhile)
- [takeUntil](https://facebook.github.io/immutable-js/docs/#/Collection/takeUntil)

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

```ts
concat(...valuesOrCollections: Array<any>): Collection<any, any>
```

- [flatten](https://facebook.github.io/immutable-js/docs/#/Collection/flatten)

```ts
flatten(depth?: number): Collection<any, any>
flatten(shallow?: boolean): Collection<any, any>
```

> `flatten` 仅处理 `Immutable.Collection`，不处理原生 `Object` 及 `Array`

- [flatMap](https://facebook.github.io/immutable-js/docs/#/Collection/flatMap)

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

```ts
reduce<R>(
    reducer: (reduction: R, value: V, key: K, iter: this) => R,
    initialReduction: R,
    context?: any
): R

reduce<R>(
    reducer: (reduction: V | R, value: V, key: K, iter: this) => R
): R

reduceRight<R>(
    reducer: (reduction: R, value: V, key: K, iter: this) => R,
    initialReduction: R,
    context?: any
): R

reduceRight<R>(
    reducer: (reduction: V | R, value: V, key: K, iter: this) => R
): R
```

- [every](https://facebook.github.io/immutable-js/docs/#/Collection/every)
- [some](https://facebook.github.io/immutable-js/docs/#/Collection/some)

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

- [join](https://facebook.github.io/immutable-js/docs/#/Collection/join)

```ts
join(separator?: string): string
```

- [isEmpty](https://facebook.github.io/immutable-js/docs/#/Collection/isEmpty)

```ts
isEmpty(): boolean
```

- [count](https://facebook.github.io/immutable-js/docs/#/Collection/count)
- [countBy](https://facebook.github.io/immutable-js/docs/#/Collection/countBy)

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

- [findKey](https://facebook.github.io/immutable-js/docs/#/Collection/findKey)
- [findLastKey](https://facebook.github.io/immutable-js/docs/#/Collection/findLastKey)

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

- [findEntry](https://facebook.github.io/immutable-js/docs/#/Collection/findEntry)
- [findLastEntry](https://facebook.github.io/immutable-js/docs/#/Collection/findLastEntry)

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

- [keyOf](https://facebook.github.io/immutable-js/docs/#/Collection/keyOf)
- [lastKeyOf](https://facebook.github.io/immutable-js/docs/#/Collection/lastKeyOf)

```ts
keyOf(searchValue: V): K | undefined
lastKeyOf(searchValue: V): K | undefined
```

- [max](https://facebook.github.io/immutable-js/docs/#/Collection/max)
- [maxBy](https://facebook.github.io/immutable-js/docs/#/Collection/maxBy)
- [min](https://facebook.github.io/immutable-js/docs/#/Collection/min)
- [minBy](https://facebook.github.io/immutable-js/docs/#/Collection/minBy)

```ts
max(
    comparator?: (valueA: V, valueB: V) => number
): V | undefined

maxBy<C>(
    comparatorValueMapper: (value: V, key: K, iter: this) => C,
    comparator?: (valueA: C, valueB: C) => number
): V | undefined

min(
    comparator?: (valueA: V, valueB: V) => number
): V | undefined

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

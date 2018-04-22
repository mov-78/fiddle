```ts
class Collection.Indexed<T> extends Collection<number, T>
```

```ts
Collection.Indexed<T>(collection: Iterable<T>): Collection.Indexed<T>
```

---

- [get](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/get)

```ts
get(index: number): T | undefined
get<NSV>(index: number, notSetValue: NSV): T | NSV
```

---

- [indexOf](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/indexOf)
- [lastIndexOf](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/lastIndexOf)
- [findIndex](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/findIndex)
- [findLastIndex](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/findLastIndex)

```ts
indexOf(searchValue: T): number
lastIndexOf(searchValue: T): number
```

```ts
findIndex(
predicate: (value: T, index: number, iter: this) => boolean,
context?: any
): number

findLastIndex(
predicate: (value: T, index: number, iter: this) => boolean,
context?: any
): number
```

---

- [splice](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/splice)
- [interpose](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/interpose)
- [interleave](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/interleave)
- [zip](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/zip)
- [zipAll](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/zipAll)
- [zipWith](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/zipWith)

```ts
splice(index: number, removeNum: number, ...values: Array<T>): this
```

```ts
interpose(separator: T): this
interleave(...collections: Array<Collection<any, T>>): this
```

```ts
zip<U>(other: Collection<any, U>): Collection.Indexed<[T, U]>
zip(...collections: Array<Collection<any, any>>): Collection.Indexed<any>

zipAll<U>(other: Collection<any, U>): Collection.Indexed<[T, U]>
zipAll(...collections: Array<Collection<any, any>>): Collection.Indexed<any>

zipWith<U, Z>(
zipper: (value: T, otherValue: U) => Z,
otherCollection: Collection<any, U>
): Collection.Indexed<Z>

zipWith<Z>(
zipper: (...any: Array<any>) => Z,
...collections: Array<Collection<any, any>>
): Collection.Indexed<Z>
```

---

- [concat](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/concat)
- [map](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/map)
- [flatMap](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/flatMap)
- [filter](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/filter)
- [@@iterator](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/%5BSymbol.iterator%5D)

```ts
concat<C>(
...valuesOrCollections: Array<Iterable<C> | C>
): Collection.Indexed<T | C>
```

```ts
map<M>(
mapper: (value: T, key: number, iter: this) => M,
context?: any
): Collection.Indexed<M>
```

```ts
flatMap<M>(
mapper: (value: T, key: number, iter: this) => Iterable<M>,
context?: any
): Collection.Indexed<M>
```

```ts
filter(
predicate: (value: T, index: number, iter: this) => boolean,
context?: any
): this
```

```ts
[Symbol.iterator](): IterableIterator<T>
```

---

- [toJS](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/toJS)
- [toJSON](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/toJSON)
- [toArray](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/toArray)

```ts
toJS(): Array<any>
toJSON(): Array<T>
toArray(): Array<T>
```

---

- [toSeq](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/toSeq)
- [fromEntrySeq](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/fromEntrySeq)

```ts
toSeq(): Seq.Indexed<T>
fromEntrySeq(): Seq.Keyed<any, any>
```

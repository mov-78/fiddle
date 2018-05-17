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

- [indexOf](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/indexOf) ☆
- [lastIndexOf](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/lastIndexOf) ☆

```ts
indexOf(searchValue: T): number
lastIndexOf(searchValue: T): number
```

- [findIndex](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/findIndex) ☆
- [findLastIndex](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/findLastIndex) ☆

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

- [splice](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/splice) ☆

```ts
splice(index: number, removeNum: number, ...values: Array<T>): this
```

- [interpose](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/interpose) ☆
- [interleave](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/interleave) ☆

```ts
interpose(separator: T): this
interleave(...collections: Array<Collection<any, T>>): this
```

- [zip](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/zip) ☆
- [zipAll](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/zipAll) ☆
- [zipWith](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/zipWith) ☆

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

```ts
concat<C>(...valuesOrCollections: Array<Iterable<C> | C>): Collection.Indexed<T | C>
```

- [map](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/map)

```ts
map<M>(
    mapper: (value: T, key: number, iter: this) => M,
    context?: any
): Collection.Indexed<M>
```

- [flatMap](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/flatMap)

```ts
flatMap<M>(
    mapper: (value: T, key: number, iter: this) => Iterable<M>,
    context?: any
): Collection.Indexed<M>
```

- [filter](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/filter)

```ts
filter<F>(
    predicate: (value: T, index: number, iter: this) => boolean,
    context?: any
): Collection.Indexed<F>

filter(
    predicate: (value: T, index: number, iter: this) => any,
    context?: any
): this
```

- [@@iterator](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/%5BSymbol.iterator%5D)

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
- [fromEntrySeq](https://facebook.github.io/immutable-js/docs/#/Collection.Indexed/fromEntrySeq) ☆

```ts
toSeq(): Seq.Indexed<T>
fromEntrySeq(): Seq.Keyed<any, any>
```

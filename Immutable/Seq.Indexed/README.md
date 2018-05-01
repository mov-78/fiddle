```ts
class Seq.Indexed<T> extends Seq<number, T>, Collection.Indexed<T>
```

```ts
Seq.Indexed(): Seq.Indexed<any>
Seq.Indexed<T>(): Seq.Indexed<T>
Seq.Indexed<T>(collection: Iterable<T>): Seq.Indexed<T>
```

---

- [Seq.Indexed.of](https://facebook.github.io/immutable-js/docs/#/Seq.Indexed/of)

```ts
Seq.Indexed.of<T>(...values: Array<T>): Seq.Indexed<T>
```

---

- [toJS](https://facebook.github.io/immutable-js/docs/#/Seq.Indexed/toJS)
- [toJSON](https://facebook.github.io/immutable-js/docs/#/Seq.Indexed/toJSON)
- [toArray](https://facebook.github.io/immutable-js/docs/#/Seq.Indexed/toArray)
- [toSeq](https://facebook.github.io/immutable-js/docs/#/Seq.Indexed/toSeq)

```ts
toJS(): Array<any>
toJSON(): Array<T>
toArray(): Array<T>
```

```ts
toSeq(): this
```

---

- [concat](https://facebook.github.io/immutable-js/docs/#/Seq.Indexed/concat)
- [zip](https://facebook.github.io/immutable-js/docs/#/Seq.Indexed/zip)
- [zipAll](https://facebook.github.io/immutable-js/docs/#/Seq.Indexed/zipAll)
- [zipWith](https://facebook.github.io/immutable-js/docs/#/Seq.Indexed/zipWith)

```ts
concat<C>(...valuesOrCollections: Array<Iterable<C> | C>): Seq.Indexed<T | C>
```

```ts
zip<U>(other: Collection<any, U>): Seq.Indexed<[T, U]>
zip(...collections: Array<Collection<any, any>>): Seq.Indexed<any>
```

```ts
zipAll<U>(other: Collection<any, U>): Seq.Indexed<[T, U]>
zipAll(...collections: Array<Collection<any, any>>): Seq.Indexed<any>
```

```ts
zipWith<U, Z>(
zipper: (value: T, otherValue: U) => Z,
otherCollection: Collection<any, U>
): Seq.Indexed<Z>

zipWith<Z>(
zipper: (...any: Array<any>) => Z,
...collections: Array<Collection<any, any>>
): Seq.Indexed<Z>
```

---

- [map](https://facebook.github.io/immutable-js/docs/#/Seq.Indexed/map)
- [flatMap](https://facebook.github.io/immutable-js/docs/#/Seq.Indexed/flatMap)
- [filter](https://facebook.github.io/immutable-js/docs/#/Seq.Indexed/filter)

```ts
map<M>(
mapper: (value: T, key: number, iter: this) => M,
context?: any
): Seq.Indexed<M>
```

```ts
flatMap<M>(
mapper: (value: T, key: number, iter: this) => Iterable<M>,
context?: any
): Seq.Indexed<M>
```

```ts
filter<F>(
predicate: (value: T, index: number, iter: this) => boolean,
context?: any
): Seq.Indexed<F>

filter(
predicate: (value: T, index: number, iter: this) => any,
context?: any
): this
```

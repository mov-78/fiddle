```ts
class OrderedSet<T> extends Set<T>
```

```ts
OrderedSet(): OrderedSet<any>
OrderedSet<T>(): OrderedSet<T>
OrderedSet<T>(collection: Iterable<T>): OrderedSet<T>
```

---

- [OrderedSet.isOrderedSet](https://facebook.github.io/immutable-js/docs/#/OrderedSet/isOrderedSet)

```ts
OrderedSet.isOrderedSet(maybeOrderedSet: any): boolean
```

- [OrderedSet.of](https://facebook.github.io/immutable-js/docs/#/OrderedSet/of)

```ts
OrderedSet.of<T>(...values: Array<T>): OrderedSet<T>
```

- [OrderedSet.fromKeys](https://facebook.github.io/immutable-js/docs/#/OrderedSet/fromKeys)

```ts
OrderedSet.fromKeys<T>(iter: Collection<T, any>): OrderedSet<T>
OrderedSet.fromKeys(obj: {[key: string]: any}): OrderedSet<string>
```

---

- [size](https://facebook.github.io/immutable-js/docs/#/OrderedSet/size)

---

- [union](https://facebook.github.io/immutable-js/docs/#/OrderedSet/union)

```ts
union<C>(...collections: Array<Iterable<C>>): OrderedSet<T | C>
```

> - `union` 别名：`merge`
> - `union` 别名：`concat`

---

- [map](https://facebook.github.io/immutable-js/docs/#/OrderedSet/map)

```ts
map<M>(
    mapper: (value: T, key: T, iter: this) => M,
    context?: any
): OrderedSet<M>
```

- [flatMap](https://facebook.github.io/immutable-js/docs/#/OrderedSet/flatMap)

```ts
flatMap<M>(
    mapper: (value: T, key: T, iter: this) => Iterable<M>,
    context?: any
): OrderedSet<M>
```

- [filter](https://facebook.github.io/immutable-js/docs/#/OrderedSet/filter)

```ts
filter<F>(
    predicate: (value: T, key: T, iter: this) => boolean,
    context?: any
): OrderedSet<F>

filter(
    predicate: (value: T, key: T, iter: this) => any,
    context?: any
): this
```

- [zip](https://facebook.github.io/immutable-js/docs/#/OrderedSet/zip)
- [zipAll](https://facebook.github.io/immutable-js/docs/#/OrderedSet/zipAll)
- [zipWith](https://facebook.github.io/immutable-js/docs/#/OrderedSet/zipWith)

```ts
zip<U>(other: Collection<any, U>): OrderedSet<[T, U]>
zip(...collections: Array<Collection<any, any>>): OrderedSet<any>

zipAll<U>(other: Collection<any, U>): OrderedSet<[T, U]>
zipAll(...collections: Array<Collection<any, any>>): OrderedSet<any>

zipWith<U, Z>(
    zipper: (value: T, otherValue: U) => Z,
    otherCollection: Collection<any, U>
): OrderedSet<Z>

zipWith<Z>(
    zipper: (...any: Array<any>) => Z,
    ...collections: Array<Collection<any, any>>
): OrderedSet<Z>
```

```ts
class Stack<T> extends Collection.Indexed<T>
```

```ts
Stack(): Stack<any>
Stack<T>(): Stack<T>
Stack<T>(collection: Iterable<T>): Stack<T>
```

---

- [Stack.isStack](https://facebook.github.io/immutable-js/docs/#/Stack/isStack)

```ts
Stack.isStack(maybeStack: any): boolean
```

- [Stack.of](https://facebook.github.io/immutable-js/docs/#/Stack/of)

```ts
Stack.of<T>(...values: Array<T>): Stack<T>
```

---

- [size](https://facebook.github.io/immutable-js/docs/#/Stack/size) ☆

---

- [peek](https://facebook.github.io/immutable-js/docs/#/Stack/peek) ☆

```ts
peek(): T | undefined // 等价于 Stack#first
```

---

- [unshift](https://facebook.github.io/immutable-js/docs/#/Stack/unshift) ☆
- [unshiftAll](https://facebook.github.io/immutable-js/docs/#/Stack/unshiftAll) ☆
- [shift](https://facebook.github.io/immutable-js/docs/#/Stack/shift) ☆

```ts
unshift(...values: Array<T>): Stack<T>
unshiftAll(iter: Iterable<T>): Stack<T>
shift(): Stack<T>
```

- [push](https://facebook.github.io/immutable-js/docs/#/Stack/push) ☆
- [pushAll](https://facebook.github.io/immutable-js/docs/#/Stack/pushAll) ☆
- [pop](https://facebook.github.io/immutable-js/docs/#/Stack/pop) ☆

```ts
push(...values: Array<T>): Stack<T> // 等价于 Stack#unshift
pushAll(iter: Iterable<T>): Stack<T> // 等价于 Stack#unshiftAll
pop(): Stack<T> // 等价于 Stack#shift
```

- [clear](https://facebook.github.io/immutable-js/docs/#/Stack/clear) ☆

```ts
clear(): Stack<T>
```

---

- [concat](https://facebook.github.io/immutable-js/docs/#/Stack/concat)

```ts
concat<C>(...valuesOrCollections: Array<Iterable<C> | C>): Stack<T | C>
```

- [map](https://facebook.github.io/immutable-js/docs/#/Stack/map)

```ts
map<M>(
    mapper: (value: T, key: number, iter: this) => M,
    context?: any
): Stack<M>
```

- [flatMap](https://facebook.github.io/immutable-js/docs/#/Stack/flatMap)

```ts
flatMap<M>(
    mapper: (value: T, key: number, iter: this) => Iterable<M>,
    context?: any
): Stack<M>
```

- [filter](https://facebook.github.io/immutable-js/docs/#/Stack/filter)

```ts
filter(
    predicate: (value: T, index: number, iter: this) => boolean,
    context?: any
): this
```

- [zip](https://facebook.github.io/immutable-js/docs/#/Stack/zip)
- [zipAll](https://facebook.github.io/immutable-js/docs/#/Stack/zipAll)
- [zipWith](https://facebook.github.io/immutable-js/docs/#/Stack/zipWith)

```ts
zip<U>(other: Collection<any, U>): Stack<[T, U]>
zip(...collections: Array<Collection<any, any>>): Stack<any>

zipAll<U>(other: Collection<any, U>): Stack<[T, U]>
zipAll(...collections: Array<Collection<any, any>>): Stack<any>

zipWith<U, Z>(
    zipper: (value: T, otherValue: U) => Z,
    otherCollection: Collection<any, U>
): Stack<Z>

zipWith<Z>(
    zipper: (...any: Array<any>) => Z,
    ...collections: Array<Collection<any, any>>
): Stack<Z>
```

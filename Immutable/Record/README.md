```ts
class Record<TProps>
```

```ts
Record<TProps>(defaultValues: TProps, name?: string): Record.Factory<TProps>
```

---

- [Record.isRecord](https://facebook.github.io/immutable-js/docs/#/Record/isRecord)

```ts
Record.isRecord(maybeRecord: any): boolean
```

- [Record.getDescriptiveName](https://facebook.github.io/immutable-js/docs/#/Record/getDescriptiveName)

```ts
Record.getDescriptiveName(record: Record<any>): string
```

---

- [has](https://facebook.github.io/immutable-js/docs/#/Record/has)
- [hasIn](https://facebook.github.io/immutable-js/docs/#/Record/hasIn)

```ts
has(key: string): boolean
hasIn(keyPath: Iterable<any>): boolean
```

- [get](https://facebook.github.io/immutable-js/docs/#/Record/get)
- [getIn](https://facebook.github.io/immutable-js/docs/#/Record/getIn)

```ts
get<K>(key: K, notSetValue: any): TProps[K]
getIn(keyPath: Iterable<any>): any
```

---

- [set](https://facebook.github.io/immutable-js/docs/#/Record/set)

```ts
set<K>(key: K, value: TProps[K]): this
```

- [update](https://facebook.github.io/immutable-js/docs/#/Record/update)

```ts
update<K>(key: K, updater: (value: TProps[K]) => TProps[K]): this
```

- [merge](https://facebook.github.io/immutable-js/docs/#/Record/merge)
- [mergeDeep](https://facebook.github.io/immutable-js/docs/#/Record/mergeDeep)
- [mergeWith](https://facebook.github.io/immutable-js/docs/#/Record/mergeWith)
- [mergeDeepWith](https://facebook.github.io/immutable-js/docs/#/Record/mergeDeepWith)

```ts
merge(...collections: Array<Partial<TProps> | Iterable<[string, any]>>): this

mergeDeep(...collections: Array<Partial<TProps> | Iterable<[string, any]>>): this

mergeWith(
    merger: (oldVal: any, newVal: any, key: keyof TProps) => any,
    ...collections: Array<Partial<TProps> | Iterable<[string, any]>>
): this

mergeDeepWith(
    merger: (oldVal: any, newVal: any, key: any) => any,
    ...collections: Array<Partial<TProps> | Iterable<[string, any]>>
): this
```

- [delete](https://facebook.github.io/immutable-js/docs/#/Record/delete)
- [clear](https://facebook.github.io/immutable-js/docs/#/Record/clear)

```ts
delete<K>(key: K): this
clear(): this
```

---

- [setIn](https://facebook.github.io/immutable-js/docs/#/Record/setIn)

```ts
setIn(keyPath: Iterable<any>, value: any): this
```

- [updateIn](https://facebook.github.io/immutable-js/docs/#/Record/updateIn)

```ts
updateIn(keyPath: Iterable<any>, updater: (value: any) => any): this
```

- [mergeIn](https://facebook.github.io/immutable-js/docs/#/Record/mergeIn)
- [mergeDeepIn](https://facebook.github.io/immutable-js/docs/#/Record/mergeDeepIn)

```ts
mergeIn(keyPath: Iterable<any>, ...collections: Array<any>): this
mergeDeepIn(keyPath: Iterable<any>, ...collections: Array<any>): this
```

- [deleteIn](https://facebook.github.io/immutable-js/docs/#/Record/deleteIn)

```ts
deleteIn(keyPath: Iterable<any>): this
```

---

- [equals](https://facebook.github.io/immutable-js/docs/#/Record/equals)

```ts
equals(other: any): boolean
```

- [hashCode](https://facebook.github.io/immutable-js/docs/#/Record/hashCode)

```ts
hashCode(): number
```

---

- [toJS](https://facebook.github.io/immutable-js/docs/#/Record/toJS)
- [toJSON](https://facebook.github.io/immutable-js/docs/#/Record/toJSON)
- [toObject](https://facebook.github.io/immutable-js/docs/#/Record/toObject)

```ts
toJS(): {[key: string]: any}
toJSON(): TProps
toObject(): TProps
```

- [toSeq](https://facebook.github.io/immutable-js/docs/#/Record/toSeq)

```ts
toSeq(): Seq.Keyed<keyof TProps, TProps[keyof TProps]>
```

---

- [@@iterator](https://facebook.github.io/immutable-js/docs/#/Record/%5BSymbol.iterator%5D)

```ts
[Symbol.iterator](): IterableIterator<[keyof TProps, TProps[keyof TProps]]>
```

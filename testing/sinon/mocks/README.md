该 fiddle 用于演示 [Mocks](http://sinonjs.org/docs/#mocks) 相关接口

```sh
$ npm install
$ npm test
```

---

> Mock = Stub + 预设断言

<p align="center"><img alt="sinon-mock.png" src="https://raw.githubusercontent.com/pwnn/img/master/sinon-mock.png"></p>

---

## 创建 Mock：

- `sinon.mock( obj )`

## 创建 Expectation：

- `mock.expects( method )`
- `sinon.expectation.create( [method] )`

## Mock 核心接口：

- `mock.expects( method )`
- `mock.restore()`
- `mock.verify()`

## Expectation 核心接口：

#### 手动校验：

- `expectation.verify()`

#### 调用次数相关：

- `expectation.exactly( n )`
- `expectation.once|twice|thrice()`
- `expectation.atLeast|atMost( n )`
- `expectation.never()`

#### 实参相关：

- `expectation.withArgs( ...args )`
- `expectation.withExactArgs( ...args )`

#### 上下文相关：

- `expectation.on( ctxt )`

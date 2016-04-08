该 fiddle 用于演示 [Stubs](http://sinonjs.org/docs/#stubs) 相关接口

```sh
$ npm install
$ npm test
```

---

> Stub = Spy + 预设行为

![sinon-stub.png](https://raw.githubusercontent.com/pwnn/img/master/sinon-stub.png)

---

## 创建 Stub：

- `sinon.stub()`
- `sinon.stub( obj , method , [func] )`

## 核心接口：

> 继承全部 [Spy 核心接口](https://github.com/pwnn/fiddle/tree/master/testing/sinon/spies#spy-相关属性接口)

#### 回调相关：

##### 预配置：

- `stub.callsArg( index )`
- `stub.callsArgOn( index , ctxt )`
- `stub.callsArgWith( index , ...args )`
- `stub.callsArgOnWith( index , ctxt , ...args )`
- `stub.yields( ...args )`
- `stub.yieldsOn( ctxt , ...args )`
- `stub.yieldsTo( key , ...args )`
- `stub.yieldsToOn( key , ctxt , ...args )`

##### 手动调用：

- `stub.callArg( index )`
- `stub.callArgWith( index , ...args )`
- `stub.yield( ...args )`
- `stub.yieldTo( key , ...args )`

#### 返回值相关：

- `stub.returns( value )`
- `stub.returnsArg( index )`
- `stub.returnsThis()`

#### 异常相关：

- `stub.throws( [value] )`

#### 过滤器：

##### 基于调用次序：

- `stub.onCall( index )`
- `stub.onFirstCall()`
- `stub.onSecondCall()`
- `stub.onThirdCall()`

##### 基于参数：

- `stub.withArgs( ...args|matchers )`

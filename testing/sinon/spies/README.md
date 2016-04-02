该 fiddle 用于演示 [Spies](http://sinonjs.org/docs/#spies) 相关接口

```sh
$ npm install
$ npm test
```

---

![sinon-spy.png](https://raw.githubusercontent.com/pwnn/img/master/sinon-spy.png)

---

## 创建 Spy：

- `sinon.spy( [func] )`
- `sinon.spy( obj, method )`
- `spy.restore()`

## Spy 相关属性、接口：

#### 核心属性：

- `spy.args`
- `spy.returnValues`
- `spy.thisValues`
- `spy.exceptions`

#### 调用次数相关：

- `spy.called`
- `spy.callCount`
- `spy.calledOnce`
- `spy.calledTwice`
- `spy.calledThrice`

#### 实参相关：

- `spy.calledWith( ...args|matchers )`
- `spy.alwaysCalledWith( ...args|matchers )`
- `spy.neverCalledWith( ...args|matchers )`
- `spy.calledWithExactly( ...args|matchers )`
- `spy.alwaysCalledWithExactly( ...args|matchers )`
- `spy.calledWithMatch( ...args )`
- `spy.alwaysCalledWithMatch( ...args )`
- `spy.neverCalledWithMatch( ...args )`
- `spy.calledWithNew()`

#### 返回值相关：

- `spy.returned( value|matcher )`
- `spy.alwaysReturned( value|matcher )`

#### 上下文相关：

- `spy.calledOn( ctxt )`
- `spy.alwaysCalledOn( ctxt )`

#### 异常相关：

- `spy.threw( [value] )`
- `spy.alwaysThrew( [value] )`

#### 过滤器：

- `spy.withArgs( ...args|matchers )`

#### SpyCall 相关：

- `spy.getCall( n )`
- `spy.firstCall`
- `spy.secondCall`
- `spy.thirdCall`
- `spy.lastCall`

#### 调用次序相关：

- `spy.calledAfter( anotherSpy )`
- `spy.calledBefore( anotherSpy )`

#### 重置记录：

- `spy.reset()`

## SpyCall 相关属性、接口：

#### 核心属性：

- `spyCall.args`
- `spyCall.returnValue`
- `spyCall.thisValue`
- `spyCall.exception`

#### 实参相关：

- `spyCall.calledWith( ...args|matchers )`
- `spyCall.notCalledWith( ...args|matchers )`
- `spyCall.calledWithExactly( ...args|matchers )`
- `spyCall.calledWithMatch( ...args )`
- `spyCall.notCalledWithMatch( ...args )`

#### 上下文相关：

- `spyCall.calledOn( ctxt )`

#### 异常相关：

- `spyCall.threw( [value] )`

const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { createStore } = require('redux')
const { createAction, handleAction, combineActions } = require('redux-actions')

chai.should()
chai.use(sinonChai)

describe('handleAction', function () {
    it('handleAction(type, reducer, defaultState)', function () {
        const spy = sinon.spy()
        const rootReducer = handleAction(combineActions('A', 'B'), spy, null)
        const store = createStore(rootReducer)

        store.dispatch(createAction('A')())
        spy.should.have.been.called

        spy.reset()
        store.dispatch(createAction('B')())
        spy.should.have.been.called

        spy.reset()
        store.dispatch(createAction('C')())
        spy.should.not.have.been.called

        // 当 _.isFunction(reducer) 时，同时担任 nextReducer 及 throwReducer

        spy.reset()
        store.dispatch(createAction('A')(new Error()))
        spy.should.have.been.called

        spy.reset()
        store.dispatch(createAction('B')(new Error()))
        spy.should.have.been.called

        spy.reset()
        store.dispatch(createAction('C')(new Error()))
        spy.should.not.have.been.called
    })

    // type ReducerMap = $Exact<{ next: Reducer, throw: Reducer }>
    it('handleAction(type, reducerMap, defaultState)', function () {
        const reducerMap = {
            next () {},
            throw () {}
        }
        const nextSpy = sinon.spy(reducerMap, 'next')
        const throwSpy = sinon.spy(reducerMap, 'throw')

        const rootReducer = handleAction(combineActions('A', 'B'), reducerMap, null)
        const store = createStore(rootReducer)

        store.dispatch(createAction('A')())
        nextSpy.should.have.been.called
        throwSpy.should.not.have.been.called

        nextSpy.reset()
        throwSpy.reset()
        store.dispatch(createAction('B')())
        nextSpy.should.have.been.called
        throwSpy.should.not.have.been.called

        nextSpy.reset()
        throwSpy.reset()
        store.dispatch(createAction('C')())
        nextSpy.should.not.have.been.called
        throwSpy.should.not.have.been.called

        nextSpy.reset()
        throwSpy.reset()
        store.dispatch(createAction('A')(new Error()))
        nextSpy.should.not.have.been.called
        throwSpy.should.have.been.called

        nextSpy.reset()
        throwSpy.reset()
        store.dispatch(createAction('B')(new Error()))
        nextSpy.should.not.have.been.called
        throwSpy.should.have.been.called

        nextSpy.reset()
        throwSpy.reset()
        store.dispatch(createAction('C')(new Error()))
        nextSpy.should.not.have.been.called
        throwSpy.should.not.have.been.called
    })
})

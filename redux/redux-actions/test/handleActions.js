const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { createStore } = require('redux')
const { createAction, handleActions } = require('redux-actions')

chai.should()
chai.use(sinonChai)

describe('handleActions', function () {
    it('handleActions(reducerMap, defaultState)', function () {

        const m = sinon.spy()
        const n = sinon.spy()
        const p = sinon.spy()
        const q = sinon.spy()

        function reset () {
            m.reset()
            n.reset()
            p.reset()
            q.reset()
        }

        const rootReducer = handleActions({
            A: undefined,   // [1] 默认使用 _.identity
            B: m,           // [2] reducer
            C: {            // [3] reducerMap
                next: p,
                throw: q
            },

            // 支持嵌套结构
            // 对于嵌套结构，最终 actionType 为 join 后的路径
            // 可以通过 { namespace: '/' } 选项来更改路径分割符
            D: {
                E: {
                    F: n
                }
            }
        }, null)
        const store = createStore(rootReducer)

        store.dispatch(createAction('A')())
        m.should.not.have.been.called
        n.should.not.have.been.called
        p.should.not.have.been.called
        q.should.not.have.been.called

        reset()
        store.dispatch(createAction('B')())
        m.should.have.been.called
        n.should.not.have.been.called
        p.should.not.have.been.called
        q.should.not.have.been.called

        reset()
        store.dispatch(createAction('B')(new Error()))
        m.should.have.been.called
        n.should.not.have.been.called
        p.should.not.have.been.called
        q.should.not.have.been.called

        reset()
        store.dispatch(createAction('C')())
        m.should.not.have.been.called
        n.should.not.have.been.called
        p.should.have.been.called
        q.should.not.have.been.called

        reset()
        store.dispatch(createAction('C')(new Error()))
        m.should.not.have.been.called
        n.should.not.have.been.called
        p.should.not.have.been.called
        q.should.have.been.called

        reset()
        store.dispatch(createAction('D/E/F')())
        m.should.not.have.been.called
        n.should.have.been.called
        p.should.not.have.been.called
        q.should.not.have.been.called

        reset()
        store.dispatch(createAction('D/E/F')(new Error()))
        m.should.not.have.been.called
        n.should.have.been.called
        p.should.not.have.been.called
        q.should.not.have.been.called
    })
})

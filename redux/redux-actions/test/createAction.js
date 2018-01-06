const uuid = require('uuid/v4')
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { createAction } = require('redux-actions')
const { isFSA, isError } = require('flux-standard-action')

chai.should()
chai.use(sinonChai)

describe('createAction', function () {
    const ACTION_TYPE = 'ACTION_TYPE'

    it('createAction(type)', function () {
        const actionCreator = createAction(ACTION_TYPE)

        // [1] 实际上返回的并不是 action，而是 actionCreator
        actionCreator.should.be.a('function')

        // [2] toString 方法被重写返回 actionType
        String(actionCreator).should.equal(ACTION_TYPE)

        let action

        const arg = uuid()
        action = actionCreator(arg)
        isFSA(action).should.be.true
        isError(action).should.be.false
        action.should.eql({
            type: ACTION_TYPE,
            payload: arg // [3] 默认 payloadCreator = _.identity
        })

        // [4] 当 actionCreator 的第一个参数为 Error 实例时：
        //  - payloadCreator 的返回值为该 Error 参数，忽略实际 payloadCreator
        //  - 自动设置 action.error = true
        const error = new Error()
        action = actionCreator(error)
        isFSA(action).should.be.true
        isError(action).should.be.true
        action.should.eql({
            type: ACTION_TYPE,
            payload: error,
            error: true
        })
    })

    it('createAction(type, payloadCreator)', function () {
        function payloadCreator (...args) {
            return args.reduce((sum, next) => sum + next)
        }
        const payloadCreatorSpy = sinon.spy(payloadCreator)

        const actionCreator = createAction(ACTION_TYPE, payloadCreatorSpy)
        payloadCreatorSpy.should.not.have.been.called

        const args = [ 1, 2, 3, 4, 5 ]
        const action = actionCreator(...args)

        payloadCreatorSpy.should.have.been.called
        payloadCreatorSpy.should.have.been.calledOnce
        payloadCreatorSpy.should.have.been.calledWith(...args)

        action.should.eql({
            type: ACTION_TYPE,
            payload: payloadCreator(...args)
        })
    })

    it('createAction(type, payloadCreator, metaCreator)', function () {
        function metaCreator (...args) {
            return args.reduce((sum, next) => sum + next)
        }
        const metaCreatorSpy = sinon.spy(metaCreator)

        const actionCreator = createAction(ACTION_TYPE, null, metaCreatorSpy)
        metaCreatorSpy.should.not.have.been.called

        const args = [ 1, 2, 3, 4, 5 ]
        const action = actionCreator(...args)

        metaCreatorSpy.should.have.been.called
        metaCreatorSpy.should.have.been.calledOnce
        metaCreatorSpy.should.have.been.calledWith(...args)

        action.should.eql({
            type: ACTION_TYPE,
            payload: args[0], // _.identity
            meta: metaCreator(...args)
        })
    })
})

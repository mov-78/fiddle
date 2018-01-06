const uuid = require('uuid/v4')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chai = require('chai')
const { createActions } = require('redux-actions')

chai.should()
chai.use(sinonChai)

describe('createActions', function () {
    it('createActions(actionMap)', function () {
        const ux = uuid()
        const uy = uuid()
        const uz = uuid()
        const x = sinon.spy(() => ux)
        const y = sinon.spy(() => uy)
        const z = sinon.spy(() => uz)

        const { a, b, c: { d: { e } } } = createActions({
            A: x,           // [1] payloadCreator
            B: [ y, z ],    // [2] [ payloadCreator, metaCreator ]

            // 支持嵌套
            // 对于嵌套结构，最终 actionType 为 join 后的路径
            // 可以通过 { namespace: '/' } 选项来更改路径分割符
            C: {
                D: {
                    E: null // [3] 默认使用 _.identity
                }
            }
        })

        const arg = uuid()

        x.should.not.have.been.called
        a(arg).should.eql({
            type: 'A',
            payload: ux
        })
        x.should.have.been.called
        x.should.have.been.calledOnce
        x.should.have.been.calledWith(arg)

        y.should.not.have.been.called
        z.should.not.have.been.called
        b(arg).should.eql({
            type: 'B',
            payload: uy,
            meta: uz
        })
        y.should.have.been.called
        y.should.have.been.calledOnce
        y.should.have.been.calledWith(arg)
        z.should.have.been.called
        z.should.have.been.calledOnce
        z.should.have.been.calledWith(arg)

        e(arg).should.eql({
            type: 'C/D/E',
            payload: arg
        })
    })

    it('createActions(...identityActions)', function () {
        const { a, b } = createActions('A', 'B')
        a.should.be.a('function')
        b.should.be.a('function')

        const arg = uuid()
        a(arg).should.eql({
            type: 'A',
            payload: arg
        })
        b(arg).should.eql({
            type: 'B',
            payload: arg
        })
    })
})

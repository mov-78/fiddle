const chai = require('chai')
const { createAction, combineActions } = require('redux-actions')

chai.should()

describe('combineActions', function () {
    it('combineActions(...actionTypes)', function () {
        const A = createAction('A')
        const combinedActionTypes = combineActions(A, 'B')
        combinedActionTypes.should.be.an('object') // ←
        String(combinedActionTypes).should.equal('A||B')
    })
})

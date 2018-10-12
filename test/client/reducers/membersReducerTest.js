import sinon from 'sinon'
import assert from 'assert'

import membersReducer from '../../../src/client/reducers/members'
import * as membersActions from '../../../src/client/components/members/actions'

describe('members reducers', () => {
  describe('produces expected store for MEMBERS_LOOKUP_SUCCEEDED', () => {
    it('should handle default state', () => {
      const expectedState = { someData: 'Something' }
      const state = membersReducer({}, { type: membersActions.MEMBERS_LOOKUP_SUCCEEDED, payload: expectedState })
      assert.deepEqual(state, expectedState)
    })

    it('should handle other state', () => {
      const expectedState = { someData: 'Something' }
      const initialState = { someData: 'Something else', moreFields: 'more data' }
      const state = membersReducer(initialState, { type: membersActions.MEMBERS_LOOKUP_SUCCEEDED, payload: expectedState })
      assert.deepEqual(state, expectedState)
    })

    it('should pass through on other actions', () => {
      const initialState = { someData: 'Something else', moreFields: 'more data' }
      const state = membersReducer(initialState, { type: 'SOME_OTHER_ACTION_TYPE' })
      assert.deepEqual(state, initialState)
    })

    it('should default state if nothing is passed in.', () => {
      const state = membersReducer(undefined, { type: 'SOME_OTHER_ACTION_TYPE' })
      assert.deepEqual(state, {})

      const expectedState = { someData: 'Something' }
      const state2 = membersReducer(undefined, { type: membersActions.MEMBERS_LOOKUP_SUCCEEDED, payload: expectedState })
      assert.deepEqual(state2, expectedState)
    })
  })

  describe('produces expected store for MEMBER_LOOKUP_SUCCEEDED', () => {
    it('should handle default state', () => {
      const expectedState = { someData: 'Something' }
      const state = membersReducer({}, { type: membersActions.MEMBER_LOOKUP_SUCCEEDED, payload: expectedState })
      assert.deepEqual(state, expectedState)
    })

    it('should handle other state', () => {
      const expectedState = { someData: 'Something' }
      const initialState = { someData: 'Something else', moreFields: 'more data' }
      const state = membersReducer(initialState, { type: membersActions.MEMBER_LOOKUP_SUCCEEDED, payload: expectedState })
      assert.deepEqual(state, expectedState)
    })

    it('should pass through on other actions', () => {
      const initialState = { someData: 'Something else', moreFields: 'more data' }
      const state = membersReducer(initialState, { type: 'SOME_OTHER_ACTION_TYPE' })
      assert.deepEqual(state, initialState)
    })

    it('should default state if nothing is passed in.', () => {
      const state = membersReducer(undefined, { type: 'SOME_OTHER_ACTION_TYPE' })
      assert.deepEqual(state, {})

      const expectedState = { someData: 'Something' }
      const state2 = membersReducer(undefined, { type: membersActions.MEMBER_LOOKUP_SUCCEEDED, payload: expectedState })
      assert.deepEqual(state2, expectedState)
    })
  })
})

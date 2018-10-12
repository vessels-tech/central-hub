import sinon from 'sinon'
import assert from 'assert'

import flagsReducer from '../../../src/client/reducers/flags'
import * as membersActions from '../../../src/client/components/members/actions'

describe('flags reducers', () => {
  const membersLookupAction = { type: membersActions.MEMBERS_LOOKUP }
  const succeededAction = { type: membersActions.MEMBERS_LOOKUP_SUCCEEDED }
  const failedAction = { type: membersActions.MEMBERS_LOOKUP_FAILED }
  const membersCreateRequestAction = { type: membersActions.MEMBERS_CREATE_REQUEST }
  const createSucceededAction = { type: membersActions.MEMBERS_CREATE_SUCCEEDED }
  const createFailedAction = { type: membersActions.MEMBERS_CREATE_FAILED }
  const memberLookupRequestAction = { type: membersActions.MEMBER_LOOKUP }
  const memberLookupSucceededAction = { type: membersActions.MEMBER_LOOKUP_SUCCEEDED }
  const memberLookupFailedAction = { type: membersActions.MEMBER_LOOKUP_FAILED }
  const editRequestAction = { type: membersActions.MEMBER_EDIT_REQUEST }
  const editSucceededAction = { type: membersActions.MEMBER_EDIT_SUCCEEDED }
  const editFailedAction = { type: membersActions.MEMBER_EDIT_FAILED }
  const testStateReducer = (initialState, expectedState, action) => {
    const state = flagsReducer(initialState, action)
    assert.deepEqual(state, expectedState)
  }

  describe('produces expected store for unhandled action types', () => {
    it('should handle default state', () => {
      testStateReducer({}, {}, 'SOME_OTHER_ACTION_TYPE')
      testStateReducer(undefined, {}, 'SOME_OTHER_ACTION_TYPE')
    })

    it('should handle other state', () => {
      testStateReducer(
        { otherProp: true, membersLookupActive: false },
        { otherProp: true, membersLookupActive: true },
        membersLookupAction)
    })
  })

  describe('produces expected store for MEMBERS_LOOKUP', () => {
    it('should handle default state', () => {
      testStateReducer({}, { membersLookupActive: true }, membersLookupAction)
    })

    it('should handle other state', () => {
      testStateReducer(
        { otherProp: true, membersLookupActive: false },
        { otherProp: true, membersLookupActive: true },
        membersLookupAction)
    })
  })

  describe('produces expected store for MEMBERS_LOOKUP_SUCCEEDED and MEMBERS_LOOKUP_FAILED', () => {
    it('SUCCEEDED should handle default state', () => {
      testStateReducer({}, { membersLookupActive: false }, succeededAction)
    })
    it('FAILED should handle default state', () => {
      testStateReducer({}, { membersLookupActive: false }, failedAction)
    })

    it('SUCCEEDED should handle other state', () => {
      testStateReducer(
        { otherProp: true, membersLookupActive: true },
        { otherProp: true, membersLookupActive: false },
        succeededAction
      )
    })
    it('FAILED should handle other state', () => {
      testStateReducer(
        { otherProp: true, membersLookupActive: true },
        { otherProp: true, membersLookupActive: false },
        failedAction
      )
    })
  })

  describe('produces expected store for MEMBER_LOOKUP', () => {
    it('should handle default state', () => {
      testStateReducer({}, { memberLookupActive: true }, memberLookupRequestAction)
    })

    it('should handle other state', () => {
      testStateReducer(
        { otherProp: true, memberLookupActive: false },
        { otherProp: true, memberLookupActive: true },
        memberLookupRequestAction)
    })
  })

  describe('produces expected store for MEMBER_LOOKUP_SUCCEEDED and MEMBER_LOOKUP_FAILED', () => {
    it('SUCCEEDED should handle default state', () => {
      testStateReducer({}, { memberLookupActive: false }, memberLookupSucceededAction)
    })
    it('FAILED should handle default state', () => {
      testStateReducer({}, { memberLookupActive: false }, memberLookupFailedAction)
    })

    it('SUCCEEDED should handle other state', () => {
      testStateReducer(
        { otherProp: true, memberLookupActive: true },
        { otherProp: true, memberLookupActive: false },
        memberLookupSucceededAction
      )
    })
    it('FAILED should handle other state', () => {
      testStateReducer(
        { otherProp: true, memberLookupActive: true },
        { otherProp: true, memberLookupActive: false },
        memberLookupFailedAction
      )
    })
  })

  describe('produces expected store for MEMBERS_CREATE_REQUEST', () => {
    it('should handle default state', () => {
      testStateReducer({}, { membersCreateActive: true }, membersCreateRequestAction)
    })

    it('should handle other state', () => {
      testStateReducer(
        { otherProp: true, membersCreateActive: false },
        { otherProp: true, membersCreateActive: true },
        membersCreateRequestAction)
    })
  })

  describe('produces expected store for MEMBERS_CREATE_SUCCEEDED and MEMBERS_CREATE_FAILED', () => {
    it('SUCCEEDED should handle default state', () => {
      testStateReducer({}, { membersCreateActive: false }, createSucceededAction)
    })
    it('FAILED should handle default state', () => {
      testStateReducer({}, { membersCreateActive: false }, createFailedAction)
    })

    it('SUCCEEDED should handle other state', () => {
      testStateReducer(
        { otherProp: true, membersCreateActive: true },
        { otherProp: true, membersCreateActive: false },
        createSucceededAction
      )
    })
    it('FAILED should handle other state', () => {
      testStateReducer(
        { otherProp: true, membersCreateActive: true },
        { otherProp: true, membersCreateActive: false },
        createFailedAction
      )
    })
  })

  describe('produces expected store for MEMBERS_EDIT_REQUEST', () => {
    it('should handle default state', () => {
      testStateReducer({}, { memberEditActive: true }, editRequestAction)
    })

    it('should handle other state', () => {
      testStateReducer(
        { otherProp: true, memberEditActive: false },
        { otherProp: true, memberEditActive: true },
        editRequestAction)
    })
  })

  describe('produces expected store for MEMBER_EDIT_SUCCEEDED and MEMBER_EDIT_FAILED', () => {
    it('SUCCEEDED should handle default state', () => {
      testStateReducer({}, { memberEditActive: false }, editSucceededAction)
    })
    it('FAILED should handle default state', () => {
      testStateReducer({}, { memberEditActive: false }, editFailedAction)
    })

    it('SUCCEEDED should handle other state', () => {
      testStateReducer(
        { otherProp: true, memberEditActive: true },
        { otherProp: true, memberEditActive: false },
        editSucceededAction
      )
    })
    it('FAILED should handle other state', () => {
      testStateReducer(
        { otherProp: true, memberEditActive: true },
        { otherProp: true, memberEditActive: false },
        editFailedAction
      )
    })
  })
})

'use strict'

import * as membersActions from '../components/members/actions'

// http://www.nikola-breznjak.com/blog/javascript/converting-a-javascript-switch-statement-into-a-function-lookup/
const stateChanges = {
  [`${membersActions.MEMBERS_LOOKUP}`]: (state, action) => ({ ...state, membersLookupActive: true }),
  [`${membersActions.MEMBERS_LOOKUP_SUCCEEDED}`]: (state) => ({ ...state, membersLookupActive: false }),
  [`${membersActions.MEMBERS_LOOKUP_FAILED}`]: (state) => ({ ...state, membersLookupActive: false }),
  [`${membersActions.MEMBER_LOOKUP}`]: (state, action) => ({ ...state, memberLookupActive: true }),
  [`${membersActions.MEMBER_LOOKUP_SUCCEEDED}`]: (state) => ({ ...state, memberLookupActive: false }),
  [`${membersActions.MEMBER_LOOKUP_FAILED}`]: (state) => ({ ...state, memberLookupActive: false }),
  [`${membersActions.MEMBERS_CREATE_REQUEST}`]: (state) => ({ ...state, membersCreateActive: true }),
  [`${membersActions.MEMBERS_CREATE_SUCCEEDED}`]: (state) => ({ ...state, membersCreateActive: false }),
  [`${membersActions.MEMBERS_CREATE_FAILED}`]: (state) => ({ ...state, membersCreateActive: false }),
  [`${membersActions.MEMBER_EDIT_REQUEST}`]: (state) => ({ ...state, memberEditActive: true }),
  [`${membersActions.MEMBER_EDIT_SUCCEEDED}`]: (state) => ({ ...state, memberEditActive: false }),
  [`${membersActions.MEMBER_EDIT_FAILED}`]: (state) => ({ ...state, memberEditActive: false })
}

const flags = (state = {}, action) => {
  return (typeof stateChanges[action.type] === 'function') ? stateChanges[action.type](state) : state
}

export default flags

'use strict'

import * as membersActions from '../components/members/actions'

const stateChanges = {
  [`${membersActions.MEMBERS_LOOKUP_SUCCEEDED}`]: (state, action) => (action.payload),
  [`${membersActions.MEMBER_LOOKUP_SUCCEEDED}`]: (state, action) => (action.payload)
}

const members = (state = {}, action) => {
  return (typeof stateChanges[action.type] === 'function') ? stateChanges[action.type](state, action) : state
}

export default members

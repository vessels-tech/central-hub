'use strict';

import * as membersActions from '../components/members/actions';

const stateChanges = {
  [`${membersActions.MEMBERS_CREATE_REQUEST}`]: (state, action) => ({ ...state, member: action.payload }),
  [`${membersActions.MEMBERS_CREATE_SUCCEEDED}`]: (state, action) => ({ ...state, member: action.payload }),
  [`${membersActions.MEMBERS_CREATE_FAILED}`]: (state, action) => ({ ...state, member: action.payload.member, error: action.payload.errorMessage })
};

const create = (state = {}, action) => {
  return (typeof stateChanges[action.type] === 'function') ? stateChanges[action.type](state, action) : state;
}

export default create;

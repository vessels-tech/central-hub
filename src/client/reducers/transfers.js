'use strict';

import * as transfersActions from '../components/transfers/actions';

const stateChanges = {
  [`${transfersActions.RETRIEVE_TRANSFERS_SUCCEEDED}`]: (state, action) => (action.payload),
  [`${transfersActions.RETRIEVE_TRANSFERS_SUCCEEDED}`]: (state, action) => (action.payload)
};

const transfers = (state = {}, action) => {
  return (typeof stateChanges[action.type] === 'function') ? stateChanges[action.type](state, action) : state;
};

export default transfers;

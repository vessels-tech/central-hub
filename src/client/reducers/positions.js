'use strict';

import * as positionsActions from '../components/positions/actions';

const stateChanges = {
  [`${positionsActions.RETRIEVE_POSITIONS_SUCCEEDED}`]: (state, action) => (action.payload),
  [`${positionsActions.RETRIEVE_POSITIONS_SUCCEEDED}`]: (state, action) => (action.payload)
};

const positions = (state = {}, action) => {
  return (typeof stateChanges[action.type] === 'function') ? stateChanges[action.type](state, action) : state;
};

export default positions;

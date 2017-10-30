'use strict';

import * as chargesActions from '../components/charges/actions';

const stateChanges = {
  [`${chargesActions.CHARGES_LOOKUP_SUCCEEDED}`]: (state, action) => (action.payload),
  [`${chargesActions.CHARGES_LOOKUP_SUCCEEDED}`]: (state, action) => (action.payload)
};

const charges = (state = {}, action) => {
  return (typeof stateChanges[action.type] === 'function') ? stateChanges[action.type](state, action) : state;
};

export default charges;

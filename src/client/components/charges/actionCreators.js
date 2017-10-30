'use strict';

import 'isomorphic-fetch'
import * as actions from './actions';

const handleErrors = (response) => {
  if (!response.ok) throw Error(response.statusText);
  return response.json();
}

const lookupCharges = () => {
  return (dispatch, getState) => {
    dispatch({ type: actions.CHARGES_LOOKUP });

    return fetch("/api/charges", { method: 'get' })
      .then(handleErrors)
      .then(charges => dispatch({ type: actions.CHARGES_LOOKUP_SUCCEEDED, payload: charges }))
      .catch(error => dispatch({ type: actions.CHARGES_LOOKUP_FAILED, payload: error.message }));
  }
}

export {
  lookupCharges
}

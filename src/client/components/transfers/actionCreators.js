'use strict';

import 'isomorphic-fetch'
import * as actions from './actions';

const handleErrors = (response) => {
  if (!response.ok) throw Error(response.statusText);
  console.log('transfers response',response.json());
  return response.json();
}

const retrieveTransfers = () => {
  return (dispatch, getState) => {
    dispatch({ type: actions.RETRIEVE_TRANSFERS });

    return fetch("/api/transfers", { method: 'get' })
      .then(handleErrors)
      .then(transfers => dispatch({ type: actions.RETRIEVE_TRANSFERS_SUCCEEDED, payload: transfers }))
      .catch(error => dispatch({ type: actions.RETRIEVE_TRANSFERS_FAILED, payload: error.message }));
  }
}

export {
  retrieveTransfers
}

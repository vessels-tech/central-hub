'use strict';

import 'isomorphic-fetch'
import * as actions from './actions';

const handleErrors = (response) => {
  if (!response.ok) throw Error(response.statusText);
  console.log('positions response',response.json());
  return response.json();
}

const retrievePositions = () => {
  return (dispatch, getState) => {
    dispatch({ type: actions.RETRIEVE_POSITIONS });
  
    return fetch("/api/positions", { 
      method: 'get',
      headers: new Headers({
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        'authorization': 'Basic ZGZzcDE6ZGZzcDE=',
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
      })      
    })
      .then(handleErrors)
      .then(positions => dispatch({ type: actions.RETRIEVE_POSITIONS_SUCCEEDED, payload: positions }))
      .catch(error => dispatch({ type: actions.RETRIEVE_POSITIONS_FAILED, payload: error.message }));
  }
}

export {
  retrievePositions
}

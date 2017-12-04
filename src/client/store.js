'use strict'

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';

import { browserHistory } from 'react-router';
import transfers from './data/transfers';
import rootReducer from './reducers/reducers';

const defaultState = {
  members: [],
  create: {},
  positions: [],
  transfers: [],
  charges: []
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
export const history = syncHistoryWithStore(browserHistory, store);

export default store;

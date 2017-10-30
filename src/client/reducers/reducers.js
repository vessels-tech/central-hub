'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as membersActions from '../components/members/actions';
import * as chargesActions from '../components/charges/actions';
import flags from './flags';
import members from './members';
import charges from './charges';
import create from './create';

const transfers = (state = {}) => (state)

const rootReducer = combineReducers({ flags, create, members, transfers, charges, routing: routerReducer });

export default rootReducer;

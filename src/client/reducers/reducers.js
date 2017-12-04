'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as membersActions from '../components/members/actions';
import * as chargesActions from '../components/charges/actions';
import flags from './flags';
import members from './members';
import charges from './charges';
import transfers from './transfers';
import positions from './positions';
import create from './create';

const xfers = (state = {}) => (state)

const rootReducer = combineReducers({ xfers, flags, create, members, positions, transfers, charges, routing: routerReducer });

export default rootReducer;

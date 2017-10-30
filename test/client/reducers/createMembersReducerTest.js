import sinon from 'sinon';
import assert from 'assert';

import createReducer from '../../../src/client/reducers/create';
import * as membersActions from '../../../src/client/components/members/actions';

describe('create reducer', () => {

  describe('produces expected store for MEMBERS_CREATE_REQUEST or MEMBERS_CREATE_SUCCEEDED', () => {
    it('should handle default state MEMBERS_CREATE_REQUEST', () => {
      const expectedState = { someData: "Something" };
      const state = createReducer({}, { type: membersActions.MEMBERS_CREATE_REQUEST, payload: expectedState });
      assert.deepEqual(state, { member: expectedState });
    });

    it('should handle default state MEMBERS_CREATE_SUCCEEDED', () => {
      const expectedState = { someData: "Something" };
      const state = createReducer({}, { type: membersActions.MEMBERS_CREATE_SUCCEEDED, payload: expectedState });
      assert.deepEqual(state, { member: expectedState });
    });

    it('should handle other state MEMBERS_CREATE_REQUEST', () => {
      const expectedState = { someData: "Something" };
      const initialState = { someData: "Something else", moreFields: "more data" };
      const state = createReducer(initialState, { type: membersActions.MEMBERS_CREATE_REQUEST, payload: expectedState });
      assert.deepEqual(state, { someData: "Something else", moreFields: "more data", member: expectedState });
    });

    it('should handle other state MEMBERS_CREATE_SUCCEEDED', () => {
      const expectedState = { someData: "Something" };
      const initialState = { someData: "Something else", moreFields: "more data" };
      const state = createReducer(initialState, { type: membersActions.MEMBERS_CREATE_SUCCEEDED, payload: expectedState });
      assert.deepEqual(state, { someData: "Something else", moreFields: "more data", member: expectedState });
    });

    it('should pass through on other actions', () => {
      const initialState = { someData: "Something else", moreFields: "more data" };
      const state = createReducer(initialState, { type: 'SOME_OTHER_ACTION_TYPE' });
      assert.deepEqual(state, initialState);
    });

    it('should handle undefined initialState', () => {
      const initialState = undefined;
      const state = createReducer(initialState, { type: 'SOME_OTHER_ACTION_TYPE' });
      assert.deepEqual(state, {});
    });
  });

  describe('produces expected store for MEMBERS_CREATE_FAILED', () => {
    it('should handle new state for errors', () => {
      const member = { name: "testMember" };
      const payload = { member: member, errorMessage: "Some Error" };
      const expectedState = { member: member, error: payload.errorMessage };
      const initialState = {};
      const state = createReducer(initialState, { type: membersActions.MEMBERS_CREATE_FAILED, payload: payload });
      assert.deepEqual(state, expectedState);
    });
  });

  describe('produces expected store for other actions', () => {
    it('should pass through on other actions', () => {
      const initialState = { someData: "Something else", moreFields: "more data" };
      const state = createReducer(initialState, { type: 'SOME_OTHER_ACTION_TYPE' });
      assert.deepEqual(state, initialState);
    });
  });
});

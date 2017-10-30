import sinon from 'sinon';
import assert from 'assert';

import * as actions from '../../../../src/client/components/members/actions';
import {lookupMembers} from '../../../../src/client/components/members/actionCreators';

describe('actionCreators lookupMembers', () => {

  let fetchStub;
  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch');
  });

  afterEach(() => fetchStub.restore());

  describe('successfully lookupMembers', () => {
    it('should call fetch on accounts and dispatch lookup and then success', () => {
      const dispatch = sinon.spy();

      const mockMembers = {};
      const mockResponse = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          statusText: "Members Looked up 200.",
          json: () => {
          return Promise.resolve(mockMembers);
        }});
      });

      const expectedFirstDispatch = {type: actions.MEMBERS_LOOKUP};
      const expectedSuccessDispatch = {type: actions.MEMBERS_LOOKUP_SUCCEEDED, payload: mockMembers};
      const expectedFetchParam1 = "/api/accounts"
      const expectedFetchParam2 = {method:'get'};

      fetchStub.withArgs(expectedFetchParam1, expectedFetchParam2).returns(mockResponse);

      const membersFunc = lookupMembers();
      const promise = membersFunc(dispatch);

      return promise.then(() => {
        sinon.assert.calledWith(dispatch, expectedFirstDispatch);
        sinon.assert.calledWith(dispatch, expectedSuccessDispatch);
      });
    })
  })

  describe('unsuccessfully lookupMembers', () => {
    it('should call fetch on accounts and dispatch lookup and then failure', () => {
      const dispatch = sinon.spy();

      const mockError = {message: "Network Error"};
      const mockResponse = Promise.reject(mockError);

      const expectedFirstDispatch = {type: actions.MEMBERS_LOOKUP};
      const expectedFailureDispatch = {type: actions.MEMBERS_LOOKUP_FAILED, payload: mockError.message};
      const expectedFetchParam1 = "/api/accounts"
      const expectedFetchParam2 = {method:'get'};

      fetchStub.withArgs(expectedFetchParam1, expectedFetchParam2).returns(mockResponse);

      const membersFunc = lookupMembers();
      const promise = membersFunc(dispatch);

      return promise.then((response) => {
        sinon.assert.calledWith(dispatch, expectedFirstDispatch);
        sinon.assert.calledWith(dispatch, expectedFailureDispatch);
      });
    })
  })

//https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
  describe('unsuccessfully lookupMembers', () => {
    it('should call fetch on accounts and dispatch lookup and then failure due to status code', () => {
      const dispatch = sinon.spy();

      const mockResponse = {
          ok: false,
          statusText: "Bad Request Response Code 400",
          json: () => {
          return Promise.resolve(mockError);
          }
      };
      const mockResponsePromise = Promise.resolve(mockResponse);

      const expectedFirstDispatch = {type: actions.MEMBERS_LOOKUP};
      const expectedFailureDispatch = {type: actions.MEMBERS_LOOKUP_FAILED, payload: mockResponse.statusText};
      const expectedFetchParam1 = "/api/accounts"
      const expectedFetchParam2 = {method:'get'};

      fetchStub.withArgs(expectedFetchParam1, expectedFetchParam2).returns(mockResponsePromise);

      const membersFunc = lookupMembers();
      const fetchPromise = membersFunc(dispatch);

      return fetchPromise.then((result) => {
        sinon.assert.calledWith(dispatch, expectedFirstDispatch);
        sinon.assert.calledWith(dispatch, expectedFailureDispatch);
      });
    })
  })
})

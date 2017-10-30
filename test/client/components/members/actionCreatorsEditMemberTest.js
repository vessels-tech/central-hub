import sinon from 'sinon';
import assert from 'assert';

import * as actions from '../../../../src/client/components/members/actions';
import { editMember } from '../../../../src/client/components/members/actionCreators';

describe('actionCreators createMember', () => {

  let fetchStub;
  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch');
  });

  afterEach(() => fetchStub.restore());

  describe('successfully editMember', () => {
    it('should call fetch on accounts and dispatch lookup and then success', () => {
      const dispatch = sinon.spy();

      const mockMember = { name: 'dfsp1', isDisabled: true };
      const mockResponse = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          statusText: "Members Looked up 200.",
          json: () => {
            return Promise.resolve(mockMember);
          }
        });
      });

      const expectedFirstDispatch = { type: actions.MEMBER_EDIT_REQUEST, payload: mockMember };
      const expectedSuccessDispatch = { type: actions.MEMBER_EDIT_SUCCEEDED, payload: mockMember };
      const expectedFetchParam1 = "/api/accounts/dfsp1"
      const expectedFetchParam2 = {
        method: 'put',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_disabled: mockMember.isDisabled })
      };

      fetchStub.withArgs(expectedFetchParam1, expectedFetchParam2).returns(mockResponse);

      const membersFunc = editMember(mockMember);
      const promise = membersFunc(dispatch);

      return promise.then(() => {
        sinon.assert.calledWith(dispatch, expectedFirstDispatch);
        sinon.assert.calledWith(dispatch, expectedSuccessDispatch);
      });
    })
  })

  describe('unsuccessfully editMember', () => {
    it('should call fetch on accounts and dispatch lookup and then failure', () => {
      const dispatch = sinon.spy();

      const mockMember = { name: 'dfsp1', isDisabled: true };
      const mockError = { message: "Network Error" };
      const mockResponse = Promise.reject(mockError);

      const expectedFirstDispatch = { type: actions.MEMBER_EDIT_REQUEST, payload: mockMember };
      const expectedFailureDispatch = { type: actions.MEMBER_EDIT_FAILED, payload: { errorMessage: mockError.message, member: mockMember } };
      const expectedFetchParam1 = "/api/accounts/dfsp1"
      const expectedFetchParam2 = {
        method: 'put',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_disabled: mockMember.isDisabled })
      };

      fetchStub.withArgs(expectedFetchParam1, expectedFetchParam2).returns(mockResponse);

      const membersFunc = editMember(mockMember);
      const promise = membersFunc(dispatch);

      return promise.then((response) => {
        sinon.assert.calledWith(dispatch, expectedFirstDispatch);
        sinon.assert.calledWith(dispatch, expectedFailureDispatch);
      });
    })
  })

  //https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
  describe('unsuccessfully editMember', () => {
    it('should call fetch on accounts and dispatch lookup and then failure due to status code', () => {
      const dispatch = sinon.spy();

      const mockMember = { name: 'dfsp1', isDisabled: true };
      const mockError = { message: "Network Error" };
      const mockResponse = {
        ok: false,
        statusText: "Bad Request Response Code 400",
        json: () => {
          return Promise.resolve(mockError);
        }
      };
      const mockResponsePromise = Promise.resolve(mockResponse);

      const expectedFirstDispatch = { type: actions.MEMBER_EDIT_REQUEST, payload: mockMember };
      const expectedFailureDispatch = { type: actions.MEMBER_EDIT_FAILED, payload: { errorMessage: mockResponse.statusText, member: mockMember } };
      const expectedFetchParam1 = "/api/accounts/dfsp1"
      const expectedFetchParam2 = {
        method: 'put',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_disabled: mockMember.isDisabled })
      };

      fetchStub.withArgs(expectedFetchParam1, expectedFetchParam2).returns(mockResponsePromise);

      const membersFunc = editMember(mockMember);
      const fetchPromise = membersFunc(dispatch);

      return fetchPromise.then((result) => {
        sinon.assert.calledWith(dispatch, expectedFirstDispatch);
        sinon.assert.calledWith(dispatch, expectedFailureDispatch);
      });
    })
  })
})

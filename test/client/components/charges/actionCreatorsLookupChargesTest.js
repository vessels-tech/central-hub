const sinon = require('sinon');
const actions = require('../../../../src/client/components/charges/actions');
const lookupCharges = require('../../../../src/client/components/charges/actionCreators').lookupCharges;
const assert= require('assert');
const { describe } = require('mocha');

describe('actionCreators lookupCharges', () => {

  let fetchStub;
  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch');
  });

  afterEach(() => fetchStub.restore());

  describe('successfully lookupCharges', () => {
    it('should call fetch on charges and dispatch lookup and then success', () => {
      const dispatch = sinon.spy();

      const mockCharges = {};
      const mockResponse = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          statusText: "Charges Looked up 200.",
          json: () => {
            return Promise.resolve(mockCharges);
          }
        });
      });

      const expectedFirstDispatch = { type: actions.CHARGES_LOOKUP };
      const expectedSuccessDispatch = { type: actions.CHARGES_LOOKUP_SUCCEEDED, payload: mockCharges };
      const expectedFetchParam1 = "/api/charges"
      const expectedFetchParam2 = { method: 'get' };

      fetchStub.withArgs(expectedFetchParam1, expectedFetchParam2).returns(mockResponse);

      const chargesFunc = lookupCharges();
      const promise = chargesFunc(dispatch);

      return promise.then(() => {
        sinon.assert.calledWith(dispatch, expectedFirstDispatch);
        sinon.assert.calledWith(dispatch, expectedSuccessDispatch);
      });
    })
  })

  describe('unsuccessfully lookupCharges', () => {
    it('should call fetch on charges and dispatch lookup and then failure', () => {
      const dispatch = sinon.spy();

      const mockError = { message: "Network Error" };
      const mockResponse = Promise.reject(mockError);

      const expectedFirstDispatch = { type: actions.CHARGES_LOOKUP };
      const expectedFailureDispatch = { type: actions.CHARGES_LOOKUP_FAILED, payload: mockError.message };
      const expectedFetchParam1 = "/api/charges"
      const expectedFetchParam2 = { method: 'get' };

      fetchStub.withArgs(expectedFetchParam1, expectedFetchParam2).returns(mockResponse);

      const chargesFunc = lookupCharges();
      const promise = chargesFunc(dispatch);

      return promise.then((response) => {
        sinon.assert.calledWith(dispatch, expectedFirstDispatch);
        sinon.assert.calledWith(dispatch, expectedFailureDispatch);
      });
    })
  })

  //https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
  describe('unsuccessfully lookupCharges', () => {
    it('should call fetch on charges and dispatch lookup and then failure due to status code', () => {
      const dispatch = sinon.spy();

      const mockResponse = {
        ok: false,
        statusText: "Bad Request Response Code 400",
        json: () => {
          return Promise.resolve(mockError);
        }
      };
      const mockResponsePromise = Promise.resolve(mockResponse);

      const expectedFirstDispatch = { type: actions.CHARGES_LOOKUP };
      const expectedFailureDispatch = { type: actions.CHARGES_LOOKUP_FAILED, payload: mockResponse.statusText };
      const expectedFetchParam1 = "/api/charges"
      const expectedFetchParam2 = { method: 'get' };

      fetchStub.withArgs(expectedFetchParam1, expectedFetchParam2).returns(mockResponsePromise);

      const chargesFunc = lookupCharges();
      const fetchPromise = chargesFunc(dispatch);

      return fetchPromise.then((result) => {
        sinon.assert.calledWith(dispatch, expectedFirstDispatch);
        sinon.assert.calledWith(dispatch, expectedFailureDispatch);
      });
    })
  })
})

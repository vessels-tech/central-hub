import sinon from 'sinon'
import assert from 'assert'

import * as actions from '../../../../src/client/components/members/actions'
import { createMember } from '../../../../src/client/components/members/actionCreators'

describe('actionCreators createMember', () => {
  let fetchStub
  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch')
  })

  afterEach(() => fetchStub.restore())

  describe('successfully createMember', () => {
    it('should call fetch on accounts and dispatch lookup and then success', () => {
      const dispatch = sinon.spy()

      const mockMember = {}
      const mockResponse = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          statusText: 'Members Looked up 200.',
          json: () => {
            return Promise.resolve(mockMember)
          }
        })
      })

      const expectedFirstDispatch = { type: actions.MEMBERS_CREATE_REQUEST, payload: mockMember }
      const expectedSuccessDispatch = { type: actions.MEMBERS_CREATE_SUCCEEDED, payload: mockMember }
      const expectedFetchParam1 = '/api/accounts'
      const expectedFetchParam2 = {
        method: 'post',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(mockMember)
      }

      fetchStub.withArgs(expectedFetchParam1, expectedFetchParam2).returns(mockResponse)

      const membersFunc = createMember(mockMember)
      const promise = membersFunc(dispatch)

      return promise.then(() => {
        sinon.assert.calledWith(dispatch, expectedFirstDispatch)
        sinon.assert.calledWith(dispatch, expectedSuccessDispatch)
      })
    })
  })

  describe('unsuccessfully createMember', () => {
    it('should call fetch on accounts and dispatch lookup and then failure', () => {
      const dispatch = sinon.spy()

      const mockMember = {}
      const mockError = { message: 'Network Error' }
      const mockResponse = Promise.reject(mockError)

      const expectedFirstDispatch = { type: actions.MEMBERS_CREATE_REQUEST, payload: mockMember }
      const expectedFailureDispatch = { type: actions.MEMBERS_CREATE_FAILED, payload: { errorMessage: mockError.message, member: mockMember } }
      const expectedFetchParam1 = '/api/accounts'
      const expectedFetchParam2 = {
        method: 'post',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(mockMember)
      }

      fetchStub.withArgs(expectedFetchParam1, expectedFetchParam2).returns(mockResponse)

      const membersFunc = createMember(mockMember)
      const promise = membersFunc(dispatch)

      return promise.then((response) => {
        sinon.assert.calledWith(dispatch, expectedFirstDispatch)
        sinon.assert.calledWith(dispatch, expectedFailureDispatch)
      })
    })
  })

  // https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
  describe('unsuccessfully createMember', () => {
    it('should call fetch on accounts and dispatch lookup and then failure due to status code', () => {
      const dispatch = sinon.spy()

      const mockMember = {}
      const mockResponse = {
        ok: false,
        statusText: 'Bad Request Response Code 400',
        json: () => {
          return Promise.resolve(mockError)
        }
      }
      const mockResponsePromise = Promise.resolve(mockResponse)

      const expectedFirstDispatch = { type: actions.MEMBERS_CREATE_REQUEST, payload: mockMember }
      const expectedFailureDispatch = { type: actions.MEMBERS_CREATE_FAILED, payload: { errorMessage: mockResponse.statusText, member: mockMember } }
      const expectedFetchParam1 = '/api/accounts'
      const expectedFetchParam2 = {
        method: 'post',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(mockMember)
      }

      fetchStub.withArgs(expectedFetchParam1, expectedFetchParam2).returns(mockResponsePromise)

      const membersFunc = createMember(mockMember)
      const fetchPromise = membersFunc(dispatch)

      return fetchPromise.then((result) => {
        sinon.assert.calledWith(dispatch, expectedFirstDispatch)
        sinon.assert.calledWith(dispatch, expectedFailureDispatch)
      })
    })
  })
})

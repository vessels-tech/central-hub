import sinon from 'sinon'
import assert from 'assert'

import * as actions from '../../../../src/client/components/members/actions'
import { lookupMember } from '../../../../src/client/components/members/actionCreators'

describe('actionCreators lookupMember', () => {
  let fetchStub
  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch')
  })

  afterEach(() => fetchStub.restore())

  describe('successfully lookupMember', () => {
    it('should call fetch on account and dispatch lookup and then success', () => {
      const dispatch = sinon.spy()

      const mockMembers = { name: 'dfsp1', is_disabled: true }
      const mockResponse = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          statusText: 'Member Looked up 200.',
          json: () => {
            return Promise.resolve(mockMembers)
          }
        })
      })

      const expectedFirstDispatch = { type: actions.MEMBER_LOOKUP, payload: mockMembers }
      const expectedSuccessDispatch = { type: actions.MEMBER_LOOKUP_SUCCEEDED, payload: [mockMembers] }
      const expectedFetchParam1 = '/api/accounts/dfsp1'
      const expectedFetchParam2 = { method: 'get' }

      fetchStub.withArgs(expectedFetchParam1, expectedFetchParam2).returns(mockResponse)

      const membersFunc = lookupMember(mockMembers)
      const promise = membersFunc(dispatch)

      return promise.then(() => {
        sinon.assert.calledWith(dispatch, expectedFirstDispatch)
        sinon.assert.calledWith(dispatch, expectedSuccessDispatch)
      })
    })
  })

  describe('unsuccessfully lookupMember', () => {
    it('should call fetch on accounts and dispatch lookup and then failure', () => {
      const dispatch = sinon.spy()

      const mockMembers = { name: 'dfsp1', is_disabled: true }
      const mockError = { message: 'Network Error' }
      const mockResponse = Promise.reject(mockError)

      const expectedFirstDispatch = { type: actions.MEMBER_LOOKUP, payload: mockMembers }
      const expectedFailureDispatch = { type: actions.MEMBER_LOOKUP_FAILED, payload: { errorMessage: mockError.message, member: mockMembers } }
      const expectedFetchParam1 = '/api/accounts/dfsp1'
      const expectedFetchParam2 = { method: 'get' }

      fetchStub.withArgs(expectedFetchParam1, expectedFetchParam2).returns(mockResponse)

      const membersFunc = lookupMember(mockMembers)
      const promise = membersFunc(dispatch)

      return promise.then((response) => {
        sinon.assert.calledWith(dispatch, expectedFirstDispatch)
        sinon.assert.calledWith(dispatch, expectedFailureDispatch)
      })
    })
  })

  // https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
  describe('unsuccessfully lookupMember', () => {
    it('should call fetch on accounts and dispatch lookup and then failure due to status code', () => {
      const dispatch = sinon.spy()

      const mockMembers = { name: 'dfsp1', is_disabled: true }
      const mockError = { message: 'Network Error' }
      const mockResponse = {
        ok: false,
        statusText: 'Bad Request Response Code 400',
        json: () => {
          return Promise.resolve(mockError)
        }
      }
      const mockResponsePromise = Promise.resolve(mockResponse)

      const expectedFirstDispatch = { type: actions.MEMBER_LOOKUP, payload: mockMembers }
      const expectedFailureDispatch = { type: actions.MEMBER_LOOKUP_FAILED, payload: { errorMessage: mockResponse.statusText, member: mockMembers } }
      const expectedFetchParam1 = '/api/accounts/dfsp1'
      const expectedFetchParam2 = { method: 'get' }

      fetchStub.withArgs(expectedFetchParam1, expectedFetchParam2).returns(mockResponsePromise)

      const membersFunc = lookupMember(mockMembers)
      const fetchPromise = membersFunc(dispatch)

      return fetchPromise.then((result) => {
        sinon.assert.calledWith(dispatch, expectedFirstDispatch)
        sinon.assert.calledWith(dispatch, expectedFailureDispatch)
      })
    })
  })
})

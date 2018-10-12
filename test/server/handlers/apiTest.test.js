import sinon from 'sinon'
import assert from 'assert'
// import * as actions from '../../../src/client/components/members/actions'
import proxyquire from 'proxyquire'

describe('api forwardRequest', () => {
  beforeEach(() => {
  })

  describe('successfully forwardRequest', () => {
    it('should forward request to central-ledger api', () => {
      const dispatch = sinon.spy()
      const mockMemberRequest = {
        params: {
          param: 'accounts'
        },
        method: 'post',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      }

      let handler = proxyquire(`../../../src/server/handlers/api`, {
        'node-fetch': sinon.stub().returns(Promise.resolve({
          ok: true,
          statusText: 'Members Looked up 200.',
          body: 'this is the body',
          status: 200
        }))
      })

      const h = {
        response: response => {
          return {
            code: statusCode => {
              assert.deepEqual(statusCode, 200)
            }
          }
        }
      }
      
      return handler.forwardRequest(mockMemberRequest, h)
    })
  })

  describe('unsuccessfully forwardRequest', () => {
    it('should receive error from central-ledger api', () => {
      const dispatch = sinon.spy()
      const mockMemberRequest = {
        params: {
          param: 'accounts'
        },
        method: 'post',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      }

      const error = new Error('error')
      let handler = proxyquire(`../../../src/server/handlers/api`, {
        'node-fetch': sinon.stub().returns(Promise.reject(error))
      })

      const h = {
        response: response => {
          return assert.deepEqual(response, error)
        }
      }

      return handler.forwardRequest(mockMemberRequest, h)
    })
  })

  describe('unsuccessfully forwardRequest', () => {
    it('should not send request if not whitelisted', () => {
      const dispatch = sinon.spy()
      const mockMemberRequest = {
        params: {
          param: ''
        },
        method: 'post',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      }

      let handler = proxyquire(`../../../src/server/handlers/api`, {})

      const h = {
        response: response => {
          return assert.deepEqual(response, new Error('The requested url could not be found.'))
        }
      }

      return handler.forwardRequest(mockMemberRequest, h)
    })
  })
  describe('successful healthcheck', () => {
    it('should return 200', () => {
      const dispatch = sinon.spy()
      let handler = proxyquire(`../../../src/server/handlers/api`, {})
      const h = {
        response: response => {
          assert.equal(response.status, 'OK')
          return {
            code: statusCode => {
              assert.deepEqual(statusCode, 200)
            }
          }
        }
      }
      return handler.health({}, h)
    })
  })
})

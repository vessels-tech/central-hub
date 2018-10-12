'use strict'

const ApiHandler = require('./handlers/api')

const routes = [
  {
    method: 'GET',
    path: '/health',
    handler: ApiHandler.health,
    config: {
      description: 'Status of service',
      id: 'health'
    }
  },
  {
    method: ['GET', 'POST', 'PUT'],
    path: '/api/{param*}',
    handler: ApiHandler.forwardRequest
  },
  {
    method: 'GET',
    path: '/{path*}',
    handler: (req, rep) => {
      rep.view('index')
    }
  },
  {
    method: 'GET',
    path: '/static/{param*}',
    handler: {
      directory: {
        path: 'static/dist'
      }
    }
  }
]

exports.register = (server, options, next) => {
  server.route(routes)
}

exports.register.attributes = {
  name: 'routes'
}

exports.name = 'routes'

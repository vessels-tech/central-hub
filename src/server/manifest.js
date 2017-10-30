'use strict'

const logEvents = {
  log: '*',
  error: '*'
};

function getLogFormatter() {
  return 'good-console';
}

module.exports = {
  connections: [{
    port: 4001
  }],
  registrations: [
    { plugin: 'inert' },
    { plugin: 'vision' },
    {
      plugin: {
        register: 'visionary',
        options: {
          engines: { mustache: 'hapi-mustache' },
          relativeTo: __dirname,
          path: 'views'
        }
      }
    },
    {
      plugin: {
        register: 'good',
        options: {
          ops: {
            interval: 1000
          },
          reporters: {
            console: [
              {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [logEvents]
              },
              { module: getLogFormatter() },
              'stdout'
            ]
          }
        }
      }
    },
    { plugin: './routes' }
  ]
}

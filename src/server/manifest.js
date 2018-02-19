'use strict'

const logEvents = {
  log: '*',
  error: '*'
};

function getLogFormatter() {
  return 'good-console';
}

module.exports = {
  server: {
    port: 4001
  },
  register: {
    plugins: [
      {plugin: 'inert'},
      {plugin: 'vision'},
       /* {
          plugin:'visionary',
             options: {
               engines: {mustache: 'hapi-mustache'},
               relativeTo: __dirname,
               path: 'views'
             }
         }, */
      {
        plugin:'good',
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
                {module: getLogFormatter()},
                'stdout'
              ]
            }
          }
      },
      {plugin: './routes'}
    ]
  }
}

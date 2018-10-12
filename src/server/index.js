'use strict'

const Glue = require('glue')
const manifest = require('./manifest')
const composeOptions = { relativeTo: __dirname }
const Mustache = require('mustache')
module.exports = Glue.compose(manifest, composeOptions)
  .then(server => {
    server.views({
      engines: {
        html: {
          compile: (template) => {
            Mustache.parse(template)
            return (context) => {
              return Mustache.render(template, context)
            }
          }
        }
      },
      relativeTo: __dirname,
      path: 'views'
    })
    server.start()
      .then(() => {
        server.log(['startup'], `Server started at http://${server.info.address}:${server.info.port}`)
        return server
      })
  }
  )

'use strict'

const Glue = require('glue');
const manifest = require('./manifest');

const composeOptions = { relativeTo: __dirname }

module.exports = Glue.compose(manifest, composeOptions)
  .then(server => server.start()
    .then(() => {
      server.log(['startup'], `Server started at http://${server.info.address}:${server.info.port}`)
      return server
    })
  )

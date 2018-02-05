const fetch = require('node-fetch')
const Config = require('../lib/config')

const endpoints = [
  new RegExp(/^accounts/),
  new RegExp(/^accounts\/([a-z0-9])/),
  new RegExp(/^charges/),
  new RegExp(/^transfers/),
  new RegExp(/^positions/)
]

const isValidEndpoint = (endpoint) => {
  let valid = false
  endpoints.forEach(e => {
    valid = valid || e.test(endpoint)
  })
  return valid
}

const forwardRequest = (request, reply) => {
  const endpoint = request.params.param || ''
  const apiUri = Config.API_URL
  const adminApiUri = Config.ADMIN_API_URL

  // var uri = "";

  // Determine correct uri to set up
  // if (endpoint == "positions") {
  //   uri = `${apiUri}/${endpoint}?token=some-token`;
  // } else {
  //   uri = `${adminApiUri}/${endpoint}?token=some-token`;  
  //   console.log("Hub Server:", uri);  
  // }
  const uri = `${adminApiUri}/${endpoint}?token=some-token`;
  if (isValidEndpoint(endpoint)) {
    fetch(uri, { method: request.method, body: JSON.stringify(request.payload), headers: request.headers })
      .then(response => {
        return reply(response.body).code(response.status);
      })
      .catch(error => {
        return reply(error)
      })
  } else {
    return reply(new Error('The requested url could not be found.'))
  }
}

const health = (request, reply) => {
  reply({ status: 'OK' }).code(200)
}

module.exports = {
  forwardRequest,
  health
}

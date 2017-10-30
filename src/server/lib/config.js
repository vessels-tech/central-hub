const RC = require('rc')('CHUB', require('../../../config/default.json'))

module.exports = {
  HOSTNAME: RC.HOSTNAME.replace(/\/$/, ''),
  PORT: RC.PORT,
  API_URL: RC.API_URL,
  ADMIN_API_URL: RC.ADMIN_API_URL
}

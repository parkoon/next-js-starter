const morgan = require('./morgan')
const gzip = require('./gzip')
const helmet = require('./helmet')

const dev = process.env !== 'production'

module.exports = app => {
  if (dev) {
    morgan(app)
  }

  gzip(app)
  helmet(app)
}

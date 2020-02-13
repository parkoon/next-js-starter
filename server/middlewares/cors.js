const cors = require('cors')

const dev = process.env !== 'production'

const whitelist = ['http://localhost:3000', 'http://localhost:3007']

module.exports = app => {
  if (dev) {
    app.use(cors())
  } else {
    const corsOptions = {
      origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      },
    }
    app.use(cors(corsOptions))
  }
}

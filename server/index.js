// require('dotenv').config()
const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware').default
const nextI18next = require('./i18n')

const routes = require('../routes')

const port = parseInt(process.env.PORT, 10) || 3007
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
// const appHandler = app.getRequestHandler()
const routeHandler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  server.use(nextI18NextMiddleware(nextI18next))

  server.get('*', (req, res) => {
    routeHandler(req, res)
  })

  function startServer() {
    server.listen(port, () => {
      console.log(`Server is running on ${port}`)
    })
  }

  startServer()
})

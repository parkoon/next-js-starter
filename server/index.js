require('dotenv').config()
const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware').default
const nextI18next = require('./helpers/i18n')
const middlewareConfigure = require('./middlewares')

const router = require('../routes')

const withRenderAndCache = require('./helpers/cache')

const port = parseInt(process.env.PORT, 10) || 3007
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const appHandler = app.getRequestHandler()

const routerHandler = router.getRequestHandler(
  app,
  ({ req, res, route, query }) => {
    withRenderAndCache(app)(req, res, route.page, query)
  }
)

app.prepare().then(() => {
  const server = express()

  middlewareConfigure(server)

  server.use(nextI18NextMiddleware(nextI18next))

  server.use(routerHandler)

  server.get('*', (req, res) => {
    console.log('## APP SERVED BY APP HANDLER')
    appHandler(req, res)
  })

  function startServer() {
    server.listen(port, () => {
      console.log(`Server is running on ${port}`)
    })
  }

  startServer()
})

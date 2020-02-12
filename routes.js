// https://github.com/fridays/next-routes
const nextRoutes = require('next-routes')

const routes = nextRoutes()

const APP_ROUTES = [
  {
    page: 'index',
    pattern: '/',
  },
]

APP_ROUTES.forEach(route => routes.add(route))

module.exports = routes

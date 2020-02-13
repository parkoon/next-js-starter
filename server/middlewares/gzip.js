// https://expressjs.com/ko/advanced/best-practice-performance.html#use-gzip-compression
const compression = require('compression')

module.exports = app => {
  app.use(compression())
}

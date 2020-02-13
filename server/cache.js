const LRUCache = require('lru-cache')

const dev = process.env.NODE_ENV !== 'production'

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1hour
})

function getCacheKey(req) {
  return req.url
}

module.exports = function withRenderAndCache(app) {
  return async (req, res, pagePath, queryParams) => {
    const key = getCacheKey(req)

    if (ssrCache.has(key)) {
      console.log(`## CACHE HIT: ${key} | PAGE PATH: ${pagePath}`)
      res.setHeader('x-cache', 'HIT')
      res.send(ssrCache.get(key))
      return
    }

    try {
      const html = await app.renderToHTML(req, res, pagePath, queryParams)
      if (dev || res.statusCode !== 200) {
        console.log(`## CACHE SKIP: ${key} | PAGE PATH: ${pagePath}`)

        res.setHeader('x-cache', 'SKIP')
        res.send(html)
        return
      }

      ssrCache.set(key, html)
      console.log(`## CACHE MISS: ${key} | PAGE PATH: ${pagePath}`)
      res.setHeader('x-cache', 'MISS')
      res.send(html)
    } catch (err) {
      app.renderError(err, req, res, pagePath, queryParams)
    }
  }
}

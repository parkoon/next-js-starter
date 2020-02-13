const path = require('path')
const Dotenv = require('dotenv-webpack')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

module.exports = withBundleAnalyzer({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      // https://www.npmjs.com/package/dotenv-webpack
      new Dotenv({
        path: path.join(__dirname, '.env'),
        safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
        systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
        silent: true, // hide any errors
        defaults: false, // load '.env.defaults' as the default values if empty.
      })
    )

    if (dev) {
      config.module.rules.push({
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      })
    }

    return config
  },
  // analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  // analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  // bundleAnalyzerConfig: {
  //   server: {
  //     analyzerMode: 'static',
  //     reportFilename: '../../bundles/server.html',
  //   },
  //   browser: {
  //     analyzerMode: 'static',
  //     reportFilename: '../bundles/client.html',
  //   },
  // },
})

module.exports = {
  lintOnSave: false,
  publicPath: '/dependencies-to-graph/',
  configureWebpack: {
    resolve: {
      modules: [
        'node_modules',
      ],
    },
    module: {
      rules: [
        {
          test: /sigma.*/,
          use: 'imports-loader?this=>window',
        },
      ],
    }
  }
}
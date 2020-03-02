module.exports = {
  lintOnSave: false,
  publicPath: '/dependencies-to-tree/',
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
const config = {
  // entry specifies where webpack will start looking to build JS bundles
  entry: {
    app: ['babel-polyfill', './client/js/app']
  },
  // output controls output webpack generates
  output: {
    path: './build',
    filename: '[name]-bundle.js'
  },
  devtool: 'source-map',
  // module specifies the multiple loaders will need for our static assets.
  module: {},
  // specifies how requires are resolved in our client side code.
  resolve: {
    extension: ['', '.js'],
    modulesDirectories: ['node_modules']
  }
};

module.exports = config;

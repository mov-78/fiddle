module.exports = {
  entry: './scripts/context.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: { presets: [ 'es2015' ] }
      }
    ]
  }
}

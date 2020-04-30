module.exports = {
  entry: "./src/index",
  output: {
    filename: "./dist/app"
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

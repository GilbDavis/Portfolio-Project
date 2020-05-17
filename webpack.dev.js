module.exports = {
  entry: './src/JS/main.js',
  output: {
    path: __dirname + "/src/public",
    filename: 'bundle.js',
    publicPath: '/dist'
  }
};
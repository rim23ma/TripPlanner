module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    // eslint-disable-next-line no-path-concat
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
};

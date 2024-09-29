const path = require('path');

module.exports = {
  mode: 'development', // Add this line to specify the mode
  entry: './index.js', // Ensure this is the correct entry point
  output: {
    filename: '[name].pack.js',
    path: path.resolve(__dirname, 'dist') // Add this line to specify the output directory
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {} // You can add path aliases here if needed
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Update this line
          }
        }
      }
    ]
  },
  devtool: 'source-map' // Optional: useful for debugging
};

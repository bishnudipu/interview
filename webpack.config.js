const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output folder for build
    filename: 'bundle.js', // Name of the bundled file
    clean: true, // Cleans the dist folder before each build
  },
  mode: 'development', // Change to 'production' for optimized builds
  devServer: {
    static: './dist', // Serve content from the "dist" folder
    hot: true, // Enable hot module replacement
    port: 3000, // Port for the dev server
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // To process JS and JSX files
        exclude: /node_modules/, // Ignore node_modules
        use: {
          loader: 'babel-loader', // Use Babel loader for transpiling JS/JSX
        },
      },
      {
        test: /\.scss$/, 
        use: ['style-loader', 'css-loader', 'sass-loader'], 
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', 
    }),
  ],
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
<<<<<<< HEAD
  entry: path.resolve(__dirname, './src/index.tsx'),
=======
  entry: path.resolve(__dirname, './src/index.js'),
>>>>>>> master
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  resolve: {
<<<<<<< HEAD
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
=======
    extensions: ['.jsx', '.js'],
>>>>>>> master
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
<<<<<<< HEAD
        test: /\.(j|t)sx?$/,
=======
        test: /\.jsx?$/,
>>>>>>> master
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
<<<<<<< HEAD
        test: /\.s?css?$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
=======
        test: /\.css?$/i,
        use: ['style-loader', 'css-loader'],
>>>>>>> master
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

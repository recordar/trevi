const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

   devServer: {
    contentBase: [path.join(__dirname, './dist')],
    watchContentBase: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 300
    },
    hot: true,
    host: '0.0.0.0',
    port: 3000,
    open: false,
    historyApiFallback: true,
  },

  output: {
    filename: `[name].bundle.min.js`,
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, './dist'),
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /.html$/,
        use: {
          loader: 'html-loader',
          options: {minimize: true}
        }
      },
      {
        test: /.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: 'src/index.html',
    })
  ]
};

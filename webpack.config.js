const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

   devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
    stats: 'minimal'
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
    new HtmlWebPackPlugin({
      template: './src/index.html',
    })
  ]
};

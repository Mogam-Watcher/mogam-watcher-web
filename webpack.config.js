const path = require('path');

const dotenv = require('dotenv')
dotenv.config();

const webpack = require('webpack');


module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, './public'),
    hot: 'only',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.CREDENTIAL_PATH': JSON.stringify(process.env.CREDENTIAL_PATH),
      'process.env.SPREADSHEET_ID': JSON.stringify(process.env.SPREADSHEET_ID),
    }),
    new webpack.EnvironmentPlugin(['CREDENTIAL_PATH', 'SPREADSHEET_ID']),
  ]
};


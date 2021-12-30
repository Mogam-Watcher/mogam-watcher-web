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
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
      'process.env.AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
      'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
      'process.env.PROJECT_ID': JSON.stringify(process.env.PROJECT_ID),
      'process.env.STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
      'process.env.MESSAGING_SENDER_ID': JSON.stringify(process.env.MESSAGING_SENDER_ID),
      'process.env.APP_ID': JSON.stringify(process.env.APP_ID),
      'process.env.MESSURMENT_ID': JSON.stringify(process.env.MESSURMENT_ID),
    }),
    new webpack.EnvironmentPlugin([
      'API_KEY',
      'AUTH_DOMAIN',
      'DATABASE_URL',
      'PROJECT_ID',
      'STORAGE_BUCKET',
      'MESSAGING_SENDER_ID',
      'APP_ID',
      'MESSURMENT_ID']),
  ]
};


const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  devServer: {
    stats: 'errors-only',
    port: 3000,
    historyApiFallback: true,
    open: true,
    overlay: true,
    clientLogLevel: 'trace',
    onListening: (server) => {
      const { port } = server.listeningApp.address();
      console.log('Starting the development server on port: ', port, '\n');
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin]
};
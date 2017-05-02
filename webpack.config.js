var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//var environment = 'development';
var environment = 'production';

var getPlugins = function(environment) {
  var plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify(environment)
    }),
    new ExtractTextPlugin('bundle.css')
  ];

  switch(environment) {
    case 'production':
      plugins.push(new webpack.optimize.DedupePlugin());
      plugins.push(new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: false
        }
      }));
      break;
    case 'development':
      break;
  }

  return plugins;
};

module.exports = {
  devtool: environment == 'production' ? 'source-map' : 'eval-source-map', //more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  entry: [
    './src/main/resources/static/components/app/index.js'
  ],
  output: {
    path: path.join(__dirname, './src/main/resources/static/dist'),
    filename: 'bundle.js'
  },
  module: {
    // TODO remove the noParse when highlightjs or webpack get new releases
    noParse: [/autoit.js/],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015','stage-0', 'react']
        },
        include: [path.resolve(__dirname, "src/main/resources/static")]
      },
      {
        test: /\.less$|\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: getPlugins(environment)
}

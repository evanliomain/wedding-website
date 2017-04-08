/* eslint-env node */
/* eslint-disable camelcase */

const path              = require('path'),
      webpack           = require('webpack'),
      CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context : path.resolve(__dirname, '.'),
  entry   : [
    // activate HMR for React
    'react-hot-loader/patch',

    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',

    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',

    // the entry point of our app
    './src/index.jsx'
  ],
  output : {
    path       : path.resolve(__dirname, './dist'),
    filename   : 'js/[name].bundle.js',
    publicPath : '/'
  },

  devtool   : 'cheap-module-eval-source-map',
  devServer : {
    // enable HMR on the server
    hot : true,

    historyApiFallback : true,

    contentBase : path.resolve(__dirname, './src'),

    // match the output `publicPath`
    publicPath : '/'
  },

  resolve : {
    extensions : ['.js', '.jsx']
  },

  module : {
    rules : [{
      test    : /\.jsx?$/,
      exclude : /node_modules/,
      use     : [{
        loader  : 'babel-loader',
        options : { presets : ['stage-3', 'react'] }
      }]
    }, {
      test : /\.less$/,
      use  : [
        'style-loader',
        {
          loader  : 'css-loader',
          options : {
            localIdentName : '[path][name]__[local]--[hash:base64:5]'
          }
        },
        'less-loader',
        'postcss-loader'
      ]
    }, {
      test : /\.(png)$/i,
      use  : [{
        loader  : 'file-loader',
        options : {
          hash   : 'sha512',
          digest : 'hex',
          name   : 'img/[name]--[hash:base64:5].[ext]',
        }
      }, {
        loader  : 'image-webpack-loader',
        options : {
          progressive : true,
          optipng     : { optimizationLevel : 7 }
        }
      }]
    }, {
      test : /\.(jpg)$/i,
      use  : [{
        loader  : 'file-loader',
        options : {
          hash            : 'sha512',
          digest          : 'hex',
          name            : 'img/[name]--[hash:base64:5].[ext]'
        }
      }, {
        loader  : 'image-webpack-loader',
        options : {
          progressive : true,
          mozjpeg     : {
            quality : 100
          }
        }
      }]
    }, {
      test : /\.json$/,
      use  : [{
        loader : 'json-loader'
      }]
    }, {
      test : /\.md$/,
      use  : [{
        loader : 'raw-loader'
      }]
    }, {
      test : /\.svg$/,
      use  : [
        'babel-loader',
        {
          loader  : 'react-svg-loader',
          options : {
            svgo : {
              plugins        : [{
                cleanupIDs           : false,
                removeTitle          : true,
                removeElementsByAttr : [{
                  class : [
                    'layout-background',
                    'layout-limit',
                    'layout-grid'
                  ]
                }]
              }]
            }
          }
        }
      ]
    }, {
      // Fonts. Enforce having 'fonts' segment in path to prevent
      // matching svg image files as fonts
      test : /(^(.*[\\\/])*font[\\\/]).*\.(svg|ttf|eot|woff(2)?)(\?+.*)?$/,
      use  : [{
        loader  : 'file-loader',
        options : {
          name : 'fonts/[name]--[hash:base64:5].[ext]'
        }
      }]
    }]
  },

  plugins : [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),

    new CopyWebpackPlugin([{
      from : 'public/**/*'
    }])
  ]
};

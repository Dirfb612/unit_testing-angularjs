const webpack = require('webpack');
module.exports = {
   entry: [
      'babel-polyfill',
       './app/appModule.js'
   ],
   output: {
      path: './build/',
      filename: '[name].js'
   },
   module: {
      loaders: [
         {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,

            query: {
               plugins: ['transform-runtime'],
               presets: ['es2015', 'stage-0']
            }
         },
         {
            test: /\.css$/,
            loader: 'style!css',
            exclude: /node_modules/
         }
      ]
   },
   resolve: {
      // you can now require('file') instead of require('file.coffee')
      extensions: ['', '.js', '.json']
   }
};
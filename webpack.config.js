var webpack = require('webpack')
var path = require("path")
module.exports = {
  entry: {
        index: './src/index.js',
        state: './src/state.js',
        page: './src/page.js',
        datepicker: './src/datepicker.js',
        echarts: './src/echarts.js',
        popup: './src/popup.js',
        page2: './src/page2.js',
        page3: './src/page3.js',
    },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        },{
            test: /\.css$/, 
            loader: "style-loader!css-loader" 
        }
        ]
    }
}
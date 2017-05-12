'use strict';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = function(env){
    return{
        entry: {
                main:'./src/js/entry.js',
                vendor:'moment'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'out')
        },
        module: {
            rules:[
                {test: /\.(js|jsx)$/, use:'babel-loader'},
                {test: /\.css$/, use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
                    
                },
                
            ]
        },
        plugins: [
            new ExtractTextPlugin('style.css'),
            new webpack.optimize.CommonsChunkPlugin({name:'vendor'})
        ],
        devServer:{
            port:5000,
            historyApiFallback: true, 
        }
    }
    
}
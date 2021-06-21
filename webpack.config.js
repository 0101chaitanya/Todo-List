const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    entry: {
        index: './src/app.js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'todo-list',
        template: '/src/index.html',
    })],
    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader,css-loader'],
        }, {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
                sources: true,
            }
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            use: ['file-loader'],
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    }





}
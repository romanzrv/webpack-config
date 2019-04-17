var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');

module.exports = {
    entry: {
        app: './src/scripts/app.js',
        settings: './src/scripts/settings.js'
    },
    output: {
        filename: "./[name].bundle.js"
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            minChunks: 1,
            name: true
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist/"),
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new extractTextPlugin({filename:'app.bundle.css'}),
        new htmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World!',
            template: './src/index.html',
            chunks: ['app'],
            filename: './index.html'
        }),
        new htmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Settings',
            template: './src/index.html',
            chunks: ['app', 'settings'],
            filename: './settings.html'
        })
    ]
};

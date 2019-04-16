var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/scripts/app.js',
        settings: './src/scripts/settings.js'
    },
    output: {
        filename: "./[name].bundle.js"
    },
    watch: true,
    plugins: [
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

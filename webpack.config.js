const webpack = require("webpack");
const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')

let config = {
    mode: 'development',
    context: __dirname + "/App",
    entry: './main.js',
    output: {
        path: __dirname + "/wwwroot",
        filename: "bundle.js"
    },
    watch: true,
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
        },
        {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ]
        },
        // this will apply to both plain .scss files
        // AND <style lang="scss"> blocks in vue files
        {
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        data: '$color: red;'
                    }
                }
            ]
        }
        ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
}

module.exports = config;
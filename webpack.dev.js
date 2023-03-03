const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.bundle.js',
    }, 

    devtool: 'source-map',

    devServer: {
        static: './public',
        port: 3000,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: { 
                    "presets": [
                        ["@babel/preset-react", {
                        "runtime": "automatic"
                      }]
                      ]
                }
            }
        
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            minify: false,
            template: './public/index.html'
        })
    ]
}
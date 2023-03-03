const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'production',

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js',
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
            minify: true,
            template: './public/index.html'
        })
    ]
}
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    entry: './src/index.js',
    output: {
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
            },
            {
                test: /\.(sass|css|scss)$/,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
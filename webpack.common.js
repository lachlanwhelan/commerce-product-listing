const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    entry: './src/index.tsx',
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
            },
            { 
                test: /\.tsx?$/, 
                loader: "ts-loader" 
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
        modules: ['src', 'node_modules'] // Assuming that your files are inside the src dir
    }
}
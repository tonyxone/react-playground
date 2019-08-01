var htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    entry: {
        main: path.resolve(__dirname,'./src/index.js')
    },
    output: {
        path: path.resolve(__dirname,'./dist/js'),
        filename: 'bundle.js'
    },
    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, require.resolve('./index.html')],
               loader: 'babel-loader',
                options: {
                    presets:['@babel/preset-env','@babel/preset-react']
                    ,
                    plugins: [
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            },
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            }
        ]

    },
    plugins: [
        new htmlWebpackPlugin({
            template:'index.html'
        })
    ]
}

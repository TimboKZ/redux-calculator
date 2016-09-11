var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        './src/index.tsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx', '.sass'],
        root: path.join(__dirname, 'src')
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['ts'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.sass$/,
                loaders: ["style", "css", "sass"]
            },
        ]
    }
};

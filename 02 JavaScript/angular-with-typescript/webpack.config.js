const path = require('path');

module.exports = {
    entry: './app/main.ts',
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader' },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    }
};
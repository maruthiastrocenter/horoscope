const path = require('path');
const webpack = require("webpack");

module.exports = {
    entry: {
        app: './js/app.js',
    },
    plugins: [new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
    })],
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: './js/app.js',
    },
};

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const ESlintWebpackPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const optimization = () => {
    if (isDev) {
        return undefined;
    }
    return {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerWebpackPlugin()
        ]
    };
}
console.log('isDev', isDev);
console.log('isProd', isProd);

/** @type {import('webpack').Configuration}*/

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        alias: {
            'modules': path.resolve(__dirname, 'src/modules'),
            'images': path.resolve(__dirname, 'src/assets/images'),
            'styles': path.resolve(__dirname, 'src/assets/styles')
        }
    },
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new ESlintWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/i,
                type: 'asset/resource',
            }
        ]
    }
}
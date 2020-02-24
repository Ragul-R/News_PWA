const path = require('path');
const MiniCss = require('mini-css-extract-plugin')
const isDevelopment = process.env.NODE_ENV === 'development'
const currentDir = __dirname;

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(currentDir, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new MiniCss({
            filename: 'styles.css'
        })
    ],
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.s[ac]ss$/i,
            loader: [
                MiniCss.loader,
                {   loader: 'css-loader',
                    options:{sourceMap: isDevelopment}
                },
                {   loader: 'postcss-loader',
                    options:{
                        sourceMap: isDevelopment,
                        config: {path: 'postcss.config.js'}
                    }
                },
                {   loader: 'sass-loader',
                    options:{sourceMap: isDevelopment}
                }
            ]
        }
      ]
    }
  };
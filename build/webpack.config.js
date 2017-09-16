const path = require('path')
const projectRoot = path.resolve(__dirname, '../')
const resolve = dir => path.join(projectRoot, dir)

const config = {
  devtool: 'source-map',
  context: projectRoot,
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: '[name].js',
    path: resolve('dist/js'),
    // Code Splitting 用于页面按需懒加载
    publicPath: 'dist/js/',
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [resolve('src')],
        query: {
          presets: [
            ['env', {
              'targets': {
                'browsers': '> 5%'
              },
              'useBuiltIns': true,
            }],
            ['es2015', {'loose': true, 'modules': 'commonjs'}],
            'react'
          ],
          cacheDirectory: true,
        }
      }, {
        test: /\.css$/,
        loader: 'style!css!postcss!postcss-cssnext'
      }, {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          // limit for base64 inlining in bytes
          limit: 4096,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
}

module.exports = config
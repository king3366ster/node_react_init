const fs = require('fs')
const path = require('path')
const resolve = require('resolve');

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: Object.assign({}),
    },
    {
      loader: 'css-loader',
      options: cssOptions,
    },
    {
      loader: 'postcss-loader',
      options: {
        parser: require('postcss-scss'),
        map: 'inline',
        plugins: () => [
          require('precss'),
          // require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
        ],
      },
    },
  ];
  if (preProcessor) {
    loaders.push(preProcessor);
  }
  return loaders;
};

const config = {
  context: appDirectory,
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: resolveApp('dist'),
    // Code Splitting 用于页面按需懒加载
    publicPath: 'dist/',
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [resolveApp('src')],
        loader: 'babel-loader',
        options: {
          customize: require.resolve('babel-preset-react-app/webpack-overrides'),
          cacheDirectory: true,
          cacheCompression: false,
        },
      },
      {
        test: /\.css$/,
        use: getStyleLoaders(
          {
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]-[local]'
          },
        ),
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: 'url-loader',
        query: {
          // limit for base64 inlining in bytes
          limit: 4096,
          name: '[name].[ext]?[hash]'
        }
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css?[contenthash:8]',
      chunkFilename: 'css/[name].chunk.css?[contenthash:8]',
    }),
  ],
  mode: process.NODE_ENV || 'development',
  devtool: 'source-map',
}

module.exports = config
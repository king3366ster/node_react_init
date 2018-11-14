const path = require('path')
const resolve = require('resolve');
const projectRoot = path.resolve(__dirname, '../')
const getFilePath = dir => path.join(projectRoot, dir)

// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
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
    loaders.push(require.resolve(preProcessor));
  }
  return loaders;
};

const config = {
  devtool: 'source-map',
  context: projectRoot,
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: getFilePath('dist/js'),
    // Code Splitting 用于页面按需懒加载
    publicPath: 'dist/js/',
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [getFilePath('src')],
        options: {
          customize: require.resolve(
            'babel-preset-react-app/webpack-overrides'
          ),
          cacheDirectory: true,
          // Don't waste time on Gzipping the cache
          cacheCompression: false,
        },
      },
      {
        test: /\.css$/,
        use: getStyleLoaders({
          importLoaders: 1,
        }),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          // limit for base64 inlining in bytes
          limit: 4096,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        // Exclude `js` files to keep "css" loader working as it injects
        // its runtime that would otherwise be processed through "file" loader.
        // Also exclude `html` and `json` extensions so they get processed
        // by webpacks internal loaders.
        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
        loader: require.resolve('file-loader'),
        options: {
          name: 'public/[name].[hash:8].[ext]',
        },
      },
    ]
  },
  mode: process.NODE_ENV || 'development'
}

module.exports = config
const path = require('path');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ImageMinimizerWebpackPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require('webpack');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/main.js',
  output: {
    path: isProduction ? path.resolve(__dirname, '../dist') : undefined,
    filename: isProduction ? 'static/js/[name].[contenthash:10].js' : 'static/js/[name].js',
    chunkFilename: isProduction ? 'static/js/[name].[contenthash:10].chunk.js' : 'static/js/[name].chunk.js',
    assetModuleFilename: 'static/media/[hash:10][ext][query]',
    clean: true,
  },
  module: {
    rules: [
      // 处理css文件
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          {
            // 处理css兼容性问题
            // 配合package.json中browserslist来指定兼容性
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          {
            // 处理css兼容性问题
            // 配合package.json中browserslist来指定兼容性
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          {
            // 处理css兼容性问题
            // 配合package.json中browserslist来指定兼容性
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.styl$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          {
            // 处理css兼容性问题
            // 配合package.json中browserslist来指定兼容性
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
          'stylus-loader',
        ],
      },
      // 处理图片
      {
        test: /\.(jpe?g|png|gif|webp|svg)/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      // 处理其他资源
      {
        test: /\.(woff2?|ttf)/,
        type: 'asset/resource',
      },
      // 处理js
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          cacheCompression: false,
          // plugins: ["react-refresh/babel"], //激活js的HMR
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  // 处理html
  plugins: [
    new EslintWebpackPlugin({
      context: path.resolve(__dirname, '../src'),
      exclude: 'node_modules',
      cache: true,
      cacheLocation: path.resolve(__dirname, '../node_modules/.cache/.eslintcache'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    // new ReactRefreshWebpackPlugin(), //激活js的HMR
    isProduction &&
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:10].css',
        chunkFilename: 'static/css/[name].[contenthash:10].chunk.css',
      }),
    isProduction &&
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../public'),
            to: path.resolve(__dirname, '../dist'),
            globOptions: {
              // 忽略index.html文件
              ignore: ['**/index.html*'],
            },
          },
        ],
      }),
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    // cross-env定义的环境变量给打包工具使用
    // DefinePlugin定义的环境变量给源代码使用，从而解决vue3页面警告的问题
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ].filter(Boolean),
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}`,
    },
    minimize: isProduction,
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin(),
      new ImageMinimizerWebpackPlugin({
        minimizer: {
          implementation: ImageMinimizerWebpackPlugin.imageminGenerate,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              [
                'svgo',
                {
                  plugins: [
                    'preset-default',
                    'prefixIds',
                    {
                      name: 'sortAttrs',
                      params: {
                        xmlnsOrder: 'alphabetical',
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  },
  // webpack解析模块加载选项
  resolve: {
    // 自动补全文件扩展名
    extensions: ['.vue', '.js', '.json'],
  },
  devServer: {
    host: 'localhost',
    port: '3000',
    open: true,
    hot: true,
    historyApiFallback: true, //解决路由刷新出现404问题
  },
};

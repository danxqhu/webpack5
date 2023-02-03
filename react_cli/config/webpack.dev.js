const path = require("path");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: undefined,
    filename: "static/js/[name].js",
    chunkFilename: "static/js/[name].chunk.js",
    assetModuleFilename: "static/media/[hash:10][ext][query]",
  },
  module: {
    rules: [
      // 处理css文件
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            // 处理css兼容性问题
            // 配合package.json中browserslist来指定兼容性
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            // 处理css兼容性问题
            // 配合package.json中browserslist来指定兼容性
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            // 处理css兼容性问题
            // 配合package.json中browserslist来指定兼容性
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.styl$/,
        use: [
          "style-loader",
          "css-loader",
          {
            // 处理css兼容性问题
            // 配合package.json中browserslist来指定兼容性
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
          "stylus-loader",
        ],
      },
      // 处理图片
      {
        test: /\.(jpe?g|png|gif|webp|svg)/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      // 处理其他资源
      {
        test: /\.(woff2?|ttf)/,
        type: "asset/resource",
      },
      // 处理js
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "../src"),
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          cacheCompression: false,
        },
      },
    ],
  },
  // 处理html
  plugins: [
    new EslintWebpackPlugin({
      context: path.resolve(__dirname, "../src"),
      exclude: "node_modules",
      cache: true,
      cacheLocation: path.resolve(
        __dirname,
        "../node_modules/.cache/.eslintcache"
      ),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  mode: "development",
  devtool: "cheap-module-source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
  },
  // webpack解析模块加载选项
  resolve: {
    // 自动补全文件扩展名
    extensions: [".jsx", ".js", ".json"],
  },
  devServer: {
    host: "localhost",
    port: "3000",
    open: true,
    hot: true,
  },
};

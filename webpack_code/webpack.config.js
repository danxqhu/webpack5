const path = require('path'); //nodejs核心模块，专门用来处理路径问题
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // 入口
  entry: './src/main.js', //相对路径
  // 输出
  output: {
    // 文件的输出路径
    // __dirname nodejs的变量，代表当前文件的文件夹目录
    path: path.resolve(__dirname, 'dist'), //绝对路径
    // 入口文件打包输出文件名
    filename: 'static/js/main.js',
    // 自动清空上次打包的内容
    clean: true,
  },
  // 加载器
  module: {
    rules: [
      // loader的配置
      {
        test: /\.css$/, //只检测.css文件
        use: [
          // 执行顺序，从右到左（从下到上）
          'style-loader', //将js中css通过创建style标签添加到html文件中生效
          'css-loader',
        ], //将css资源编译成commonjs的模块到js中
      },
      {
        test: /\.less$/,
        // loader:'xxx', 只能使用1个loader
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader', //将less编译成css文件
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader', //将sass编译成css文件
        ],
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader', //将stylus编译成css文件
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // 小于10kb的图片转base64
            // 优点：减少请求数量， 缺点：体积会更大
            maxSize: 10 * 1024, //10kb
          },
        },
        generator: {
          // 输出图片名称
          // [hash:10] 哈希值取前10位
          filename: 'static/images/[hash:10][ext][query]',
        },
      },
      {
        test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
        type: 'asset/resource',
        generator: {
          // 输出图片名称
          filename: 'static/media/[hash:10][ext][query]',
        },
      },
    ],
  },
  // 插件
  plugins: [
    // plugin的配置
    new ESLintPlugin({
      // 检测哪些文件
      context: path.resolve(__dirname, 'src'),
    }),
  ],
  // 模式
  mode: 'development',
};

import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'development', //режим сборки в режиме разработки
  entry: path.resolve(__dirname, 'src', 'index.ts'), //исходная точка приложения

  //-------- если нужно другой энтрипоинт не со стандартным названием (main) или несколько ---------------------
  //   entry: {
  //     RANDOM: path.resolve(__dirname, 'src', 'index.ts'),
  //   },
  // ------------------------------------------------------------------------------------------------------------

  output: {
    //настройки куда и как будем делать сборку приложения
    filename: '[name].[contenthash].js', //[contenthash] - кеширование
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], //какие расщирения не указывать при импорте
  },
};

export default config;

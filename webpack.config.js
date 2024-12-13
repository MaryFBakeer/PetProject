const path = require('path');

module.exports = {
  mode: 'production', //режим сборки в режиме разработки
  entry: path.resolve(__dirname, 'src', 'index.js'), //исходная точка приложения

  //-------- если нужно другой энтрипоинт не со стандартным названием (main) или несколько ---------------------
  //   entry: {
  //     RANDOM: path.resolve(__dirname, 'src', 'index.js'),
  //   },
  // ------------------------------------------------------------------------------------------------------------

  output: {
    //настройки куда и как будем делать сборку приложения
    filename: '[name].[contenthash].js', //[contenthash] - кеширование
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
};

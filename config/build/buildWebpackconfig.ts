import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import webpack from 'webpack';

export function buildWebpackconfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;
  return {
    mode, //режим сборки в режиме разработки
    entry: paths.entry, //исходная точка приложения

    //-------- если нужно другой энтрипоинт не со стандартным названием (main) или несколько ---------------------
    //   entry: {
    //     RANDOM: path.resolve(__dirname, 'src', 'index.ts'),
    //   },
    // ------------------------------------------------------------------------------------------------------------

    output: {
      //настройки куда и как будем делать сборку приложения
      filename: '[name].[contenthash].js', //[contenthash] - кеширование
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
}

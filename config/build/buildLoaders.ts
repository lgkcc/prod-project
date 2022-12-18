import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Options } from './type/config';
import { buildSassLoader } from './loaders/buildSassLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders({ isDev }: Options): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|ts|jsx|tsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: ['file-loader'],
  };
  const svgLoader = buildSvgLoader();
  const cssLoader = {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath: string) => Boolean(resPath.includes('.module.')),
          localIdentName: isDev
            ? '[path][name]__[local]--[hash:base64:5]'
            : '[hash:base64:8]',
        },
      },
    }],
  };
  const sassLoader = buildSassLoader(isDev);
  const typeScriptLoader = {
    test: /\.tsx?$/, // Определяем какие файлы будут попадать под правило (в данном случае tsx и ts)
    use: 'ts-loader', // Определяем какой загрузчик следует использовать для этих файлов
    exclude: /node_modules/, // Исключение
  };
  return [babelLoader, fileLoader, svgLoader, cssLoader, sassLoader, typeScriptLoader];
}

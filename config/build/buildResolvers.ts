import webpack from 'webpack';
import { Options } from './type/config';

export function buildResolvers(options: Options): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // используется для генерации путей к модулю
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}

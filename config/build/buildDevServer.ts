import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { Options } from './type/config';

export function buildDevServer(options: Options): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}

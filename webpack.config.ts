import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { Env, Paths } from './config/build/type/config';

const paths:Paths = {
  output: path.resolve(__dirname, 'build'),
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
};
export default (env:Env): webpack.Configuration => {
  const { port = 3000, mode = 'development', analyze = false } = env;
  const isDev = mode === 'development';
  return buildWebpackConfig({
    mode,
    paths,
    port,
    isDev,
    analyze,
  });
};

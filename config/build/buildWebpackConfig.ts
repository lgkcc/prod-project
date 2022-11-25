import {buildPlugins, buildResolvers, buildLoaders} from "./index";
import webpack from "webpack";
import {Options} from "./type/config";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: Options): webpack.Configuration {
    const {mode, paths, isDev} = options
    return {
        mode, // мод в котором вебпак будет собираться (прод или дев)
        entry: paths.entry, //Входная точка приложения
        output: { // Точка билда нашего приложения
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        module: { //Лоадеры (нужны для расширения возможностей вебпака)
            rules: buildLoaders(options) //Правила для лоадеров
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(paths),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}

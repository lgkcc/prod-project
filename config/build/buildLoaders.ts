import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {Options} from "./type/config";

export function buildLoaders({isDev}: Options): webpack.RuleSetRule[] {
    const cssLoader = {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, {
            loader: "css-loader",
            options: {
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: isDev
                        ? "[path][name]__[local]--[hash:base64:5]"
                        : "[hash:base64:8]"
                }
            }
        }],
    }
    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]"
                    }
                }
            },
            "sass-loader",
        ],
    }
    const typeScriptLoader = {
        test: /\.tsx?$/, //Определяем какие файлы будут попадать под правило (в данном случае tsx и ts)
        use: 'ts-loader', //Определяем какой загрузчик следует использовать для этих файлов
        exclude: /node_modules/, // Исключение
    }
    return [cssLoader, sassLoader, typeScriptLoader]
}

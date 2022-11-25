import {Options} from "./type/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: Options): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true
    }
}

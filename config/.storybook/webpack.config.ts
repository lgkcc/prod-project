import path from "path";
import webpack, {RuleSetRule} from "webpack";
import {buildSassLoader} from "../build/loaders/buildSassLoader";
import {buildSvgLoader} from "../build/loaders/buildSvgLoader";

export default ({config}: {config: webpack.Configuration}) => {
  config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'));
  config.resolve.extensions.push('.ts', '.tsx');
  config.plugins.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
  }))

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if(/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })

  config.module.rules.push(buildSvgLoader())
  config.module.rules.push(buildSassLoader(true));
  return config;
}

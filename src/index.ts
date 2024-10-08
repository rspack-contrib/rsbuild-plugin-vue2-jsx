import { createRequire } from 'node:module';
import type { RsbuildPlugin } from '@rsbuild/core';
import { modifyBabelLoaderOptions } from '@rsbuild/plugin-babel';

const require = createRequire(import.meta.url);

type VueJSXPresetOptions = {
  /**
   * Whether to enable the Composition API in Vue.js JSX.
   */
  compositionAPI?: boolean | string;
  /**
   * Whether to enable stateless functional components in Vue.js JSX.
   */
  functional?: boolean;
  /**
   * Whether to enable automatic 'h' injection syntactic sugar.
   * @default true
   */
  injectH?: boolean;
  /**
   * Whether to enable `vModel` syntactic sugar
   */
  vModel?: boolean;
  /**
   * Whether to enable `vOn` syntactic sugar
   */
  vOn?: boolean;
};

export type PluginVueOptions = {
  /**
   * Options passed to `@vue/babel-preset-jsx`.
   * @see https://github.com/vuejs/jsx-vue2
   */
  vueJsxOptions?: VueJSXPresetOptions;
};

export const PLUGIN_VUE2_JSX_NAME = 'rsbuild:vue2-jsx';

export function pluginVue2Jsx(options: PluginVueOptions = {}): RsbuildPlugin {
  return {
    name: PLUGIN_VUE2_JSX_NAME,

    setup(api) {
      api.modifyBundlerChain((chain, { CHAIN_ID }) => {
        modifyBabelLoaderOptions({
          chain,
          CHAIN_ID,
          modifier: (babelOptions) => {
            babelOptions.presets ??= [];
            babelOptions.presets.push([
              require.resolve('@vue/babel-preset-jsx'),
              {
                injectH: true,
                ...options.vueJsxOptions,
              },
            ]);
            return babelOptions;
          },
        });
      });
    },
  };
}

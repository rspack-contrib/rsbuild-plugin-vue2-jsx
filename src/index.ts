import type { RsbuildPlugin } from '@rsbuild/core';

export type pluginVue2JsxOptions = {
  foo?: string;
  bar?: boolean;
};

export const pluginVue2Jsx = (
  options: pluginVue2JsxOptions = {},
): RsbuildPlugin => ({
  name: 'plugin-vue2-jsx',

  setup() {
    console.log('Hello Rsbuild!', options);
  },
});

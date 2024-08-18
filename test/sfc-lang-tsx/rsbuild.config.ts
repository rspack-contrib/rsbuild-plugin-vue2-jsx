import { defineConfig } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginVue2 } from '@rsbuild/plugin-vue2';
import { pluginVue2Jsx } from '@rsbuild/plugin-vue2-jsx';
import { getRandomPort } from '../helper';

export default defineConfig({
  plugins: [
    pluginVue2(),
    pluginVue2Jsx(),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
  ],
  server: {
    port: getRandomPort(),
  },
});

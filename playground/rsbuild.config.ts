import { defineConfig } from '@rsbuild/core';
import { pluginVue2Jsx } from '../src';

export default defineConfig({
  plugins: [pluginVue2Jsx()],
});

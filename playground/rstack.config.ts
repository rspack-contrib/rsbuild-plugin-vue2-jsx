// Configuration guide: https://rstack.rs/config
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginVue2 } from '@rsbuild/plugin-vue2';
import { define } from 'rstack';
import { pluginVue2Jsx } from '../src/index.ts';

define.app({
  plugins: [
    pluginVue2(),
    pluginVue2Jsx(),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
  ],
});

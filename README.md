# @rsbuild/plugin-vue2-jsx

Provides support for Vue 2 JSX / TSX syntax. The plugin internally integrates [@vue/babel-preset-jsx](https://github.com/vuejs/jsx-vue2).

<p>
  <a href="https://npmjs.com/package/@rsbuild/plugin-vue2-jsx">
   <img src="https://img.shields.io/npm/v/@rsbuild/plugin-vue2-jsx?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
</p>

## Usage

Install:

```bash
npm add @rsbuild/plugin-vue2-jsx -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginVue2 } from "@rsbuild/plugin-vue2";
import { pluginVue2Jsx } from "@rsbuild/plugin-vue2-jsx";

export default {
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    pluginVue2(),
    pluginVue2Jsx(),
  ],
};
```

Since the Vue JSX plugin relies on Babel for compilation, you need to additionally add the [@rsbuild/plugin-babel](https://www.npmjs.com/package/@rsbuild/plugin-babel).

Babel compilation will introduce extra overhead, in the example above, we use `include` to match `.jsx` and `.tsx` files, thereby reducing the performance cost brought by Babel.

After registering the plugin, you can use Vue's [JSX / TSX syntax](https://github.com/vuejs/jsx-vue2) in `.jsx`, `.tsx`, and `.vue` files.

## Vue SFC

When using JSX in Vue SFC, you need to add `lang="jsx"` or `lang="tsx"` to the `<script>` tag.

- JSX:

```html title="App.vue"
<script lang="jsx">
  const vnode = <div>hello</div>;
</script>
```

- TSX:

```html title="App.vue"
<script lang="tsx">
  const vnode = <div>hello</div>;
</script>
```

## Options

If you need to customize the compilation behavior of Vue JSX, you can use the following configs.

### vueJsxOptions

Options passed to `@vue/babel-preset-jsx`, please refer to the [@vue/babel-preset-jsx documentation](https://github.com/vuejs/jsx-vue2) for detailed usage.

- **Type:**

```ts
type VueJSXPresetOptions = {
  compositionAPI?: boolean | string;
  functional?: boolean;
  injectH?: boolean;
  vModel?: boolean;
  vOn?: boolean;
};
```

- **Default:**

```ts
const defaultOptions = {
  injectH: true,
};
```

- **Example:**

```ts
pluginVue2Jsx({
  vueJsxOptions: {
    injectH: false,
  },
});
```

## License

[MIT](./LICENSE).

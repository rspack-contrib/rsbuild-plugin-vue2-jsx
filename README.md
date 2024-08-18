# @rsbuild/plugin-vue2-jsx

@rsbuild/plugin-vue2-jsx is a Rsbuild plugin to do something.

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
import { pluginVue2Jsx } from "@rsbuild/plugin-vue2-jsx";

export default {
  plugins: [pluginVue2Jsx()],
};
```

## Options

### foo

Some description.

- Type: `string`
- Default: `undefined`
- Example:

```js
pluginVue2Jsx({
  foo: "bar",
});
```

## License

[MIT](./LICENSE).

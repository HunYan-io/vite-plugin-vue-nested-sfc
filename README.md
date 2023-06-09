# vite-plugin-vue-nested-sfc

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![build][build-src]][build-href]
[![License][license-src]][license-href]

Nest SFCs within your SFC.

## Install

Install package:

```sh
# npm
npm install -D vite-plugin-vue-nested-sfc

# yarn
yarn add -D vite-plugin-vue-nested-sfc

# pnpm
pnpm add -D vite-plugin-vue-nested-sfc
```

Add to vite config:

```js
// vite.config.js
import vue from "@vitejs/plugin-vue";
import vueNestedSFC from "vite-plugin-vue-nested-sfc";

export default {
  plugins: [vue(), vueNestedSFC()],
};
```

Add volar plugin for IDE support:

```jsonc
// tsconfig.app.json
{
  "vueCompilerOptions": {
    "plugins": ["vite-plugin-vue-nested-sfc/tooling"]
  }
}
```

## Usage

### Defining components

Nested components are defined with the `<component>` block. The block's content is treated as if it's a seperate SFC.

```html
<template>
  <MyHeader>
    Hello World!
  </MyHeader>
</template>

<component name="MyHeader" lang="vue">
  <template>
    <h1>
      <slot />
    </h1>
  </template>
</component>
```

### Exporting

You can export nested components with the `export` attribute.

```html
<!-- Button.vue -->
<template>
  <button>
    <slot />
  </button>
</template>

<component name="RoundedButton" lang="vue" export>
  <template>
    <button>
      <slot />
    </button>
  </template>
  <style scoped>
    button {
      border-radius: 20px;
    }
  </style>
</component>
```

Import them from other files as named exports.

```html
<!-- App.vue -->
<script setup>
  import { RoundedButton } from "./components/Button.vue";
</script>
<template>
  <RoundedButton>
    Click me
  </RoundedButton>
</template>
```

## License

Made with 💛

Published under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/vite-plugin-vue-nested-sfc?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/vite-plugin-vue-nested-sfc
[npm-downloads-src]: https://img.shields.io/npm/dm/vite-plugin-vue-nested-sfc?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/vite-plugin-vue-nested-sfc
[build-src]: https://github.com/HunYan-io/vite-plugin-vue-nested-sfc/actions/workflows/ci.yml/badge.svg?branch=main
[build-href]: https://github.com/HunYan-io/vite-plugin-vue-nested-sfc/actions/workflows/ci.yml
[license-src]: https://img.shields.io/github/license/HunYan-io/vite-plugin-vue-nested-sfc.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/HunYan-io/vite-plugin-vue-nested-sfc/blob/main/LICENSE

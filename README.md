<!-- TITLE/ -->
# nuxt-mermaid-string
<!-- /TITLE -->

<!-- BADGES/ -->
  <p>
    <a href="https://npmjs.org/package/nuxt-mermaid-string">
      <img
        src="https://img.shields.io/npm/v/nuxt-mermaid-string.svg"
        alt="npm version"
      >
    </a><img src="https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue" alt="Linux macOS Windows compatible"><a href="https://github.com/dword-design/nuxt-mermaid-string/actions">
      <img
        src="https://github.com/dword-design/nuxt-mermaid-string/workflows/build/badge.svg"
        alt="Build status"
      >
    </a><a href="https://codecov.io/gh/dword-design/nuxt-mermaid-string">
      <img
        src="https://codecov.io/gh/dword-design/nuxt-mermaid-string/branch/master/graph/badge.svg"
        alt="Coverage status"
      >
    </a><a href="https://david-dm.org/dword-design/nuxt-mermaid-string">
      <img src="https://img.shields.io/david/dword-design/nuxt-mermaid-string" alt="Dependency status">
    </a><img src="https://img.shields.io/badge/renovate-enabled-brightgreen" alt="Renovate enabled"><br/><a href="https://gitpod.io/#https://github.com/dword-design/nuxt-mermaid-string">
      <img
        src="https://gitpod.io/button/open-in-gitpod.svg"
        alt="Open in Gitpod"
        height="32"
      >
    </a><a href="https://www.buymeacoffee.com/dword">
      <img
        src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
        alt="Buy Me a Coffee"
        height="32"
      >
    </a><a href="https://paypal.me/SebastianLandwehr">
      <img
        src="https://dword-design.de/images/paypal.svg"
        alt="PayPal"
        height="32"
      >
    </a><a href="https://www.patreon.com/dworddesign">
      <img
        src="https://dword-design.de/images/patreon.svg"
        alt="Patreon"
        height="32"
      >
    </a>
</p>
<!-- /BADGES -->

<!-- DESCRIPTION/ -->
Embed a Mermaid diagram in a Nuxt.js app by providing its diagram string.
<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
## Install

```bash
# npm
$ npm install nuxt-mermaid-string

# Yarn
$ yarn add nuxt-mermaid-string
```
<!-- /INSTALL -->

## Usage

Add the module to your `nuxt.config.js`:

```js
export default {
  modules: [
    'nuxt-mermaid-string',
  ],
}
```

Now you can add the `vue-mermaid-string` component to your Nuxt app like this:

```html
<template>
  <client-only>
    <vue-mermaid-string :value="diagram" />
  </client-only>
</template>
```

```js
<script>
export default {
  computed: {
    diagram: () => 'graph TD\n    A --> B',
  },
}
</script>
```

<!-- LICENSE/ -->
## Contribute

Are you missing something or want to contribute? Feel free to file an [issue](https://github.com/dword-design/nuxt-mermaid-string/issues) or a [pull request](https://github.com/dword-design/nuxt-mermaid-string/pulls)! ⚙️

## Support

Hey, I am Sebastian Landwehr, a freelance web developer, and I love developing web apps and open source packages. If you want to support me so that I can keep packages up to date and build more helpful tools, you can donate here:

<p>
  <a href="https://www.buymeacoffee.com/dword">
    <img
      src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg"
      alt="Buy Me a Coffee"
      height="32"
    >
  </a>&nbsp;If you want to send me a one time donation. The coffee is pretty good 😊.<br/>
  <a href="https://paypal.me/SebastianLandwehr">
    <img
      src="https://dword-design.de/images/paypal.svg"
      alt="PayPal"
      height="32"
    >
  </a>&nbsp;Also for one time donations if you like PayPal.<br/>
  <a href="https://www.patreon.com/dworddesign">
    <img
      src="https://dword-design.de/images/patreon.svg"
      alt="Patreon"
      height="32"
    >
  </a>&nbsp;Here you can support me regularly, which is great so I can steadily work on projects.
</p>

Thanks a lot for your support! ❤️

## License

[MIT License](https://opensource.org/licenses/MIT) © [Sebastian Landwehr](https://dword-design.de)
<!-- /LICENSE -->
